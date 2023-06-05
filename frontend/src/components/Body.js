import React from 'react'
import './body.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Body = ({searchQuery}) => {

  const handleDelete = (userId) =>{
    axios.delete(`http://localhost:5000/api/pictures/${userId}`)
    .then(response => {
      console.log(response.data)
      const updatedImageList = pictures.filter((picture) => picture._id !== userId);
      setPictures(updatedImageList);
    })
    .catch(error => {
      console.error(error);
    })
  }
  
  const [pictures, setPictures] = useState([]);
  const filteredPictures = pictures.filter((picture) =>
    picture.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  
  useEffect(() => {
      const fetchPictures = async () => {
        try {
          const response = await axios.get('http://localhost:5000/api/pictures');
          setPictures(response.data);
        } catch (error) {
          console.error(error);
        }};
      
      fetchPictures();
      },[pictures]);
  return (
      <div className='title'>
          <h2>Picture List</h2>
          <ul className='body'>
              {filteredPictures.map((picture) => (
              <li className='pictures' key={picture._id}>
                  <button className='delete' onClick={() => handleDelete(picture._id)}>Delete</button>
                  <h3>{picture.title}</h3>
                  <p>{picture.description}</p>
                  <img src={picture.imageUrl} alt={picture.title} />
              </li>
          
          ))}
          </ul>
      </div>
  );
}