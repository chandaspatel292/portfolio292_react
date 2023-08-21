//import { useState } from 'react';
//import SpaceImage from '/Space.png';
import About from "./components/About";
import Contact from "./components/Contact";
import Edu_Cer from "./components/Edu_Cer";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills"


export default function App() {
  return (
    <div className='h-screen w-full bg-gradient-to-r from-orange-800 to-red-950'>
      <div className='grid grid-cols-2 h-screen w-full'>

        {/* Left side of the screen */}
          <div className='bg-red-900/50 flex justify-end items-center pr-5'>
            <div className='flex flex-col justify-end items-end'>
              <div>
                <p className='text-3xl text-white '>ABOUT</p>
              </div>
              <div>
                <p className='text-3xl text-white'>EXPERIENCE</p>
              </div>
              <div>
                <p className='text-3xl text-white'>SKILLS</p>
              </div>
              <div>
                <p className='text-3xl text-white'>EDUCATION AND CERTIFICTION</p>
              </div>
              <div>
                <p className='text-3xl text-white'>PROJECTS</p>
              </div>
              <div>
                <p className='text-3xl text-white'>CONTACT</p>
              </div>
            </div>
          </div>

        {/* Right side of the screen */}
          <div className='bg-blue-900/50 flex justify-start items-center pl-5'>
            <div className='flex flex-col-reverse'>
              <div>
                <p className='text-xl'><About /></p>
              </div>
              <div>
                <p className='text-xl'><Experience /></p>
              </div>
              <div>
                <p className='text-xl'><Skills /></p>
              </div>
              <div>
                <p className='text-xl'><Edu_Cer /></p>
              </div>
              <div>
                <p className='text-xl'><Projects /></p>
              </div>
              <div>
                <p className='text-xl'><Contact /></p>
              </div>
            </div>
            </div>

      </div>
    </div>

  );
}

