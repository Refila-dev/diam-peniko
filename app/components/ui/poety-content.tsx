'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { useState } from 'react'

const PoetyContent = () => {
  const [poets, setPoets] = useState([]);

  useEffect(() => {
    const fetchPoets = async () => {
      try {
        const response = await fetch('/api/users');
        const data = await response.json();
        console.log('Fetched poets:', data);
        setPoets(data);
      } catch (error) {
        console.error('Error fetching poets:', error);
      }
    };

    fetchPoets();
  }, []);

  return (
    <div className="w-full mx-auto min-h-screen flex flex-col gap-2">
      <div className="w-full mx-auto mt-10 min-h-screen max-w-4xl flex flex-col gap-5">
        <div className="flex flex-col justify-center items-center gap-5 bg-black dark:bg-olive-200 p-5 rounded-lg">
          <div className="rounded-full border border-gray-800">
            <Image
              src="/diampeniko.png"
              alt="Description of image"
              width={100}
              height={100}
            />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-200 dark:text-gray-800">
              Tsiory Ramakavelo
            </h1>
          </div>
          <div>
            <p className="text-gray-200 dark:text-gray-800 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              sequi enim iusto labore porro esse officiis praesentium
              necessitatibus dolores delectus vel maxime, obcaecati nisi, magnam
              quae animi autem ducimus ullam?
            </p>
          </div>
          <div className="flex justify-between items-center gap-5 mt-5">
            <div>
              <button className="bg-gray-800 text-gray-200 py-2 px-4 rounded-lg">
                Ireo asa sorany
              </button>
            </div>
            <div>
              <button className="bg-gray-800 text-gray-200 py-2 px-4 rounded-lg">
                Ny mombamomba azy
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 bg-black dark:bg-olive-200 p-5 rounded-lg">
          <div className="rounded-full border border-gray-800">
            <Image
              src="/voahary.jpeg"
              className='rounded-full'
              alt="Description of image"
              width={100}
              height={100}
            />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-200 dark:text-gray-800">
             Voahary Ratsimba
            </h1>
          </div>
          <div>
            <p className="text-gray-200 dark:text-gray-800 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              sequi enim iusto labore porro esse officiis praesentium
              necessitatibus dolores delectus vel maxime, obcaecati nisi, magnam
              quae animi autem ducimus ullam?
            </p>
          </div>
          <div className="flex justify-between items-center gap-5 mt-5">
            <div>
              <button className="bg-gray-800 text-gray-200 py-2 px-4 rounded-lg">
                Ireo asa sorany
              </button>
            </div>
            <div>
              <button className="bg-gray-800 text-gray-200 py-2 px-4 rounded-lg">
                Ny mombamomba azy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PoetyContent
