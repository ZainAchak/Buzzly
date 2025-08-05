import { Laptop, Star } from 'lucide-react'
import { assets } from '../assets/assets'
import techused from "../assets/techused.png"
import { SignedIn, SignedOut, SignIn, SignInButton, UserButton } from '@clerk/clerk-react';

export default function Login() {
  return (
    <div className='min-h-screen flex flex-col md:flex-row'>
      <img src={assets.bgImage} alt='' 
           className='absolute top-0 left-0 -z-1 w-full h-full object-cover'/>

        {/* Left side : Branding */}
      <div className='flex-1 flex flex-col items-start justify-between p-6 md:p-10 lg:pl-40'>
          {/* <img src={assets.logo} alt='' className='h-12 object-contain' /> */}
          <h1 className='text-3xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-300 bg-clip-text text-transparent animate-pulse'># Buzzly</h1>
          <div>
            <div className='flex items-center gap-3 mb-4 max-md:mt-10'>
              <img src={assets.group_users} alt='' className='h-8 md:h-10' />
              <div>
                <div className='flex'>
                  {Array(5).fill(0).map((_, i) => (
                      <Star key={i} className='size-4 md:size-4.5 text-transparent fill-amber-500' />))}
                  </div>
                  <p>used by 10k+ developers</p>
                </div>
            </div>
            <h1 className='text-3xl md:text-6xl md:pb-2 font-bold bg-gradient-to-r 
                      from-indigo-950 to-indigo-600 bg-clip-text text-transparent'>
            Connect with your friends
          </h1>
          <p className='text-xl md:text-3xl text-indigo-900 max-w-72 md:max-w-md'>
            Connect with friends, share updates on Buzzly.</p>

          
          <div className='hidden md:block mt-30'>
             <h1 className="text-l font-medium text-gradient bg-gradient-to-r from-blue-950 via-purple-600 to-indigo-500 bg-clip-text text-transparent tracking-wide mb-1 drop-shadow-lg opacity-85">
              <Laptop className='text-blue-500 inline mb-1 w-6 ml-1'/> Tech Used</h1>
            <img src={techused} className=' w-[400px] '/>
          </div>

          </div>
          <span className='hidden md:h5 md:block'></span>
          
        </div>

        {/* Right side : Login Form */}
        <div className=' flex-1 flex flex-col items-center justify-center p-6 sm:p-10'>
          <SignIn/>
          {/* <span className='sm:hidden md:h10 '></span> */}
          <div>
            <img src={techused} className='sm:hidden w-[400px] mt-5 '/>
          </div>
        </div>
    </div>
  )
}
