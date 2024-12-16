import { ReactNode } from "react";
import Modal from "react-modal";

const ModalWrapper = ({ children }: { children: ReactNode }) => {
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
