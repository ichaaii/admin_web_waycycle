import React, { useState, useEffect } from 'react';
import { Card, Typography } from '@material-tailwind/react';
import { Sidebar } from '../components/Sidebar';
import { db } from "../components/Firebase.js";
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

const TABLE_HEAD = ["Tanggal", "Username", "Sampah Organik (KG)", "Botol Plastik (pcs)", "Xp", "WayPoint", "Angkut"];

export const RiwayatPage = () => {
  const [transactions, setTransactions] = useState([]);
  const [sortOrder, setSortOrder] = useState("desc");

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, "transactions"), orderBy("createdAt", sortOrder));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTransactions(data);
    };

    fetchData();
  }, [sortOrder]);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex w-screen my-12 ml-14 mr-14">
        <div className="flex flex-col gap-6 w-full">
          <h1 className='text-3xl font-bold'>Riwayat Transaksi</h1>
          <div className="flex justify-end mb-4 ">
            <select
              label="Urutkan Berdasarkan"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="w-48 text-xl font-semibold border-b-2 border-black p-2"
            >
              <option value="desc">Terbaru</option>
              <option value="asc">Terlama</option>
            </select>
          </div>
          <Card className="w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-center bg-hijau rounded-2xl">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-500 p-4"
                    >
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal leading-none"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {transactions.map(({ id, createdAt, username, organicWaste, plasticBottle, XP, WayPoint, angkut }, index) => {
                  const isLast = index === transactions.length - 1;
                  const classes = isLast ? "p-4 bg-white" : "p-4 border-b border-blue-gray-50 bg-white";

                  return (
                    <tr key={id}>
                      <td className={classes} >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {new Date(createdAt.seconds * 1000).toLocaleDateString("id-ID")}
                        </Typography>
                      </td>
                      <td className={classes} style={{ width: '14%' }}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {username}
                        </Typography>
                      </td>
                      <td className={classes} style={{ width: '14%' }}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {organicWaste}
                        </Typography>
                      </td>
                      <td className={classes} style={{ width: '14%' }}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {plasticBottle}
                        </Typography>
                      </td>
                      <td className={classes} style={{ width: '14%' }}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {XP}
                        </Typography>
                      </td>
                      <td className={classes} style={{ width: '14%' }}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {WayPoint}
                        </Typography>
                      </td>
                      <td className={classes} style={{ width: '14%' }}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {angkut}
                        </Typography>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </div>
  );
};
