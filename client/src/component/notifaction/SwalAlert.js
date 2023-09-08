import Swal from "sweetalert2";

const SwalAlert = ({icon , message}) =>{
    return(
        Swal.fire({
        icon: icon,
        text: message,
      })
    )
}

export default SwalAlert;