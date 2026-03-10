import React from 'react'

const ContactPage = () => {
  return (
    <div className="flex flex-col bg-[url('/diampeniko.png')] bg-cover bg-fixed bg-center">
      <div className="mx-auto bg-white w-full max-w-2xl p-5">
        <div>
          <h1 className="text-xl font-bold font-mono text-center text-black">
            Fifandraisana
          </h1>
          <form
            action=""
            className="flex flex-col bg-gray-300 w-full p-5 gap-4 rounded-lg"
          >
            <div className="bg-[url('/bg.avif')] bg-cover w-full p-2">
              <div className="flex flex-col py-10 justify-center w-full bg-black/50 h-full font-mono gap-2 text-gray-200">
                <div className="ml-2">
                  <p>Téléphone</p>
                  <div className="flex ml-2 gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>

                    <p className="text-sm">+261 38 33 427 54</p>
                  </div>
                </div>
                <div className="ml-2">
                  <p>Email</p>
                  <div className='flex gap-2 ml-2'>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>
                  <p className="text-sm">diampeniko@gmail.com</p>
                  </div>
                </div>
                <div className="ml-2">
                  <p>WhatsApp</p>
                  <div className='flex gap-2 ml-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 448 512"
                    strokeWidth="0 0 24 24"
                    stroke='currentColor'
                    className='size-4 invert'
                    >
                    <path 
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"/></svg>
                  <p className="text-sm">+261 383342754</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-black w-full font-mono">
              <div className="flex flex-col">
                <label htmlFor="">Anarana</label>
                <input
                  type="text"
                  className="w-full border border-yellow-950 bg-white rounded-lg p-2"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Mailaka</label>
                <input
                  type="text"
                  className="w-full border border-yellow-950 bg-white rounded-lg p-2"
                />
              </div>
              <div>
                <label htmlFor="">Hafatra</label>
                <textarea
                  name=""
                  id=""
                  rows={4}
                  className="w-full border border-yellow-950 bg-white rounded-lg p-2"
                ></textarea>
              </div>
              <div className="flex justify-center items-center">
                <button className="p-2 bg-green-500 rounded-lg w-1/2 cursor-pointer hover:bg-green-700">
                  Alefa
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage
