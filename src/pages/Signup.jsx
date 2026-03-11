import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleSignup = () => {
    //checking all filed are not empty
    if (!name || !password || !email) {
      alert("please fill all fields");
    }

    //making new user object
    const NewUser = {
      id: Date.now(),
      name: name,
      email: email,
      password: password,
    };

    //localstorage se purane user find karna
    const users = JSON.parse(localStorage.getItem("users")) || [];

    //check user already exist or not
    const UserExists = users.find((user) => user.email === email);

    if (UserExists) {
      alert("User Already exist");
      navigate("/login");
      return;
    }

    users.push(NewUser);

    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created sucessfully");
    navigate("/login");
  };

  return (
    <div className=" w-full h-screen relative">
      <div className="w-full max-w-sm md:max-w-md lg:w-[30%] bg-blue-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform flex items-center justify-center flex-col rounded-xl px-6 md:px-10 py-8 md:py-10">
        <h1 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 text-slate-900">
          SignUp Page
        </h1>

        {/* ONLY CHANGE START */}
        <form autoComplete="off" className="w-full">

        <div className="flex items-start flex-col w-full justify-center gap-1">
          <label className="text-lg md:text-xl">Name</label>
          <input
            className="bg-white rounded w-full outline-0 py-2 md:py-1 mb-4"
            type="text"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="flex items-start flex-col justify-center gap-1 w-full">
          <label className="text-lg md:text-xl">Email</label>
          <input
            className="bg-white rounded w-full outline-0 py-2 md:py-1 mb-4"
            type="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex items-start flex-col justify-center gap-1 w-full">
          <label className="text-lg md:text-xl">Password</label>
          <input
            className="bg-white rounded w-full outline-0 py-2 md:py-1 mb-6"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="bg-green-500 w-full hover:bg-green-600 text-white font-semibold py-2 rounded text-md mb-4"
          onClick={handleSignup}
        >
          Create Account
        </button>

        </form>
        {/* ONLY CHANGE END */}

        <p>
          Already Have Account ? <Link to="/Login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;