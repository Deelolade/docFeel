import React from 'react'

const Loading = () => {
    return (
        <div className='h-screen absolute top-0  left-0 w-full z-50 flex justify-center items-center backdrop-blur-xs bg-black/50'>
            <div className="">
             <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
            </div>
        </div>
    )
}

export default Loading
