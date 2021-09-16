 import React from 'react'
 import { Link } from 'react-router-dom';
 
 export default function Home() {
     return (
         <div className="home">
             <Link className="home-link" to="/nasaphoto">Gaze Into The Vastness</Link>
         </div>
     )
 }
 