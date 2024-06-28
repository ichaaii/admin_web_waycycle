import React from 'react'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import logo1 from "../assets/img/logo1.png";

export const Register = () => {
    return (
      <div className="min-h-screen bg-custom flex items-center justify-center">
      <Card
        className="p-10 pb-24 bg-white bg-opacity-70 backdrop-blur-xl"
        shadow={true}
      >
        <div className="flex justify-center">
          <img className="w-full max-w-xs" src={logo1} alt="logo" />
        </div>
        <Typography
          variant="h5"
          color="blue-gray"
          className="text-center mt-3 font-custom"
        >
          Daftar Admin
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-1 flex flex-col gap-6">
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 font-custom"
            >
              Masukan Username
            </Typography>
            <Input
              size="lg"
              placeholder="admin1"
              className=" !border-blue-gray-900 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
            <Typography
              variant="h6"
              color="blue-gray"
              className="-mb-3 font-custom"
            >
              Email
            </Typography>
            <Input
              size="lg"
              placeholder="name@mail.com"
              className=" !border-blue-gray-900 focus:!border-t-gray-900"
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
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />
          </div>
          <div className="flex justify-center">
            <a href="/input">
              <Button className="mt-6 px-16 rounded-full justify-center font-custom bg-hijau">
                Daftar
              </Button>
            </a>
          </div>
          <Typography color="gray" className="mt-8 text-center font-normal">
              Sudah Punya Akun?{" "}
              <a href="/" className="font-medium text-gray-900">
                Login
              </a>
            </Typography>
        </form>
          {/* <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
            <div className="mb-1 flex flex-col gap-6">
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Name
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
              <Typography variant="h6" color="blue-gray" className="-mb-3">
                Password
              </Typography>
              <Input
                type="password"
                size="lg"
                placeholder="********"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
              />
            </div>
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="/"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button className="mt-6" fullWidth>
              sign up
            </Button>
            <Typography color="gray" className="mt-4 text-center font-normal">
              Already have an account?{" "}
              <a href="/login" className="font-medium text-gray-900">
                Sign In
              </a>
            </Typography>
          </form> */}
        </Card>
        </div>
      );
}
