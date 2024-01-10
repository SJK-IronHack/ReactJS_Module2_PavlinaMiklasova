import { createContext, useEffect, useState } from "react";
import axios from "axios";
// const API_URL = "http://localhost:4000/projects";

export const AllProjectContext = createContext();

const AllProjectContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [needUpdate, setNeedUpdate] = useState(true);
  const getAllProjects = () => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/projects`)
      .then((response) => {
        //console.log(response.data);
        setProjects(response.data);
        setNeedUpdate(false);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    if (needUpdate) {
      getAllProjects();
    }
  }, [needUpdate]);

  const getOneProduct = (projectId) => {
    const OneProduct = projects.find((project) => project.id == projectId);
    return OneProduct;
  };

  return (
    <AllProjectContext.Provider
      value={{ projects, getOneProduct, needUpdate, setNeedUpdate }}
    >
      {children}
    </AllProjectContext.Provider>
  );
};

export default AllProjectContextProvider;
