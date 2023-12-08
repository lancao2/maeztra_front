"use client";

import AboutNewColectio from "@/components/aboutNewColection";
import Breands from "@/components/breands";
import Highlight from "@/components/highlight";
import ModalRoot from "@/components/modalRoot";
import MoreMenu from "@/components/moreMenu";
import NewsLetter from "@/components/newsLeatter";
import NewLetterModal from "@/components/newsLetterModal";
import Strengths from "@/components/strengths";
import ToShop from "@/components/toShop";

import React, { useState } from "react";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Highlight />
      <Strengths />
      <Breands />
      <ToShop />
      <AboutNewColectio />
      <hr />
      <NewsLetter />
      <hr />
      <MoreMenu />
      <ModalRoot isOpen={isModalOpen} closeModal={closeModal}>
        <NewLetterModal />
      </ModalRoot>
    </>
  );
}
