
import React from 'react';

export default function Media(props) {
  return (
    <div className='md:mt-[-250px] mt-[-550px] px-12 md:pb-[10%] pb-[15%]'>
      <p className='font-medium m-auto 2xl:ml-[10%] xl:ml-[12%] md:ml-[100px] ml-[30px] md:mt-[0px] mt-[90px] md:text-xl text-base'>
        Media
      </p>

      {props.video && (
        <div className="flex justify-center mt-8 mb-8">
          <video
            controls
            playsInline
            preload="metadata"
            aria-label="Blue Line Phase Two project video"
            className="w-full max-w-[360px] h-auto rounded-xl"
          >
            <source src={props.video} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      )}

      <img
        src={props.media}
        className='w-screen 2xl:mt-[10px] xl:mt-[10px] md:mt-[100px] mt-[0px]'
        alt=""
      />
    </div>
  );
}
