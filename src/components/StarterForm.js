import React, { useState } from "react";
import Link from 'next/link';
import { usePathname, useRouter } from "next/navigation";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants";
import api from "@/api";
import { redirect } from "next/navigation";

export default function StarterForm({ route, method }) {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const pathname = usePathname();
  const router = useRouter();

  const formName = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(process.env.NEXT_PUBLIC_API_URL)
    try {
      const res = await api.post(route, { username, password });
      console.log('route', route);
      if(method === "login"){
        localStorage.setItem(ACCESS_TOKEN, res.data.access);
        localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
        router.push('/pages/notes');
        // redirect('/pages/user/account');
      }else{
        console.log('now login')
        router.push('/pages/user/login');
      }
    } catch (error) {
      console.log(error, 'error');
    } finally {
      console.log(route, Response);
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 gap-2 mt-16 mb-4 w-full max-w-[300px] mx-auto border-slate-950 border">
        <div className="grid grid-cols-2 border-b-slate-950 border">
          <Link
            href={
              formName !== "register"
                ? "/pages/user/login"
                : "/pages/user/register"
            }
            className={`${
              pathname === "/pages/user/login"
                ? "bg-black text-white "
                : "bg-white "
            }text-lg text-center py-2 px-4 border-r-slate-400 border`}
          >
            Login
          </Link>
          <Link
            href={
              formName === "register"
                ? "/pages/user/login"
                : "/pages/user/register"
            }
            className={`${
              pathname === "/pages/user/register"
                ? "bg-black text-white "
                : "bg-white "
            }text-lg text-center py-2 px-4 border-r-slate-400 border`}
          >
            Register
          </Link>
        </div>
        <form
          action=""
          method="POST"
          onSubmit={handleSubmit}
          className="grid grid-cols-1 w-full gap-2 p-4"
        >
          {method === "register" ? (
            <>
              <label>Name</label>
              <input
                className="py-2 px-4 border-slate-950 border"
                name="name"
                id="name"
                value={name}
                type="text"
                onChange={(e) => setName(e.target.value)}
                placeholder="name"
                minLength="3"
              />
            </>
          ) : (
            <></>
          )}

          <label>Username</label>
          <input
            className="py-2 px-4 border-slate-950 border"
            name="Username"
            id="username"
            value={username}
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            minLength="3"
            required
          />

          {method === "register" ? (
            <>
              <label>Email</label>
              <input
                className="py-2 px-4 border-slate-950 border"
                name="Email"
                id="email"
                value={email}
                type="Email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                minLength="3"
              />
            </>
          ) : (
            <></>
          )}

          <label>Password</label>
          <input
            className="py-2 px-4 border-slate-950 border"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            minLength="4"
            required
          />
          <button
            className="mt-4 text-slate-50 bg-black w-full p-2 uppercase"
            type="submit"
          >
            {formName}
          </button>
        </form>
      </div>
    </>
  );
}
