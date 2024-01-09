
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:4000";


function DeleteButton(){

    const handleDelete = (e) => {
        e.preventDefault();
        const requestData = { title, description, year, thumbnail, images };
        axios
          .DELETE(`${API_URL}/projects/${projectId}`, requestData)
          .then((response) => {
            alert("success");
            navigate(`/`);
          });
      }

} 