import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import satria from "../assets/img/Satriaa.png";

const orders = [
  {
    id: '2453800',
    address: 'Jl. Pesona No. 20',
    time: '14.33 WIB',
    price: '21.000',
    distance: '7.0 KM',
    status: 'Satria menuju Lokasi',
    estimation: '14.20 WIB',
    riderName: 'Heru',
  },
  {
    id: '245879',
    address: 'Jl. Medika Sari No. 76',
    time: '18.23 WIB',
    price: '18.000',
    distance: '6.0 KM',
    status: 'Satria menuju Lokasi',
    estimation: '14.20 WIB',
    riderName: 'Heru',
  },
  {
    id: '2454578',
    address: 'Jl. Permata Utama No. 7',
    time: '09.48 WIB',
    price: '50.000',
    distance: '8.5 KM',
    status: 'Satria menuju Lokasi',
    estimation: '14.20 WIB',
    riderName: 'Heru',
  },
];

export const Angkut = () => {
  const [currentView, setCurrentView] = useState("pesanan");

  const handleButtonClick = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex w-screen my-12 ml-14 mr-14">
        <div className="flex flex-col gap-6 w-full">
          <h1 className="text-3xl font-bold mb-4">Angkut</h1>
          <div className="flex flex-row justify-between text-xl font-semibold">
            <button
              onClick={() => handleButtonClick("pesanan")}
              className={`${
                currentView === "pesanan"
                  ? "underline underline-offset-8 text-font-hijau"
                  : ""
              }`}
            >
              Pesanan
            </button>
            <button
              onClick={() => handleButtonClick("dalam_proses")}
              className={`${
                currentView === "dalam_proses"
                  ? "underline underline-offset-8 text-font-hijau"
                  : ""
              }`}
            >
              Dalam Proses
            </button>
            <button
              onClick={() => handleButtonClick("riwayat")}
              className={`${
                currentView === "riwayat"
                  ? "underline underline-offset-8 text-font-hijau"
                  : ""
              }`}
            >
              Riwayat
            </button>
          </div>
          {currentView === "pesanan" && <PesananView />}
          {currentView === "dalam_proses" && <DalamProsesView />}
          {currentView === "riwayat" && <RiwayatView />}
        </div>
      </div>
    </div>
  );
};

const OrderCard = ({ order, view }) => {
  const { id, address, time, price, distance, status, estimation, riderName } = order;

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-6">
      <h3 className="text-lg">{`#${id}`}</h3>
        <div className="flex flex-row gap-10 text-xl">
          <img alt="satria" className="h-14 w-14" src={satria} />
          <div className="w-full flex flex-col gap-5">
            <div className="flex flex-row justify-between">
            <h3>{address}</h3>
            <h3>{time}</h3>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-11 w-full">
              <h3>{`Rp${price}`}</h3>
              <h3>{distance}</h3>
              </div>
              {view === "pesanan" && (
              <button className="bg-hijau rounded-full px-10 py-2 text-white">
                Terima
              </button>
            )}
            {view === "dalam_proses" && (
              <button className="bg-hijau rounded-full px-10 py-2 text-white">
                Selesai
              </button>
            )}
            </div>
          </div>
        </div>
        {view === "dalam_proses" && (
        <div className="flex flex-row justify-between">
          <div className="flex flex-col gap-6">
            <h3 className="text-xl">{`Status: ${status}`}</h3>
            <h3 className="text-xl">{`Estimasi Selesai: ${estimation}`}</h3>
            <a href="/posisi" className="text-font-hijau text-xl font-semibold">
              Cek Posisi Satria
            </a>
          </div>
          <div className="flex flex-col justify-between">
            <h3 className="text-xl text-right">{`Satria: ${riderName}`}</h3>
          </div>
        </div>
      )}
      {view === "riwayat" && (
        <div className="flex flex-row justify-between">
          <h3 className="text-xl text-right">{`Satria: ${riderName}`}</h3>
        </div>
      )}
      <hr className="border-b border-black" />
    </div>
    </div>
  );
};

const PesananView = () => {
  return (
    <div className="flex flex-col gap-6">
      {orders.map(order => (
        <OrderCard key={order.id} order={order} view="pesanan" />
      ))}
    </div>
  );
};

const DalamProsesView = () => {
  return (
    <div className="flex flex-col gap-6">
      {orders.map(order => (
        <OrderCard key={order.id} order={order} view="dalam_proses" />
      ))}
    </div>
  );
};

const RiwayatView = () => {
  return (
    <div className="flex flex-col gap-6">
      {orders.map(order => (
        <OrderCard key={order.id} order={order} view="riwayat" />
      ))}
    </div>
  );
};