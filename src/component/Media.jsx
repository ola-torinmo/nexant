
import React, { useState } from 'react';

export default function Media({ media, video }) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <div className="md:mt-[-250px] mt-[-550px] px-12 md:pb-[10%] pb-[15%]">

        <p className="font-medium m-auto 2xl:ml-[10%] xl:ml-[12%] md:ml-[100px] ml-[30px] md:mt-[0px] mt-[90px] md:text-xl text-base">
          Media
        </p>

        {video && (
          <div className="flex flex-col items-center mt-5 mb-5">

            <button
              type="button"
              onClick={() => setIsVideoOpen(true)}
              className="relative w-[180px] sm:w-[220px] h-[240px] sm:h-[300px] overflow-hidden rounded-lg shadow-md bg-black group"
              aria-label="Play Blue Line Phase Two project video"
            >
              <video
                src={video}
                muted
                playsInline
                preload="metadata"
                controlsList="nodownload"
                disablePictureInPicture
                className="w-full h-full object-cover"
              />

              <span className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition">
                <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/90 text-black text-2xl shadow-lg">
                  ▶
                </span>
              </span>
            </button>

            <p className="text-sm font-medium text-gray-700 mt-3 text-center">
              Blue Line Phase Two — Watch Project Video
            </p>

          </div>
        )}

        <img
          src={media}
          className="w-screen 2xl:mt-[10px] xl:mt-[10px] md:mt-[100px] mt-[0px]"
          alt=""
        />

      </div>

      {video && isVideoOpen && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Blue Line Phase Two project video"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative flex items-center justify-center w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-2 right-2 z-10 bg-white text-black rounded-full w-10 h-10 text-2xl font-bold shadow-lg"
              aria-label="Close video"
            >
              ×
            </button>

            <video
              src={video}
              controls
              autoPlay
              playsInline
              controlsList="nodownload noremoteplayback"
              disablePictureInPicture
              disableRemotePlayback
              onContextMenu={(e) => e.preventDefault()}
              className="max-w-full max-h-[85vh] w-auto h-auto rounded-lg bg-black"
            >
              Your browser does not support video playback.
            </video>
          </div>
        </div>
      )}
    </>
  );
}
