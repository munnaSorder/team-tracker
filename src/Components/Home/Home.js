import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './home.css'
import fakeData from '../../fakeData/clubData.json'
import ClubList from '../ClubList/ClubList';
const clubData = [...fakeData]

const Home = () => {
    return (
        <div className="home-container">
            <Container className="pt-5">
                <Row>
                    {
                        clubData.map(data => <ClubList club={data} />)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;