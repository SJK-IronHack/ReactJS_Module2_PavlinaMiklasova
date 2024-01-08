import { createContext, useEffect, useState } from "react";
import axios from "axios";
const API_URL = "http://localhost:4000/projects";

export const AllProjectContext = createContext();

const AllProjectContextProvider = ({ children }) => {
  const [projects, setProjects] = useState([]);

  const getAllProjects = () => {
    axios
      .get(`${API_URL}`)
      .then((response) => {
        //console.log(response.data);
        setProjects(response.data);
      })
      .catch((error) => console.log(error));
  };
  useEffect(() => {
    getAllProjects();
  }, []);

  return (
    <AllProjectContext.Provider value={{ projects }}>
      {children}
    </AllProjectContext.Provider>
  );
};

export default AllProjectContextProvider;
