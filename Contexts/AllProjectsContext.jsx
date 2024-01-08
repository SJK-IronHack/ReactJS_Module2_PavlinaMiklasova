import { createContext, useContext, useEffect, useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
const API_URL = "https://localhost:4000/projects"




export const AllProjectContext = createContext();

const AllProjectContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    axios
      .get(`${API_URL}`)
      .then((response) => setProjects(response.data))
      .catch((error) => console.log(error));
  };
  console.log(getAllProjects);
  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <AllProjectContext.Provider
      value={{ projects }}
    >
      {children}
    </AllProjectContext.Provider>
  )

}