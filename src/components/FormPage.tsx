import React, { useEffect, useRef, useState } from "react";
import axios from "axios";

interface Form {
  email: string;
  password: string;
  terms: boolean;
}


export default function FormPage() {

  const url = useRef<HTMLAnchorElement>(null);
  const [auth, setAuth] = useState<string>();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [info, setInfo] = useState<Form>({
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
        }
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;
    setInfo((prevData) => ({
      ...prevData,
      [name]: newValue,
    }));
  };

  useEffect(() => {
    if (auth !== undefined) {
      localStorage.setItem("auth", auth); 
      if (url.current) {
        url.current.click();
      }
    }
    
  }, [auth]);

  
  useEffect(() => {

    const isEmailValid = info.email.includes("@") && info.email.length > 8;
    const isPasswordValid = info.password.length >= 8;
    const isTermsAccepted = info.terms;
    
    const isDisabled = !(isEmailValid && isPasswordValid && isTermsAccepted);
    setDisabled(isDisabled);

    }, [info.email, 
        info.password, 
        info.terms]
  );


  return (
    <main className="flex flex-col text-white mx-24 mt-16">
      <a ref={url} href="/"></a>
    <div>
      <h2 className="text-4xl">Login</h2>
      <h3 className="text-lg">¡Bienvenido!</h3>
    </div>
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col max-w-md mt-12">
        <label className="mb-3 text-sm" htmlFor="email">
          Correo electrónico de DaCodes
        </label>
        <input
          className="bg-[#5141EA] rounded-xl py-1 px-2"
          type="text"
          id="email"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className="flex flex-col max-w-md mt-6">
        <label className="mb-3 text-sm" htmlFor="pass">
          Contraseña
        </label>
        <input
          className="bg-[#5141EA] rounded-xl py-1 px-2"
          type="password"
          id="pass"
          name="password"
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center gap-1 mt-6">
        <input
          type="checkbox"
          id="terms"
          name="terms"
          onChange={handleChange}
        />
        <label className="text-xs" htmlFor="terms">
          He leido y acepto los terminos y condiciones
        </label>
      </div>
      <div className="mt-2">
        <button
          disabled={disabled}
          className={`py-2 px-6 rounded-2xl font-poppinsBold duration-300 ${
            disabled
              ? 'cursor-not-allowed bg-gray-400 text-gray-600'
              : 'bg-gradient-to-r from-[#00ffd0] to-[#4e6ce4] cursor-pointer'
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
