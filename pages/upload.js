import React from 'react'

// create one drag and drop component, with progress bar
// second video creating nodejs backend for s3 uploads directly
const Upload = () => {
    const [file, setFile] = useState()
    const [progress, setProgress] = useState(0)

    const handleFileChange = (e) =>{
        const file = e.target.files[0]; // or Drop one
        const formData = new FormData();
        formData.append('file', file);
        
    }
  return (
    <div>

    </div>
  )
}

export default Upload