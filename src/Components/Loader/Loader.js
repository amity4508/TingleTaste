
import React from 'react';
import img2 from '../../assets/images/logo.png';

export const Loader = () => {
  return (
    
     <div className="fixed flex-col top-0 left-0 w-full h-full flex gap-2 items-center justify-center bgcont bg-opacity-9 z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900 ">
      </div>
      <div className='top-0 relative text-4xl text-gray-900'>
       Loading ...
       </div>
    
      <div className='px-3'>
      <img   src={img2} alt="Loading..." className=" h-[250px] max-sm:h-[250px]" />
      </div>

    </div>

  );
}

