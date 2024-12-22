import { ReactNode, useState } from "react";
import Modal from "@mui/material/Modal";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import "./ModalWrapper.css";
import { toggleOpenLoginForm } from "../../services/store/slices/profileSlice";

const ModalWrapper = ({ children }: { children: ReactNode }) => {
  const dispatch = useDispatch();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "1px solid grey",
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = useState(true);
  const handleClose = () => {
    setOpen(false);
    dispatch(toggleOpenLoginForm());
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style} className="modal">
        {children}
      </Box>
    </Modal>
  );
};

export default ModalWrapper;