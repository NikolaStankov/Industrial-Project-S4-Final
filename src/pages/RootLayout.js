import React from 'react'
import { Outlet } from 'react-router';
import PrimarySearchAppBar from "../components/Navigation/PrimarySearchAppBar";
import { useMediaQuery } from '@mui/material';

function RootLayout() {
  const drawerWidth = 240;
  return (
    <>
      <PrimarySearchAppBar />
      <main
        style={{
          marginLeft: useMediaQuery('(min-width:1200px)') ? `${drawerWidth}px` : '0px',
          width: { lg: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Outlet
        />
      </main>
    </>
  )
}

export default RootLayout;