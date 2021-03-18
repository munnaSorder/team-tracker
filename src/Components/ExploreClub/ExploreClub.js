import React, { useContext } from 'react';
import { MyContext } from '../../App';
import './explore.css'

const ExploreClub = () => {
    const {club, setClub} = useContext(MyContext)
    return (
        <div className="explore-container pt-5 pb-3">
            <div className="container">
               <div className="card-section d-flex align-item-center justify-content-between mb-5">
                    <div className="club-details">
                        <h1>{club.name}</h1>
                        <h4>Founded: {club.founded}</h4>
                        <h4>Country: {club.country}</h4>
                        <h4>Sport Type: {club.sportsType}</h4>
                        <h4>Gender: {club.gender}</h4>
                    </div>
                    <div className="club-img">
                        <img width="400px" className="img-thumbnail image-fluid" src={club.image} alt=""/>
                    </div>
               </div>
               <p>{club.about1}</p>
               <br/>
               <p>{club.about2}</p>
            </div>
        </div>
    );
};

export default ExploreClub;