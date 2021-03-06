import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';
import firebase from 'firebase/compat';


const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {

    const [title, setTitle] = useState("");
    const [photoData, setPhotoData] = useState({});
        // hooks for Likes and Dislikes
        const [likes, setlikes] = useState(0);
        const [dislikes, setDislikes] = useState(0);
        // hooks for Likes and Dislikes
    const [likesAndDislikes, setLikesAndDislikes] = useState({});

    useEffect(() => {
        if (!title) return null;
        // retrieve likes/dislikes from Firebase and set data
		// ELSE set a new entry in Firebase with movieID and set data
        const movieRef = firebase.database().ref (`${title}/`);
        
        movieRef.on("value", (data) => {
            
            if (data.val() !== null ) {
                setLikesAndDislikes({
                    ...data.val(),
                });
            } else {
                firebase.database().ref(`${title}/`).set({
                    likes: 0,
                    dislikes: 0,
                });
            }
            
        })
    }, [title]);

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto(){
            
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );
            const data = await res.json();

            setPhotoData(data);
            setTitle(data.title)
            
        }
    }, [title]);

    useEffect(() => {
        if (!likesAndDislikes) return null;
        const { dislikes: down, likes: up } = likesAndDislikes;
        setDislikes(down);
        setlikes(up);
        
    }, [dislikes, likes, likesAndDislikes])

    // called last to NOT call Hooks Conditionally
    if (!photoData) return <div />

    const handleLikeClick = () => {
        const updates = {};
        updates[`${title}/likes`] = firebase.database.ServerValue.increment(1);
        firebase.database().ref().update(updates);
    }

    const handleDislikeClick = (e) => {
        const updates = {};
        updates[`${title}/dislikes`] = firebase.database.ServerValue.increment(1);
        firebase.database().ref().update(updates)
    }

    return (
        <>
        <NavBar/>
        <div className="nasa-photo">

            <h1>Nasa-Insta</h1>
            <p>Brought to you by NASA's Astronomy Photo of The Day</p>

            {/* Ternary here to alter what is reflected if .media_type is video */}

            {
            photoData.media_type === "image" ? (
            <img src={photoData.url} alt={photoData.title} className="photo" />
            ) : (
                <iframe
                title="space-video"
                src={photoData.url}
                frameBorder="0"
                // gesture="media"
                // allow="encryted-media"
                allow= "autoplay"
                allowFullScreen
                className="photo"
                />
            )
            
            }

            <div className="context">
                <h1>{photoData.title}</h1>
                <p className="date">{photoData.date}</p>
                <p className="explanation">{photoData.explanation}</p>

                <div>
                <button className="counter" onClick={() => handleLikeClick(title)}>
                Like {likes}
                </button>
                <button className="counter" onClick={() => handleDislikeClick(title)}>
                Dislike {dislikes}
                </button>
            </div>
            </div>

            

        </div>
        </>
      
    )
}
