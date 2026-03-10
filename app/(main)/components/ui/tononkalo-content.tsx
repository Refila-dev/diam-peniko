import React from 'react'
import Image from 'next/image'

const TononkaloContent = () => {
  return (
    <div className="w-full mx-auto mt-10 min-h-screen flex flex-col gap-2">
      <div className="flex flex-col gap-5 bg-black dark:bg-olive-200 max-w-3xl mx-auto p-5 rounded-lg">
        <div className="flex gap-5">
          <Image
            className="rounded-full bg-white border border-gray-300"
            src="/diampeniko.png"
            alt="Next.js logo"
            width={50}
            height={50}
            priority
          />
          <div className='flex flex-col gap-1'>
            <h1 className="text-lg font-semibold text-gray-200 dark:text-gray-800">
              Tsiory Ramakavelo
            </h1>
            <p className='text-sm text-gray-400 dark:text-gray-600'>Il y a 1h</p>
          </div>
        </div>
        <p className="text-gray-300 dark:text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quam
          consequuntur veniam sed voluptatem, architecto impedit eos iusto, id
          iure fugit explicabo totam corporis, vitae perferendis temporibus
          illum nostrum pariatur?
        </p>
        <div className="flex justify-center items-center">
          <Image
            className="rounded-lg bg-white border border-gray-300 w-[700px] h-[400px]"
            src="/voahary.jpeg"
            alt="Description of image"
            width={700}
            height={500}
          />
        </div>
        <div className="flex justify-end items-center gap-5 mt-5">
          <div className="text-white dark:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
          <div className="text-white dark:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 bg-black dark:bg-olive-200 max-w-3xl mx-auto p-5 rounded-lg">
        <div className="flex gap-5">
          <Image
            className="rounded-full bg-white border border-gray-300"
            src="/diampeniko.png"
            alt="Next.js logo"
            width={50}
            height={50}
            priority
          />
           <div className='flex flex-col gap-1'>
            <h1 className="text-lg font-semibold text-gray-200 dark:text-gray-800">
              Tsiory Ramakavelo
            </h1>
            <p className='text-sm text-gray-400 dark:text-gray-600'>Il y a 16h</p>
          </div>
        </div>
        <p className="text-gray-300 dark:text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum quam
          consequuntur veniam sed voluptatem, architecto impedit eos iusto, id
          iure fugit explicabo totam corporis, vitae perferendis temporibus
          illum nostrum pariatur?
        </p>
        <div className="flex justify-center items-center">
          <Image
            className="rounded-lg bg-white border border-gray-300 w-[700px] h-[400px]"
            src="/vakana.jpg"
            alt="Description of image"
            width={700}
            height={500}
          />
        </div>
        <div className="flex justify-end items-center gap-5 mt-5">
          <div className="text-white dark:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
              />
            </svg>
          </div>
          <div className="text-white dark:text-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TononkaloContent
