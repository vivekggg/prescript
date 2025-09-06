import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const currencySymbol = "₹";
  const backendUrl =
    import.meta.env.VITE_BACKEND_URL || "http://localhost:4000";

  const [doctors, setDoctors] = useState([]);
  const [token, setToken] = useState(
    localStorage.getItem("token") ? localStorage.getItem("token") : ""
  );
  const [userData, setUserData] = useState({});

  // Getting Doctors using API
  const getDoctosData = async () => {
    try {
      console.log(
        "Loading doctors data from:",
        backendUrl + "/api/doctor/list"
      );
      const { data } = await axios.get(backendUrl + "/api/doctor/list");
      console.log("Doctors response:", data);
      if (data.success) {
        setDoctors(data.doctors);
        console.log("Doctors set:", data.doctors);
      } else {
        console.log("Failed to load doctors:", data.message);
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error loading doctors:", error);
      toast.error(error.message);
    }
  };

  // Getting User Profile using API
  const loadUserProfileData = async () => {
    try {
      console.log("Loading user profile data with token:", token);
      const { data } = await axios.get(backendUrl + "/api/user/get-profile", {
        headers: { token },
      });

      console.log("User profile response:", data);
      if (data.success) {
        setUserData(data.userData);
        console.log("User data set:", data.userData);
      } else {
        console.log("Failed to load user profile:", data.message);
        toast.error(data.message);
      }
    } catch (error) {
      console.error("Error loading user profile:", error);
      toast.error(error.message);
    }
  };

  useEffect(() => {
    getDoctosData();
  }, []);

  useEffect(() => {
    if (token) {
      loadUserProfileData();
    }
  }, [token]);

  const value = {
    doctors,
    getDoctosData,
    currencySymbol,
    backendUrl,
    token,
    setToken,
    userData,
    setUserData,
    loadUserProfileData,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
