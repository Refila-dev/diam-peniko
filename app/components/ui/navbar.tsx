'use client'

import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className="flex justify-center">
      <div className="inline-flex h-20 px-8 bg-black dark:bg-white gap-10 lg:gap-50 items-center justify-center rounded-lg fixed shadow-4xl mt-5">
        <div className="w-17 h-17 rounded-full flex justify-center items-center">
          <Image
            className="rounded-full bg-white border border-gray-300"
            src={"/diampeniko.png"}
            alt="Logo"
            width={80}
            height={80}
          />
        </div>
        <div className="flex gap-10 text-black  font-bold">
          <div className="flex items-center gap-2">
            <div className="text-white dark:text-black">
              <a href={"/"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-6 hover:size-7 transition-all duration-300 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </a>
            </div>
            <a
              href={"/"}
              className="text-white dark:text-black hidden lg:block"
            >
              Pejy Fandraisana
            </a>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-white dark:text-black">
              <a href="/tononkalo">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  color="black dark:white"
                  className="size-6 hover:size-7 transition-all duration-300 cursor-pointer"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
                  />
                </svg>
              </a>
            </div>
            <a
              href="/tononkalo"
              className="text-white dark:text-black hidden lg:block"
            >
              Tononkalo
            </a>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-white dark:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                color="black dark:white"
                className="size-6 hover:size-7 transition-all duration-300 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
                />
              </svg>
            </div>
            <a
              href="/product"
              className="text-white dark:text-black hidden lg:block"
            >
              Poety
            </a>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-white dark:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                color="black dark:white"
                className="size-6 hover:size-7 transition-all duration-300 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15M12 9l3 3m0 0-3 3m3-3H2.25"
                />
              </svg>
            </div>
            <a href="#" className="text-white dark:text-black hidden lg:block">
              Fidirana
            </a>
          </div>
          <div
            className="flex items-center gap-2"
            onClick={() =>
              alert(
                "Mifandraisa aminay amin'ny alalan'ny mailaka: contact@example.com",
              )
            }
          >
            <div className="text-white dark:text-black">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6 hover:size-7 transition-all duration-300 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
            </div>
            <a href="#" className="text-white dark:text-black hidden lg:block">
              Laharam-pifandraisana
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar  
