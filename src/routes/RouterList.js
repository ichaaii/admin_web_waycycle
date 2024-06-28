import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { Sidebar } from '../components/Sidebar'
import { InputPage } from '../pages/InputPage'
import { Angkut } from '../pages/Angkut'
import { Rekap } from '../pages/Rekap'
import { RiwayatPage } from '../pages/RiwayatPage'
import { MapProses } from '../components/MapProses'
import { Posisi } from '../pages/Posisi'

const RouterList = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/input' element={<InputPage/>}/>
        <Route path='/angkut' element={<Angkut/>}/>
        <Route path='/riwayat' element={<RiwayatPage/>}/>
        <Route path='/rekap' element={<Rekap/>}/>
        <Route path='/posisi' element={<Posisi/>}/>
        <Route path='/map' element={<MapProses/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default RouterList