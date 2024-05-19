import React from 'react';
import Image from 'next/image';
import banner from '../assets/images/kevin-laminto-unsplash.jpg';

function ImageBanner() {
  return (
    <div className="w-full">
        <Image className="w-full h-screen object-cover"
            src={banner}
            alt="Picture of banner"
            width={2560}
            height={900}
        />
    </div>
  )
}

export default ImageBanner