import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/2072fc55-4722-4634-903a-914a57406f15' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='bg-white text-4xl font-bold inline border-b-4 border-blue-900 text-gray-800'>Contact</p>
                <p className='bg-white text-gray-800 py-4'>Shoot me an email - anik@vt.edu</p>
            </div>
            <input className='p-2 bg-indigo-50' type='text' placeholder='Name' name='name' required />
            <input className='my-4 p-2 bg-indigo-50' type='email' placeholder='Email' name='email' required />
            <textarea className='bg-indigo-50 p-2' name='message' rows='10' placeholder='Message' required></textarea>
            <button className='text-gray-800 border-2 hover:bg-slate-200 hover:border-slate-200 px-4 py-3 my-8 mx-auto flex items-center'>Send Message</button>
        </form>
    </div>
  )
}

export default Contact