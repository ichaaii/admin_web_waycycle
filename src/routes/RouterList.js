import React from 'react'
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { Sidebar } from '../components/Sidebar'
import { InputPage } from '../pages/InputPage'
import { Angkut } from '../pages/Angkut'
import { Rekap } from '../pages/Rekap'
import { RiwayatPage } from '../pages/RiwayatPage'
import { Posisi } from '../pages/Posisi'
import ProtectedRoute from '../components/protected/ProtectedRoute'

const RouterList = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<LoginPage />} />
    <Route
          path="/sidebar"
          element={
            <ProtectedRoute>
              <Sidebar />
            </ProtectedRoute>
          }
        />
        <Route
          path="/input"
          element={
            <ProtectedRoute>
              <InputPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/angkut"
          element={
            <ProtectedRoute>
              <Angkut />
            </ProtectedRoute>
          }
        />
        <Route
          path="/riwayat"
          element={
            <ProtectedRoute>
              <RiwayatPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/rekap"
          element={
            <ProtectedRoute>
              <Rekap />
            </ProtectedRoute>
          }
        />
        <Route
          path="/posisi"
          element={
            <ProtectedRoute>
              <Posisi />
            </ProtectedRoute>
          }
        />
    </Routes>
    </BrowserRouter>
  )
}

export default RouterList