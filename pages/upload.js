import axios from 'axios';
import React, { useRef, useState } from 'react'
import { toast } from 'react-toastify'

const upload = () => {
    const [file, setFile] = useState(null);
    const [progress, setProgress] = useState(0);
    const [status, setStatus] = useState('idle');
    const [res, setRes] = useState(null);
    const fileRef = useRef(null);
    const allowedFileSize = 1000 * 1024;
    const cloud_name = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD
    const preset_key = process.env.NEXT_PUBLIC_CLOUDINARY_PRESET_KEY


    const handleFileChange = ({e, dropped=false}) =>{
        console.log(e, ' event')
        let tempFile = (dropped == true) ? e : e.target.files[0];
        // if(!e.target.files || !e.target.files.length > 0){
        //     return toast.error('Please select a single file')
        // }
        // if(e.target.files[0].size > allowedFileSize) {
        //     fileRef.current.value = ''
        //     return toast.error('Please upload file less than 400kb')
        // }

        if (!dropped && (!tempFile || !tempFile.type)) {
            return toast.error("Please select a valid file");
        }

        try {
            setStatus('Uploading')
            setFile(tempFile);
            const formData = new FormData();
            formData.append('file', tempFile);
            formData.append('upload_preset', preset_key)
            formData.append('cloud_name', cloud_name)

            axios.post(`https://api.cloudinary.com/v1_1/${cloud_name}/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: (progressEvent) => {
                    const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
                    setProgress(percentCompleted)
                }
            }).then(res => {
                setStatus("done");
                setRes(res?.data);
                console.log({res});
                toast.success('File uploaded successfully')
            }).catch(error=>{
                fileRef.current.value = ''
                setProgress(0);
                setStatus("failed");
                toast.error("Failed to upload")
            })
        } catch (err) {
            fileRef.current.value = ''
            setProgress(0);
            setStatus("failed");
            toast.error("Failed to upload")
        }
    }
    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        setFile(droppedFile)
        console.log(droppedFile)
        handleFileChange({e:droppedFile, dropped:true})
    };
    const handleDragOver = (event) => {
        event.preventDefault();
    };
  return (
    <div className='w-[250px] m-auto flex flex-col h-screen justify-center items-center'>
        {status !== 'idle' && status !== 'done' && 
        <span className='progress_bar bg-gray-200 w-full h-3 mb-4 rounded relative'>
            <p className='absolute right-0 top-0 -translate-y-5 text-xs'>{progress}%</p>
            <span className='filled_progress bg-indigo-500 absolute left-0 top-0 z-1 h-3 rounded' style={{width: `${progress}%`}}></span>
        </span>
        }
        {status !== 'done' && 
        <>
        <input ref={fileRef} id="file_upload_btn" type="file" onChange={(e)=> handleFileChange({ e })} hidden />
        <label htmlFor="file_upload_btn" className='cursor-pointer' onDrop={handleDrop} onDragOver={handleDragOver}>
            <div className='border-2 border-dotted border-indigo-500 w-[250px] flex flex-col gap-2 items-center justify-center p-4 rounded-md'>
            <svg className='w-5' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 15L12 2M12 2L15 5.5M12 2L9 5.5" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8 22.0002H16C18.8284 22.0002 20.2426 22.0002 21.1213 21.1215C22 20.2429 22 18.8286 22 16.0002V15.0002C22 12.1718 22 10.7576 21.1213 9.8789C20.3529 9.11051 19.175 9.01406 17 9.00195M7 9.00195C4.82497 9.01406 3.64706 9.11051 2.87868 9.87889C2 10.7576 2 12.1718 2 15.0002L2 16.0002C2 18.8286 2 20.2429 2.87868 21.1215C3.17848 21.4213 3.54062 21.6188 4 21.749" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
            {/* {file?.name.substring(0, 16)}{file?.name.length > 16 && `.${file?.name.split('.')[1]}`} */}
            <p className='text-indigo-600'>Upload a File</p>
            </div>
        </label>
        </>
        }
        {status == 'done' && <p className='done'>You can access the file from {res?.secure_url}</p>}
    </div>
  )
}

export default upload