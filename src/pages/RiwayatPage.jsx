import React from 'react'
import { Card, Typography } from '@material-tailwind/react';
import { Sidebar } from '../components/Sidebar';

const TABLE_HEAD = ["Tanggal", "Username", "Sampah Organik (KG)", "Botol Plastik (pcs)", "Angkut", "Xp", "WayPoint" ];
 
const TABLE_ROWS = [
  {
    tanggal: "19/01/24",
    username: "Ichaa",
    sampah: "4",
    botol: "2",
    angkut:"ya",
    xp:"80",
    waypoint:"700"
  },
  {
    tanggal: "19/01/24",
    username: "chaai",
    sampah: "6",
    botol: "10",
    angkut:"tidak",
    xp:"400",
    waypoint:"2050"
  },
  {
    tanggal: "20/01/24",
    username: "Khaai",
    sampah: "1",
    botol: "10",
    angkut:"tidak",
    xp:"1300",
    waypoint:"3500"
  },
  {
    tanggal: "20/01/24",
    username: "Kesyca",
    sampah: "5",
    botol: "2",
    angkut:"tidak",
    xp:"250",
    waypoint:"2500"
  },
  {
    tanggal: "20/01/24",
    username: "Kesca",
    sampah: "2",
    botol: "10",
    angkut:"ya",
    xp:"1050",
    waypoint:"200"
  },
];

export const RiwayatPage = () => {
    return (
        <div className="flex">
        <Sidebar />
        <div className="flex w-screen my-12 ml-14 mr-14">
        <div className="flex flex-col gap-6 w-full">
            <h1 className='text-3xl font-bold mb-4'>Riwayat Transaksi</h1>
        <Card className="w-full overflow-scroll">
          <table className="w-full min-w-max table-auto text-center bg-hijau rounded-2xl">
            <thead>
              <tr >
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
              {TABLE_ROWS.map(({ tanggal, username, sampah, botol, angkut, xp, waypoint }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast ? "p-4 bg-white" : "p-4 border-b border-blue-gray-50 bg-white";
     
                return (
                  <tr key={username}>
                    <td className={`${classes}`} style={{ width: '14.28%' }}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {tanggal}
                      </Typography>
                    </td>
                    <td className={`${classes}`} style={{ width: '14.28%' }}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {username}
                      </Typography>
                    </td>
                    <td className={`${classes}`} style={{ width: '14.28%' }}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {sampah}
                      </Typography>
                    </td>
                    <td className={`${classes}`} style={{ width: '14.28%' }}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {botol}
                      </Typography>
                    </td>
                    <td className={`${classes}`} style={{ width: '14.28%' }}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {angkut}
                      </Typography>
                    </td>
                    <td className={`${classes}`} style={{ width: '14.28%' }}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {xp}
                      </Typography>
                    </td>
                    <td className={`${classes}`} style={{ width: '14.28%' }}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {waypoint}
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
}
