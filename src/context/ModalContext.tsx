import Modal, { IModalTemplate } from "@/components/fragments/Modal";
import { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  handleModal: ({ show, content, type }: IModalData) => void;
}

interface IModalData {
  show: boolean;
  content?: ReactNode;
  type?: "template" | "custom";
  modalTemplate?: IModalTemplate;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);
export function ModalProvider({ children }: { children: ReactNode }) {
  const [modalData, setModalData] = useState<IModalData>({
    show: false,
  });
  const handleModal = (data: IModalData) => {
    setModalData(data);
  };
  return (
    <ModalContext value={{ handleModal }}>
      {children}
      {modalData.show && (
        <Modal
          show={modalData.show}
          setShow={(show) => setModalData({ ...modalData, show })}
          type={modalData.type}
          templateData={modalData.modalTemplate}
        >
          {modalData.content}
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
