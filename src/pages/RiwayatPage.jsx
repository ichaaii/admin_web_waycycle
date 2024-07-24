import React, { useState, useEffect } from 'react';
import { Card, Typography } from '@material-tailwind/react';
import { Sidebar } from '../components/Sidebar';
import { db } from "../components/Firebase.js";
import { collection, getDocs } from 'firebase/firestore';

const TABLE_HEAD = ["Tanggal", "Username", "Sampah Organik (KG)", "Botol Plastik (pcs)", "Angkut", "Xp", "WayPoint"];

export const RiwayatPage = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "transactions"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTransactions(data);
    };

    fetchData();
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex w-screen my-12 ml-14 mr-14">
        <div className="flex flex-col gap-6 w-full">
          <h1 className='text-3xl font-bold mb-4'>Riwayat Transaksi</h1>
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
                {transactions.map(({ id, createdAt, username, organicWaste, plasticBottle, angkut, XP, WayPoint }, index) => {
                  const isLast = index === transactions.length - 1;
                  const classes = isLast ? "p-4 bg-white" : "p-4 border-b border-blue-gray-50 bg-white";

                  return (
                    <tr key={id}>
                      <td className={classes} style={{ width: '14.28%' }}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {new Date(createdAt.seconds * 1000).toLocaleDateString("id-ID")}
                        </Typography>
                      </td>
                      <td className={classes} style={{ width: '14.28%' }}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {username}
                        </Typography>
                      </td>
                      <td className={classes} style={{ width: '14.28%' }}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {organicWaste}
                        </Typography>
                      </td>
                      <td className={classes} style={{ width: '14.28%' }}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {plasticBottle}
                        </Typography>
                      </td>
                      <td className={classes} style={{ width: '14.28%' }}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {angkut}
                        </Typography>
                      </td>
                      <td className={classes} style={{ width: '14.28%' }}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {XP}
                        </Typography>
                      </td>
                      <td className={classes} style={{ width: '14.28%' }}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {WayPoint}
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
