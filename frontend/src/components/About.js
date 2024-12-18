import React from 'react'

export default function About() {
    return (
        <div className='flex flex-col gap-2 p-4'>
            <div className='border rounded-md bg-gray-300 p-2'>
                <h2 className='text-center font-semibold text-lg text-gray-700 py-2'>
                    About us page
                </h2>
                <div className='text-gray-400 py-1 mt-4 flex items-center justify-around gap-3'>
                    <div className='border rounded-md p-3'>
                        <h3>Left side content</h3>
                        <div className='mt-4 p-3'>
                            <div className='border rounded-md p-2 bg-gray-100'>
                                <img src="" alt="" />
                                <p className='text-center text-lg'>Rohit Ghatal</p>
                            </div>
                        </div>
                    </div>
                    <div className='border rounded-md p-3'>
                        <h3>Right side content</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}
