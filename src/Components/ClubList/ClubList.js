import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './clubList.css'

const ClubList = (props) => {
    console.log(props);
    const {name, logo, sportsType} = props.club;
    return (
        <Col md={4} sm={12}  className="mb-5 text-center">
            <Card>
                <Card.Img className="image-customize mx-auto image-fluid" variant="top" src={logo} />
                <Card.Body>
                    <Card.Title> <h1 style={{fontSize: '30px'}}>{name}</h1> </Card.Title>
                    <Card.Text>
                    Sports type: {sportsType}
                    </Card.Text>
                    <Button className="exp-btn">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ClubList;