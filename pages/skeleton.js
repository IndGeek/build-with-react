import React, { useEffect, useState } from 'react'
import Skelekit from '@/components/Skelekit'

const skeleton = () => {
    const [results, setResults] = useState()
    
    const mockAPI = () =>{
        return new Promise((res, rej)=>{
            setTimeout(()=>{
                res('Hi there')
            }, 2000)
        })
    }

    useEffect(()=>{
        const fetchText = async () =>{
            const data = await mockAPI();
            console.log(data)
            setResults(data)
        }
        fetchText()
    }, [])
  return (
    <div>
        {results || <Skelekit count="1" width="100px" height="10px" borderRadius='5px'/>}
        
    </div>
  )
}

export default skeleton