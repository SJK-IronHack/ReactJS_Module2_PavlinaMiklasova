import { createContext, useEffect, useState } from "react";
import axios from "axios";
// const API_URL = "http://localhost:4000/projects";

export const AllProjectContext = createContext();

const AllProjectContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/projects`)
      .then((response) => {
        //console.log(response.data);
        setProjects(response.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getAllProjects();
    const intervalId = setInterval(() => {
      getAllProjects();
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  const getOneProduct = (projectId) => {
    const OneProduct = projects.find((project) => project.id == projectId);
    return OneProduct;
  };

  return (
    <AllProjectContext.Provider value={{ projects, getOneProduct }}>
      {children}
    </AllProjectContext.Provider>
  );
};

export default AllProjectContextProvider;
