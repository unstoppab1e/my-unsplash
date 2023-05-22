import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Body = () => {
    return (
        <div>
            <h2>Picture List</h2>
            {pictures.map((picture) => (
            <div key={picture._id}>
                <h3>{picture.title}</h3>
                <p>{picture.description}</p>
                <img src={picture.imageUrl} alt={picture.title} />
            </div>
            ))}
        </div>
    );
}

// File: PictureList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PictureList = () => {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const response = await axios.get('/api/pictures');
        setPictures(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPictures();
  }, []);

  
};

export default PictureList;
