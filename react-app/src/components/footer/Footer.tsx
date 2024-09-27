import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Email, Facebook, Instagram } from '@mui/icons-material';
import { IconButton } from '@mui/material';

function Footer() {
  return (
    <div className="container-fluid text-center py-5 footer">
    <p>2023 KTP Theta Chapter. Website by KTP Alpha Chapter.</p>
    <div className="social-media">
        <IconButton
            onClick={() => window.open("https://www.instagram.com/uchicagoktp", "_blank")}  
        >
            <Instagram/>
        </IconButton>
        <IconButton
            onClick={() => window.open("https://www.facebook.com/uchicagoktp", "_blank")}
        >
            <Facebook/>
        </IconButton>
        <IconButton
            onClick={() => window.open("mailto:uchicagoktp@gmail.com")}
        >
            <Email/>
        </IconButton>
    </div>
  </div>
  )
}

export default Footer