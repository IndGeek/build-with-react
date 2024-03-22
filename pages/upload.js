import React, { useRef, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { DocumentArrowUpIcon } from '@heroicons/react/24/outline'

// create one drag and drop component, with progress bar
// second video creating nodejs backend for s3 uploads directly
const Upload = () => {
  const [file, setFile] = useState();
  const [progress, setProgress] = useState(0);
  const fileRef = useRef();
  const [status, setStatus] = useState('idle');
  const allowedSize = 50 * 1024;
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_NAME

  const handleFileChange = (e) => {
    if (!e.target.files || !e.target.files.length > 0)
      return toast.error("Please choose a file");

    console.log(e.target.files[0], " file ---");

    if (e.target.files[0].size > allowedSize){
      fileRef.current.value = '';
      return toast.error("Please choose file less than 50kb");
    }

    try {
      setStatus("uploading");
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET);
      formData.append("cloud_name", cloudName)

      axios
        .post(`https://api.cloudinary.com/v1_1/${cloudName}/upload`, formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          },
          onUploadProgress: (progressEvent) => {
            const percentCompleted = Math.round(
              (progressEvent.loaded * 100) / progressEvent.total
            );
            setProgress(percentCompleted);
          }
        })
        .then((res) => {
          setStatus("done"); // set status to 'done'
          toast.success("File uploaded successfully");
        })
        .catch((error) => {
          fileRef.current.value = '';
          setProgress(0)
          setStatus("failed");
          toast.error("Failed to upload file");
        });
    } catch (err) {
      fileRef.current.value = '';
      setProgress(0)
      setStatus("failed");
      console.log(err)
      toast.error("Error :", err.message);
    }
  };

  return (
    <div className="w-[250px] m-auto flex flex-col items-center justify-center h-screen">
      {status !== 'idle' &&
      <span className="progress bg-gray-200 rounded w-full h-3 mb-4 relative">
        <p className="absolute -translate-y-4 right-0 top-0 text-xs">{progress}%</p>
        <span className="filled_state h-3 rounded bg-indigo-500 z-1 absolute top-0 left-0" style={{width: `${progress}%`}}></span>
      </span>
      }
      {status !== 'done' && 
      <>
      <input id="file_up_btn" type="file" ref={fileRef} onChange={(e) => handleFileChange(e)} hidden/>
        <label htmlFor="file_up_btn">
            <div className="border-2 w-[250px] border-dotted border-indigo-500 p-4 rounded-lg flex flex-col gap-2 items-center cursor-pointer">
                <DocumentArrowUpIcon className='w-10 h-10 text-indigo-600' />
                {file?.name.substring(0, 16)}
                <p className="text-indigo-500">Upload a File</p>
            </div>
        </label>
      </>
      }
      {status == 'done' && <p className="text-indigo-500 text-sm">Uploaded successfully</p>}
    </div>
  );
};

export default Upload;
