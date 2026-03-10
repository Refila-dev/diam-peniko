'use client';
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("Login successful:", data);

      router.push("/dashboard"); // Redirect to home page or dashboard
      // Redirect or update UI as needed
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="bg-[url('/diampeniko.png')] bg-cover bg-fixed bg-center font-mono min-h-screen">
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-[url(/bg.avif)] mx-auto mt-20 rounded-lg p-5 lg:p-10 w-full max-w-lg">
          <h1 className="text-2xl text-black font-bold text-center">
            Fidirana
          </h1>
          <form
            action=""
            className="flex flex-col bg-black/50 dark:bg-black/50 rounded-lg p-10 gap-5"
          >
            <div className="text-white">
              <label htmlFor="email">Mailaka</label>
              <input
                className="block w-full px-3 py-2.5 bg-neutral-secondary-medium  rounded-lg border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body mb-4"
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
                className="block w-full px-3 py-2.5 bg-neutral-secondary-medium  rounded-lg border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand shadow-xs placeholder:text-body mb-4"
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-gray-200 text-sm mt-5 text-center font-sans">
              <p>
                Adino ve ny tenimiafina?{" "}
                <a
                  href="/fidirana/misoratra"
                  className="underline text-blue-500"
                >
                  adino
                </a>
              </p>
            </div>
            <div>
              <button onClick={handleLogin} className="bg-blue-500 text-white p-2 rounded-lg h-14 w-full hover:bg-blue-900 cursor-pointer mt-2">
                Hiditra
              </button>
            </div>
            <div className="text-gray-200 text-sm mt-5 text-center font-sans">
              <p>
                Tsy manana kaonty ve?{" "}
                <a
                  href="/fidirana/misoratra"
                  className="underline text-blue-500"
                >
                  Midira eto
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage
