import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Carousel } from '@mantine/carousel';
import { Image } from '@mantine/core';

import "../Styles/ImageCarouselProject.modules.scss"



// const API_URL = "http://localhost:4000";

const ImagesSliderDetail = () => {
  const [imageData, setImageData] = useState([]);
  const { projectId } = useParams();
  const [project, setProject] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace the URL with the actual URL hosting your JSON file
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/projects/${projectId}`);

        // Check if response.data.projects is an array
        // Extract images and thumbnails from the API data
        const extractedData = response.data.images.map((item) => ({
          image: item.url,
        }));
setProject(response.data);
        // Set the image data state with the array of objects containing thumbnails and images
        setImageData(extractedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [projectId]); // Empty dependency array to run the effect only once on mount

  return (
    <div className="ImageCarousel">
      {project ? (project.images.map((image, index) =>{
        return (
          <li key={index} className="ImageItem">
            <img src={image.url}  alt="img not working"/>
          </li>
         
        )
      }) ): null}
    </div>
  );
};

export default ImagesSliderDetail;
