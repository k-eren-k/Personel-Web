"use client";
import React, { useState, useEffect } from "react";
import { Button } from "@nextui-org/react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });

    return () => {
      window.removeEventListener("scroll", () => {
      });
    };
  }, []); 

  return (
    <div
  
  >
  </div>
  
  
  
  );
}
