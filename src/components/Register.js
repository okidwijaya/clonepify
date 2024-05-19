import React from 'react'

function Register() {
  return (
    <>
    <div className='grid grid-cols-1 gap-2 mt-16 mb-4 w-full max-w-[300px] mx-auto border-slate-400 border'>
        <div className='grid grid-cols-2 border-b-slate-400 border'>
            <h2 className='text-lg text-center py-2 px-4 border-r-slate-400 border'>Login</h2>
            <h2 className='text-lg text-center py-2 px-4'>Register</h2>
        </div>
        <form action='' method='POST' onSubmit="" className='grid grid-cols-1 w-full gap-2 p-4'>
            <label>Name</label>
            <input className='py-2 px-4 border-slate-950 border'
                name='name' id='name' value="" type="text" placeholder="Name" minLength="1" required />
            <label>User Name</label>
            <input className='py-2 px-4 border-slate-950 border'
                name='username' id='username' value="" type="text" placeholder="Username" minLength="3" required />
            <label>Email</label>
            <input className='py-2 px-4 border-slate-950 border'
                name='email' id='email' value="" type="email" placeholder="Email" minLength="3" required />
            <label>Password</label>
            <input className='py-2 px-4 border-slate-950 border'
                name='password' id='password' value="" type="password" placeholder="Password" minLength="4" required />
            <button className='mt-4 text-slate-50 bg-black w-full p-2 uppercase' type="submit">Login</button>
        </form>
    </div>
    </>
  )
}

export default Register;