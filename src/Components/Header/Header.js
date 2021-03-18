import React, { useContext } from 'react';
import { MyContext } from '../../App';
import './header.css'
const Header = () => {
    const {club, setClub} = useContext(MyContext)
    return (
        <div className="header-container">
            {
                club ? <img width="180px" height="150px" className="" src={club.logo} alt=""/> : <h1>Team Tracker</h1>
            }
        </div>
    );
};

export default Header;