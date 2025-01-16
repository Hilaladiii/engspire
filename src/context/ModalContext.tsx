import Modal from "@/components/fragments/Modal";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  show: boolean;
  setShow: (value: boolean) => void;
  content: ReactNode;
  setContent: (content: ReactNode) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [show, setShow] = useState<boolean>(false);
  const [content, setContent] = useState<ReactNode>(null);
  return (
    <ModalContext value={{ show, setShow, content, setContent }}>
      {children}
      {show && (
        <Modal show={show} setShow={setShow}>
          {content}
        </Modal>
      )}
    </ModalContext>
  );
}

export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
