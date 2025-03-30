import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const loadingToast = ()=>toast.loading("Signing in...");
export const loggedInSuccessfull = () => toast.success("Logged in successfully", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  export const signedUpSuccessfull = () => toast.success("Signed Up successfully", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  export const loggedOutSuccessfull = () => toast.success("Logged Out successfully", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  export const wrongCredentials = () => toast.error("Incorrect Username or Password", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  export const userNameAlreadyTaken = () => toast.warn("Username already taken", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
  
  export const profileUpdatedSuccess = () => toast.success("Profile Updated Successfully", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  export const profileNotUpdated = () => toast.error("Profile Update Failed", {
    position: "top-center",
    autoClose: 2000,
    hideProgressBar: false,
    pauseOnHover: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  export const pleaseEnterOneFieldForUpdation = () => toast.warn("Please enter atleast one field to update", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    pauseOnHover: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });

  export const pleaseEnterAllDetails = () => toast.warn("Please enter all details", {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    pauseOnHover: false,
    closeOnClick: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });