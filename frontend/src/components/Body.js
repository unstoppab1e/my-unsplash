import React from 'react'
import './body.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export const Body = () => {
    const [pictures, setPictures] = useState([]);

    useEffect(() => {
        const fetchPictures = async () => {
          try {
            const response = await axios.get('http://localhost:5000/api/pictures');
            setPictures(response.data);
          } catch (error) {
            console.error(error);
          }};
        fetchPictures();
        },[]);
    return (
        <div className='title'>
            <h2>Picture List</h2>
            <ul className='body'>
                {pictures.map((picture) => (
                <li className='pictures' key={picture._id}>
                    <button className='delete'>Delete</button>
                    <h3>{picture.title}</h3>
                    <p>{picture.description}</p>
                    <img src={picture.imageUrl} alt={picture.title} />
                </li>
            
            ))}
            </ul>
        </div>
    );
}