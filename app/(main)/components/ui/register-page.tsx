"use client";
import React, { useState } from "react";
import { ToastContainer , toast } from "react-toastify";

const RegisterPage = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [lieu, setLieu] = useState("");
  const [profession, setProfession] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading,setLoading] = useState(false);
  const [isRealPassword, setIsRealPassword] = useState(true);
  const [acceptTerm, setAcceptTerm] = useState(true);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const userData = {
      name,
      username: userName,
      birth_date: birthDate,
      place_of_birth: lieu,
      profession,
      email,
      password,
    };

    try {
      if(confirmPassword == password){
      const response = await fetch("/api/users", {

        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
      

      const data = await response.json();
      if(response.ok){
        toast.success("Tafiditra ho isan'ny mpikambana ianao!");
        console.log("Utilisateur créé:", data);
        // Réinitialiser les champs du formulaire
        setLoading(false)
        setBirthDate("");
        setEmail("");
        setLieu("");
        setName("");
        setPassword("");
        setProfession("");
        setUserName("");
        setConfirmPassword("");
      }

      if (!response.ok) {
        setLoading(false);
        console.error("Erreur:", data);
        return;
      }
    }else{
      setIsRealPassword(false);
      setLoading(false);
    }

    } catch (error) {
      console.error("Erreur réseau:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[url('/diampeniko.png')] bg-cover bg-fixed bg-center font-mono overflow-y-hidden">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-[url(/bg.avif)] mx-auto mt-20 rounded-lg p-5 lg:p-10 w-full max-w-lg">
          <h1 className="text-2xl text-black font-bold text-center">
            Fisoratana anarana
          </h1>
          <form action="" onSubmit={handleSubmit}>
            {step === 1 && (
              <div className="flex flex-col bg-black/50 dark:bg-black/50 rounded-lg p-10 ">
                <div className="text-white">
                  <label htmlFor="name">Anarana</label>
                  <input
                    className="block w-full px-3 py-2.5 bg-neutral-secondary-medium rounded-lg border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body mb-4"
                    placeholder="Anarana"
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="text-white">
                  <label htmlFor="username">Fanampiny</label>
                  <input
                    className="block w-full px-3 py-2.5 bg-neutral-secondary-medium  rounded-lg border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body mb-4"
                    placeholder="Fanampiny"
                    type="text"
                    id="username"
                    name="username"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                  />
                </div>
                <div className="text-white">
                  <label htmlFor="birthDate">Daty nahaterahana</label>
                  <input
                    className="block w-full px-3 py-2.5 bg-neutral-secondary-medium rounded-lg border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body mb-4"
                    type="date"
                    id="birthDate"
                    name="birthDate"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                  />
                </div>
                <div className="text-white">
                  <label htmlFor="lieu">Tanàna Nahaterahana</label>
                  <input
                    className="block w-full px-3 py-2.5 bg-neutral-secondary-medium rounded-lg border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body mb-4"
                    type="text"
                    id="lieu"
                    name="lieu"
                    value={lieu}
                    onChange={(e) => setLieu(e.target.value)}
                  />
                </div>
                <div className="text-white">
                  <label htmlFor="password">Asa atao</label>
                  <select
                    id="profession"
                    name="profession"
                    value={profession}
                    onChange={(e) => setProfession(e.target.value)}
                    className="block w-full px-3 py-2.5 bg-neutral-secondary-medium rounded-lg border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body mb-4"
                  >
                    <option className="text-black" defaultValue="Tsy miasa">
                      Lazao izay asanao
                    </option>
                    <option className="text-gray-500" value="Mpamboly">
                      Mpamboly
                    </option>
                    <option className="text-gray-500" value="Mpianatra">
                      Mpianatra
                    </option>
                    <option className="text-gray-500" value="Mpampianatra">
                      Mpampianatra
                    </option>
                    <option className="text-gray-500" value="hafa">
                      Ankoatr'ireo
                    </option>
                  </select>
                </div>
                <div>
                  <button
                    onClick={() => {
                      setStep(2);
                    }}
                    className="bg-blue-500 text-white p-2 rounded-lg h-14 w-full hover:bg-blue-900 cursor-pointer mt-4 flex justify-center items-center gap-2"
                  >
                    Manaraka
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                      />
                    </svg>
                  </button>
                </div>
                <div className="text-gray-200 text-sm mt-5 text-center font-sans">
                  <p>
                    Efa manana kaonty ve?{" "}
                    <a
                      href="/fidirana/miditra"
                      className="underline text-blue-500"
                    >
                      Midira eto
                    </a>
                  </p>
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="flex flex-col bg-black/50 dark:bg-black/50 rounded-lg p-10 ">
                <div className="text-white">
                  <label htmlFor="email">Mailaka</label>
                  <input
                    className="block w-full px-3 py-2.5 bg-neutral-secondary-medium rounded-lg border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body mb-4"
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="text-white">
                  <label htmlFor="password">Tenimiafina</label>
                  <input
                    className="block w-full px-3 py-2.5 bg-neutral-secondary-medium rounded-lg border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body mb-4"
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="text-white">
                  <label htmlFor="password">Hamafiso ny Tenimiafina</label>
                  <input
                    className={isRealPassword ? "block w-full px-3 py-2.5 bg-neutral-secondary-medium rounded-lg border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body mb-4":
                      "block w-full px-3 py-2.5 bg-neutral-secondary-medium rounded-lg border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body text-red-900 mb-4"}
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => {setConfirmPassword(e.target.value); setIsRealPassword(true)}}
                  
                    
                  />
                </div>
                <div className="text-gray-200 text-sm mt-5 font-sans">
                  <p>
                    Alohan'ny hisoratana anarana, vakio ireo fitsipika mifehy ny
                    mpikambana{" "}
                    <a href="" className="text-blue-500">
                      fitsipika fifampifehezana eto amin'ny tranokala
                    </a>
                  </p>
                  <input onClick={()=>{setAcceptTerm(!acceptTerm)}} type="checkbox" name="terms" id="terms" />
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setStep(1);
                    }}
                    className="bg-gray-400 hover:bg-gray-500 p-2 rounded-lg w-full cursor-pointer flex justify-center items-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                      />
                    </svg>
                    Hiverina
                  </button>
                  {acceptTerm ? (
<button
                    type={"submit"}
                    className="bg-gray-500 text-white p-2 rounded-lg h-14 w-full"
                    disabled
                  >
                    {isLoading ? (
<div
                        className="animate-spin inline-block size-6 border-3 border-current border-t-transparent rounded-[999px] text-primary"
                        role="status"
                        aria-label="loading"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                     "Alefa" 
                    )}
                  </button>
                  ):(
<button
                    type={"submit"}
                    className="bg-green-600 text-white p-2 rounded-lg h-14 w-full hover:bg-green-700 cursor-pointer"
                  >
                    {isLoading ? (
<div
                        className="animate-spin inline-block size-6 border-3 border-current border-t-transparent rounded-[999px] text-primary"
                        role="status"
                        aria-label="loading"
                      >
                        <span className="sr-only">Loading...</span>
                      </div>
                    ) : (
                     "Alefa" 
                    )}
                  </button>
 
                  )}
                  <ToastContainer className="absolute h-5 bottom-0 right-0 p-4" />
                </div>
                <div className="text-gray-200 text-sm mt-5 text-center font-sans">
                  <p>
                    Efa manana kaonty ve?{" "}
                    <a
                      href="/fidirana/miditra"
                      className="underline text-blue-500"
                    >
                      Midira eto
                    </a>
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
