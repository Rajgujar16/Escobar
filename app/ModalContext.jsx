"use client";

import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);

  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const openBooking = () => setIsBookingOpen(true);
  const closeBooking = () => setIsBookingOpen(false);

  const [isGiftOpen, setIsGiftOpen] = useState(false);
  const openGift = () => setIsGiftOpen(true);
  const closeGift = () => setIsGiftOpen(false);

  const [isLiveOpen, setIsLiveOpen] = useState(false);
  const openLive = () => setIsLiveOpen(true);
  const closeLive = () => setIsLiveOpen(false);

  return (
    <ModalContext.Provider
      value={{
        isLoginOpen,
        openLogin,
        closeLogin,
        isBookingOpen,
        openBooking,
        closeBooking,
        isGiftOpen,
        openGift,
        closeGift,
        isLiveOpen,
        openLive,
        closeLive,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
};
