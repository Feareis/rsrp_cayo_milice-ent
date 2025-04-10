import { useState } from "react";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const expectedLogin = import.meta.env.VITE_LOGIN;
  const expectedPass = import.meta.env.VITE_PASS;

  const handleLogin = (e: React.FormEvent) => {
    console.log("login page loaded");
    e.preventDefault();

    if (username === expectedLogin && password === expectedPass) {
      sessionStorage.setItem("isLoggedIn", "true");
      setSuccess(true);
      setError("");
      window.location.href = "/";
    } else {
      setError("Identifiants incorrects");
      setSuccess(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#1e1e1e] text-white">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-6 bg-[#263238] p-8 rounded-2xl shadow-lg w-full max-w-md border border-gray-600"
      >
        <h2 className="text-2xl font-bold text-center text-gray-200">Connexion</h2>

        <input
          type="text"
          placeholder="Login"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="p-2 rounded bg-[#37474f] text-white placeholder-gray-400"
          required
        />

        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 rounded bg-[#37474f] text-white placeholder-gray-400"
          required
        />

        {error && <p className="text-red-400 text-center">{error}</p>}
        {success && <p className="text-green-400 text-center">Connexion réussie ✅</p>}

        <button
          type="submit"
          className="bg-emerald-500 hover:bg-emerald-600 text-black font-bold py-2 rounded transition"
        >
          Se connecter
        </button>
      </form>
    </div>
  );
};

export default Login;
