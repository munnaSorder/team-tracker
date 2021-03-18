import React, { useContext, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './home.css'
import fakeData from '../../fakeData/clubData.json'
import ClubList from '../ClubList/ClubList';
import { MyContext } from '../../App';
const clubData = [...fakeData]
const Home = () => {
    const {club, setClub} = useContext(MyContext);
    const exploreFunc = (clubData) => {
        setClub(clubData);
    }
    return (
        <div className="home-container">
            <Container className="pt-5">
                <Row>
                    {
                        clubData.map(data => <ClubList club={data} exploreFunc={exploreFunc} key={data.id} />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;