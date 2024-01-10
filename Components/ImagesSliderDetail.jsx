import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_URL = "http://localhost:4000";

const ImagesSliderDetail = () => {
  const [imageData, setImageData] = useState([]);
  const { projectId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace the URL with the actual URL hosting your JSON file
        const response = await axios.get(`${API_URL}`);

        // Check if response.data.projects is an array

        // Extract images and thumbnails from the API data
        const extractedData = response.data.projects.map((item) => ({
          thumbnail: item.images.thumbnail,
          images: item.images,
        }));

        // Set the image data state with the array of objects containing thumbnails and images
        setImageData(extractedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [projectId]); // Empty dependency array to run the effect only once on mount

  return (
    <div>
      <h2>Image Gallery</h2>
      {imageData.map((item, index) => (
        <div key={index}>
      {project && <img src={project.thumbnail}/>}
      <div>
            {Object.values(item.images).map((imageUrl, i) => (
              <img key={i} src={imageUrl} alt={`Image ${index + 1}.${i + 1}`} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImagesSliderDetail;
