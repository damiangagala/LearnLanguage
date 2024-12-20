import { useContext, useRef, useState } from "react";
import { login } from "../util/api";
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setformData] = useState({ email: "", password: "" });
  const passwordRef = useRef("");
  const [error, setError] = useState("hidden");
  const { contextLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await login(formData);
    if (res === 204) {
      contextLogin();
      navigate("/admin");
    } else if (res.error === "Invalid credentials") {
      setError("");
      passwordRef.current.value = "";
    }
  }

  return (
    <div className="flex justify-center items-center h-screen ">
      <main className="text-center w-96 h-96 p-4 bg-muted-lavender rounded-xl">
        <h1 className="text-5xl m-8 text-soft-white font-bold">Zaloguj</h1>
        <form
          className="flex flex-col justify-between  p-2"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          method="POST"
        >
          <input
            className="rounded-md p-1 m-2"
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setformData({ ...formData, email: e.target.value });
            }}
          />
          <p className={`text-red-200 font-bold text-left px-3 ${error}`}>
            Nieprawidłowe dane logowania
          </p>
          <input
            className="rounded-md p-1 m-2"
            type="password"
            placeholder="Hasło"
            ref={passwordRef}
            onChange={(e) => {
              setformData({ ...formData, password: e.target.value });
            }}
          />

          <button
            className="border-2 border-black rounded-md m-2 mt-6 text-xl font-bold p-2 bg-soft-white"
            type="submit"
          >
            Zaloguj
          </button>
        </form>
      </main>
    </div>
  );
}

export default Login;
