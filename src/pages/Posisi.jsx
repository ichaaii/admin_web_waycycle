import React from "react";
import { Sidebar } from "../components/Sidebar";
import satria from "../assets/img/Satriaa.png";
import { MapProses } from "../components/MapProses";
import { useNavigate } from "react-router-dom";

export const Posisi = () => {
    const navigate = useNavigate();
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex w-screen my-12 ml-14 mr-14">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-row items-center gap-4 justify-between">
            <div className="flex flex-row items-center gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 cursor-pointer"
                onClick={() => navigate(-1)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              <h1 className="text-3xl font-bold">Posisi Satria</h1>
            </div>
            <button className="bg-hijau rounded-full px-12 py-2 text-white">
              Selesai
            </button>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-4">
              <h3 className="text-lg">#2453800</h3>
              <div className="flex flex-row gap-10 text-xl">
                <img alt="satria" className="h-14 w-14" src={satria} />
                <div className="w-full flex flex-col gap-4">
                  <div className="flex flex-row justify-between">
                    <h3>Jl. Pesona No. 20</h3>
                    <h3>14.33 WIB</h3>
                  </div>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-row gap-11 w-full">
                      <h3>Rp21.000</h3>
                      <h3>7.0 KM</h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <div className="flex flex-col gap-4">
                  <h3 className="text-xl">Status: Satria menuju Lokasi</h3>
                  <h3 className="text-xl">Estimasi Selesai: 14.20 WIB</h3>
                </div>
                <div className="flex flex-col justify-between">
                  <h3 className="text-xl text-right">Satria: Heru</h3>
                </div>
              </div>
            </div>
          </div>
          <MapProses />
        </div>
      </div>
    </div>
  );
};
