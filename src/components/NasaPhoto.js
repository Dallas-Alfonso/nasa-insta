import React from 'react';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';


const apiKey = process.env.REACT_APP_NASA_KEY;

export default function NasaPhoto() {
    const [photoData, setPhotoData] = useState(null);

    // // hooks for Likes and Dislikes
    // const [likes, setlikes] = useState(0);
    // const [dislikes, setDislikes] = useState(0);
    // const [movieData, setMovieData] = useState ({}); //ADJUST THIS to pick up NASA DATA
    // // hooks for Likes and Dislikes

    useEffect(() => {
        fetchPhoto();

        async function fetchPhoto(){
            const res = await fetch(
                `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`
            );
            const data = await res.json();

            setPhotoData(data);
            console.log(data)
        }
    }, []);

    if (!photoData) return <div/>

    // // JS for creating entires in databse, the like  and the dislike 
    // useEffect(() => {
    //     if (!url) return null;
    //     // retrieve likes/dislikes from Firebase and set data
	// 	// ELSE set a new entry in Firebase with movieID and set data
    //     const movieRef = firebase.database().ref (`${url}/`);
    //     movieRef.on("value", (data) => {
    //         if (data.val() !== null ) {
    //             setMovieData({
    //                 ...data.val(),
    //             });
    //         } else {
    //             firebase.database().ref(`${url}/`).set({
    //                 likes: 0,
    //                 dislikes: 0,
    //             });
    //         }
    //     })
    // }, [url]);

    // useEffect(() => {
    //     if (!movieData) return null;
    //     const { dislikes: down, likes: up } = movieData;

    //     setDislikes(down);
    //     setlikes(up);
    // }, [dislikes, likes, movieData])

    // const handleLikeClick = () => {
    //     const updates = {};
    //     updates[`${url}/likes`] = firebase.database.ServerValue.increment(1);
    //     firebase.database().ref().update(updates);
    // }

    // const handleDislikeClick = (e) => {
    //     const updates = {};
    //     updates[`${url}/dislikes`] = firebase.database.ServerValue.increment(1);
    //     firebase.database().ref().update(updates)
    // }

    // // JS for creating entires in databse, the like  and the dislike 


    return (
        <>
        <NavBar/>
        <div className="nasa-photo">

            {/* Ternary here to alter what is reflected if .media_type is video */}

            {
            photoData.media_type === "image" ? (
            <img src={photoData.url} alt={photoData.title} className="photo" />
            ) : (
                <iframe
                title="space-video"
                src={photoData.url}
                frameBorder="0"
                gesture="media"
                allow="encryted-media"
                allowFullScreen
                className="photo"
                />
            )
            }

            <div>
                <h1>{photoData.title}</h1>
                <p className="date">{photoData.date}</p>
                <p className="explanation">{photoData.explanation}</p>
            </div>

            {/* <div>
                <button onClick={() => handleLikeClick(imdbID)}>
                👍{likes}
                </button>
                <button onClick={() => handleDislikeClick(imbdID)}>
                👎{dislikes}
                </button>
            </div> */}

        </div>
        </>
      
    )
}
