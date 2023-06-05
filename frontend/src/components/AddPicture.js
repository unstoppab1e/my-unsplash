import React, {useState} from 'react'
import axios from 'axios'
import "./addpicture.css"

export const AddPicture = ({onClose}) => {
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');
    const [pictures, setPictures] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Create the picture object
        const newPicture = {
            title, description, imageUrl
        };
    
        // Send the picture data to the backend
        axios
          .post('http://localhost:5000/api/pictures', newPicture)
          .then((response) => {
            console.log(response.data); // Optional: Handle success message
            
            
            // Additional logic after successful picture submission
          })
          .catch((error) => {
            console.error(error); // Optional: Handle error
            // Additional error handling logic
          });
    
        // Clear the form fields
        setTitle('');
        setImageUrl('');
        setDescription('');
    };


    return (
        <div className='container' >
            <div className='add-picture'>
                <h2>Add Picture</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title:</label>
                    <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder='Picture`s title'
                    />

                    <label htmlFor="imageUrl">Image URL:</label>
                    <input
                    type="text"
                    id="imageUrl"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder='Image URL'
                    />
                    
                    <label htmlFor="description">Description:</label>
                    <input
                    type="text"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder='Description'
                    />
                    <div className='buttons'>
                        <button className='cancel' type="submit" onClick={onClose}>Cancel</button>
                        <button className='submit' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
