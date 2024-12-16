import { ChangeEvent, FC, FormEvent, useState } from "react";
import AuthService from "../../services/authService";
import Modal from "react-modal";
import { toast } from "react-toastify";

const ModalWrapper: FC = ({ children }: any) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  return (
    <div className="">
      <Modal style={customStyles} isOpen={true}>
        {children}
      </Modal>
    </div>
  );
};

export default ModalWrapper;
