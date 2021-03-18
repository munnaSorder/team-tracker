import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './clubList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const ClubList = (props) => {
    const {name, logo, sportsType} = props.club;
    const exploreFunc = props.exploreFunc;
    return (
        <Col md={4} sm={12}  className="mb-5 text-center">
            <Card>
                <Card.Img className="image-customize mx-auto image-fluid" variant="top" src={logo} />
                <Card.Body>
                    <Card.Title> <h1 style={{fontSize: '30px'}}>{name}</h1> </Card.Title>
                    <Card.Text>
                    Sports type: {sportsType}
                    </Card.Text>
                    <Button onClick={() => exploreFunc(props.club)}><Link className="exp-btn" to="/explore">Explore &nbsp;<FontAwesomeIcon icon={faArrowRight} /></Link></Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ClubList;