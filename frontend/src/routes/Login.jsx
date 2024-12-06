import { useContext, useState } from "react";
import { login } from "../util/api";
import { AuthContext } from "../contexts/AuthProvider";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setformData] = useState({ email: "", password: "" });
  const { contextLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    await login(formData);
    contextLogin();
    navigate("/admin");
  }

  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="bg-gray-300 text-center w-96 h-96 p-4">
        <h1 className="text-5xl m-8">Login</h1>
        <form
          className="flex flex-col justify-between bg-green-200 p-2"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
          method="POST"
        >
          <input
            className="rounded-md p-1 m-2"
            type="text"
            placeholder="email"
            onChange={(e) => {
              setformData({ ...formData, email: e.target.value });
            }}
          />
          <input
            className="rounded-md p-1 m-2"
            type="password"
            placeholder="password"
            onChange={(e) => {
              setformData({ ...formData, password: e.target.value });
            }}
          />

          <button
            className="border-2 border-black rounded-md m-2 mt-6 text-xl font-bold p-2"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
