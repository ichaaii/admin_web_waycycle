import React, { useState } from "react";
import { Button, Card, List, ListItem } from "@material-tailwind/react";
import logo1 from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";

export const Sidebar = () => {
  const [showConfirmDialog, setShowConfirmDialog] = useState(false);

  const handleLogout = () => {
    setShowConfirmDialog(true);
  };

  const handleConfirmLogout = () => {
    window.location.href = "/";
  };

  const handleCancelLogout = () => {
    setShowConfirmDialog(false);
  };

  return (
    <Card className="min-h-screen w-full max-w-[25rem] ml-0 p-4 bg-hijau shadow-xl shadow-blue-gray-900/5 font-custom flex flex-col">
      <div className="mb-2 flex items-center gap-4 p-4 ">
        <img
          alt="logo"
          className="h-14 w-14 bg-white p-3 rounded-full"
          src={logo1}
        />
        <div className="flex flex-col text-putih">
          <h2 className="text-xl font-semibold">Icha</h2>
          <h2 className="text-xl">Admin</h2>
        </div>
      </div>

      <List className="text-putih text-xl font-custom flex-grow">
        <NavLink
          to="/input"
          className={({ isActive }) =>
            isActive ? "bg-putih rounded-lg text-black" : ""
          }
        >
          <ListItem as="div">Input Daur Ulang</ListItem>
        </NavLink>
        <NavLink
          to="/angkut"
          className={({ isActive }) =>
            isActive ? "bg-putih rounded-lg text-black" : ""
          }
        >
          <ListItem as="div">Angkut</ListItem>
        </NavLink>
        <NavLink
          to="/riwayat"
          className={({ isActive }) =>
            isActive ? "bg-putih rounded-lg text-black" : ""
          }
        >
          <ListItem as="div">Riwayat transaksi</ListItem>
        </NavLink>
        <NavLink
          to="/rekap"
          className={({ isActive }) =>
            isActive ? "bg-putih rounded-lg text-black" : ""
          }
        >
          <ListItem as="div">Rekapitulasi</ListItem>
        </NavLink>
      </List>
      <a href="#" onClick={handleLogout}>
        <Button variant="text" className="flex items-center gap-5 text-xl text-putih font-normal font-custom">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
            />
          </svg>
          Keluar Akun{" "}
        </Button>
      </a>

      {showConfirmDialog && (
        <div className="fixed top-0 left-0 w-full h-full z-50 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white px-16 py-16 rounded-lg shadow-xl">
            <h2 className="text-lg font-semibold text-center">Apakah Anda yakin ingin keluar?</h2>
            <div className="flex gap-4 mt-12">
              <Button className="px-16 rounded-full justify-center font-custom bg-hijau" onClick={handleConfirmLogout}>
                Iya
              </Button>
              <Button className="px-16 rounded-full justify-center font-custom bg-merah" onClick={handleCancelLogout}>
                Batal
              </Button>
            </div>
          </div>
        </div>
      )}
    </Card>
    );
  };
