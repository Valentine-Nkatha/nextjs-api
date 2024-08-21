"use client";
import { ChangeEvent, useState } from "react";
import userLogin from "@/app/utilis/userLogin";
import { useRouter } from "next/navigation";
//when exporting default export yu don't have to use the curly braces

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  console.log({ username });

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await userLogin({ username, password });
      console.log(response);
      setLoading(false);
      router.push("/likes");
    } catch (error) {
      setError((error as Error).message);
      setLoading(false);
    }
  };

  return (
    <form className="w-6/12 border p-10" onSubmit={handleLogin}>
      <h2>LOGIN</h2>
      <input
        placeholder="Enter Username"
        type="text"
        required
        className="border border-gray-500 rounded-md w-full py-4 px-2 mt-2"
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setUsername(event.target.value)
        }
      />
      <br />
      <input
        placeholder="Enter password"
        type="password"
        required
        className="border border-gray-500 rounded-md w-full py-4 px-2 mt-2 "
        onChange={(event: ChangeEvent<HTMLInputElement>) =>
          setPassword(event.target.value)
        }
      />
      <br />
      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-3 rounded-md mt-4"
      >
        {loading ? "loading..." : "Submit"}
      </button>
      {error && <small className="text-red-500">{error}</small>}
    </form>
  );
};
export default Login;
