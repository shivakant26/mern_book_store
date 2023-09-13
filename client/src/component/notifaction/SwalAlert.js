import Swal from "sweetalert2";

const SwalAlerts = ({ showAlert, icon, message }) => {
  if (showAlert) {
    Swal.fire({
      icon: icon,
      text: message,
    });
  }
  return null;
};

export default SwalAlerts;
