import React, { useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { Button, Input, Checkbox } from "@material-tailwind/react";
import berhasil from "../assets/img/succes.png";
import gagal from "../assets/img/Cancel.png";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../components/Firebase.js";

export const InputPage = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isFailureModalOpen, setIsFailureModalOpen] = useState(false);
  const [beratSampah, setBeratSampah] = useState(0);
  const [jumlahBotol, setJumlahBotol] = useState(0);
  const [username, setUsername] = useState("");
  const [totalWayPoint, setTotalWayPoint] = useState(0);
  const [totalXP, setTotalXP] = useState(0);
  const [angkut, setAngkut] = useState("");

  const handleBeratSampahChange = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    setBeratSampah(value);
    calculateTotalWayPointAndXP();
  };

  const handleJumlahBotolChange = (e) => {
    const value = parseFloat(e.target.value, 10) || 0;
    setJumlahBotol(value);
    calculateTotalWayPointAndXP();
  };

  const calculateTotalWayPointAndXP = () => {
    const wayPointPerSampah = 500;
    const wayPointPerBotol = 50;
    const xpPerSampah = 50;
    const xpPerBotol = 100;

    const totalWayPoint =
      beratSampah * wayPointPerSampah + jumlahBotol * wayPointPerBotol;
    const totalXP = beratSampah * xpPerSampah + jumlahBotol * xpPerBotol;

    setTotalWayPoint(totalWayPoint);
    setTotalXP(totalXP);
  };

  const handleButtonClick = async () => {
    try {
      await addDoc(collection(db, "transactions"), {
        username: username,
        organicWaste: beratSampah,
        plasticBottle: jumlahBotol,
        WayPoint: totalWayPoint,
        XP: totalXP,
        angkut: angkut,
        createdAt: serverTimestamp(),
      });
      setIsSuccessModalOpen(true);
    } catch (error) {
      console.error("Error adding document: ", error);
      setIsFailureModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsSuccessModalOpen(false);
    setIsFailureModalOpen(false);
  };

  return (
    <div className="flex ">
      <Sidebar />
      <div className="flex w-screen my-12 ml-14 mr-14">
        <div className="flex flex-col gap-6 w-full">
          <div className="text-3xl font-bold mb-4">Bank Sampah A</div>
          <div className="text-xl font-semibold text-center mb-8">
            Input Data Daur Ulang Pengguna
          </div>
          <div className="flex flex-col items-center mr-[5rem] gap-6">
            <div className="flex flex-row items-center gap-5 w-4/6">
              <h5 className="w-4/6">Username</h5>
              <Input
                label="username"
                size="md"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-row items-center gap-5 w-4/6">
              <h5 className="w-4/6">Berat Sampah Organik</h5>
              <Input
                size="md"
                label="berat sampah (Kg)"
                value={beratSampah}
                onChange={handleBeratSampahChange}
              />
            </div>
            <div className="flex flex-row items-center gap-5 w-4/6">
              <h5 className="w-4/6">Jumlah Botol Plastik</h5>
              <Input
                size="md"
                label="jumlah botol (Pcs)"
                value={jumlahBotol}
                onChange={handleJumlahBotolChange}
              />
            </div>
            <div className="flex flex-row items-center gap-5 w-4/6">
              <h5 className="w-4/6">Total WayPoint</h5>
              <Input
                size="md"
                label="Total WayPoint"
                value={totalWayPoint}
                disabled
              />
            </div>
            <div className="flex flex-row items-center gap-5 w-4/6">
              <h5 className="w-4/6">Total XP</h5>
              <Input size="md" label="Total XP" value={totalXP} disabled />
            </div>
            <div className="flex flex-row items-center gap-5 w-4/6">
              <h5 className="w-4/6">Angkut</h5>
              <select
                value={angkut}
                onChange={(e) => setAngkut(e.target.value)}
                className="p-2 border rounded-lg w-full"
              >
                <option value="pilih">Pilih</option>
                <option value="ya">Ya</option>
                <option value="tidak">Tidak</option>
              </select>
            </div>
            <div className="flex justify-end w-4/6">
              <Button
                onClick={handleButtonClick}
                className="px-16 rounded-full justify-center font-custom bg-hijau"
              >
                Selesai
              </Button>
            </div>
          </div>
        </div>
      </div>

      {isSuccessModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-hijau-90 px-16 py-10 rounded-lg shadow-xl flex flex-col gap-4">
            <div className="flex justify-center">
              <img className="w-16 h-16" src={berhasil} alt="berhasil" />
            </div>
            <p className="text-center text-putih font-medium">
              Poin dan Xp berhasil dikirim ke pengguna
            </p>
            <div className="flex justify-center">
              <Button
                className="rounded-full w-fit px-14 text-black bg-putih"
                onClick={closeModal}
              >
                Tutup
              </Button>
            </div>
          </div>
        </div>
      )}

      {isFailureModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <div className="bg-hijau-90 px-16 py-10 rounded-lg shadow-xl flex flex-col gap-4">
            <div className="flex justify-center">
              <img className="w-16 h-16" src={gagal} alt="gagal" />
            </div>
            <p className="text-center text-putih font-medium">
              Poin dan Xp gagal dikirim ke pengguna
            </p>
            <div className="flex justify-center">
              <Button
                className="rounded-full w-fit px-14 text-black bg-putih"
                onClick={closeModal}
              >
                Tutup
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
