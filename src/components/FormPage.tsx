"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface Form {
  email: string;
  password: string;
  terms: boolean;
}

export default function FormPage() {
  const [auth, setAuth] = useState<string>();
  const [data, setData] = useState<Form>({
    email: "",
    password: "",
    terms: false,
  });
  const options = {
    method: "GET",
    url: "https://api.themoviedb.org/3/authentication/guest_session/new",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    },
  };
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    axios
      .request(options)
      .then(function (response) {
        const session_id = response.data.guest_session_id;
        if (session_id !== undefined) {
          setAuth(session_id);
          /*  router.push("/") */
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };
  useEffect(() => {
    if (auth !== undefined) {
      localStorage.setItem("auth", auth);
    }
  }, [auth]);
  const [disabled, setDisabled] = useState<boolean>(true);
  useEffect(() => {
    const isEmailValid = data.email.includes("@") && data.email.length > 8;
    const isPasswordValid = data.password.length >= 8;
    const isTermsAccepted = data.terms;
    ``;
    const isDisabled = !(isEmailValid && isPasswordValid && isTermsAccepted);
    setDisabled(isDisabled);
  }, [data.email, data.password, data.terms]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setData((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };
  return (
    <main className="flex flex-col text-white mx-6 lg:mx-28 mt-20">
      <div>
        <h2 className="font-poppinsBold text-2xl">Login</h2>
        <h2 className="text-base font-poppins">¡Bienvenido!</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col max-w-lg mt-12">
          <label className="mb-3 font-poppins" htmlFor="email">
            Correo electrónico de DaCodes
          </label>
          <input
            className="bg-[#5141EA] rounded-xl py-2 px-4"
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col max-w-lg mt-6">
          <label className="mb-3 font-poppins" htmlFor="pass">
            Contraseña
          </label>
          <input
            className="bg-[#5141EA] rounded-xl py-2 px-4"
            type="password"
            id="pass"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="flex justify-start items-center space-x-3 ml-4 max-w-lg mt-6">
          <input
            className="bg-[#D9D9D980] checked:before:bg-black rounded-xl"
            type="checkbox"
            id="terms"
            name="terms"
            onChange={handleChange}
          />
          <label className="font-poppins text-sm italic" htmlFor="terms">
            He leido y acepto los terminos y condiciones
          </label>
        </div>
        <div className="mt-6">
          <button
            disabled={disabled}
            className={`py-2 px-6 rounded-2xl font-poppinsBold duration-300 ${
              disabled
                ? "cursor-not-allowed bg-[#2924aa] text-[#413da0]"
                : "bg-gradient-to-r from-[#00ffd0] to-[#4e6ce4] cursor-pointer"
            }`}
            type="submit"
          >
            Crear cuenta
          </button>
        </div>
      </form>
    </main>
  );
}
