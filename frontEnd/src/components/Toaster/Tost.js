import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const ToastError = (errorMessage) => {
  toast.error(`${errorMessage}`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};

export const ToastSuccess = (successMessage) => {
  toast.success(`${successMessage}`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    className: "toast-message",
  });
};
