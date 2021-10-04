import React from 'react';
import { Card, Container } from 'react-bootstrap';
import image from '../image/champ.jpg';
const About = () => {
    return (

        <Card className="w-100 d-flex justify-content-center align-items-center bg-dark text-white">
            <Card.Img src={image} alt="Card image" />
            <Card.ImgOverlay>
                <Card.Title>Welcome to our club</Card.Title>
                <Card.Text>
                    Fell free and going to rock.Just dance.
                </Card.Text>

            </Card.ImgOverlay>
        </Card>

    );
};

export default About;