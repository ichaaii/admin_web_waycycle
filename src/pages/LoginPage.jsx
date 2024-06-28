import React, { useState } from "react";
import { Card, Input, Button, Typography } from "@material-tailwind/react";
import logo1 from "../assets/img/logo1.png";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../components/Firebase";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  // const handleLogin = (e) => {
  //   e.preventDefault();

  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;
  //       console.log(user);
  //       navigate("/input");
  //     })
  //     .catch((error) => {
  //       setError(true);
  //     });
  // };

  return (
    <div className="min-h-screen bg-custom flex items-center justify-center">
      <Card
        className="p-10 pb-24 bg-white bg-opacity-70 backdrop-blur-xl"
        shadow={true}
      >
        <div className="flex justify-center">
          <img className="w-full max-w-xs" src={logo1} alt="logo" />
        </div>
        <form
          className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
          // onSubmit={handleLogin}
        >
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 font-custom"
            >
              Email
            </Typography>
            <Input
              size="lg"
              placeholder="admin1"
              className=" !border-blue-gray-900 focus:!border-t-gray-900"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 font-custom"
            >
              Kata sandi
            </Typography>
            <Input
              type="password"
              size="lg"
              placeholder="********"
              className=" !border-blue-gray-900 focus:!border-t-gray-900"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="flex justify-center mt-8">
            <Button
              className="mt-2 px-16 rounded-full justify-center font-custom bg-hijau"
              type="submit"
            >
              Masuk
            </Button>
          </div>
          <div className="text-center mt-4 text-red-600">
            {error && <span>Salah password atau Email</span>}
          </div>
        </form>
      </Card>
    </div>
  );
};
