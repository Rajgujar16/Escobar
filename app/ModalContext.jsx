"use client";

import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export function ModalProvider({ children }) {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const openLogin = () => setIsLoginOpen(true);
  const closeLogin = () => setIsLoginOpen(false);
  return (
    <ModalContext.Provider value={{ isLoginOpen, openLogin, closeLogin }}>
      {children}
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  const ctx = useContext(ModalContext);
  if (!ctx) throw new Error("useModal must be used within ModalProvider");
  return ctx;
};
