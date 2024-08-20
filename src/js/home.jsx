import React from 'react';
import Navbar from './component/Navbar.jsx';
import Jumbotron from './component/Jumbotron.jsx';
import Card from './component/Card.jsx';
import Footer from './component/Footer.jsx';


function Home() {
    return (
        <div>
            <Navbar />
            <div className="container my-5">
                <Jumbotron />
                <div className="row">
                    <div className="col-md-4">
                        <Card
                            title="Card 1"
                            text="This is the first card."
                            imageUrl="https://via.placeholder.com/150"
                            buttonUrl="#"
                            buttonText="Learn More"
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            title="Card 2"
                            text="This is the second card."
                            imageUrl="https://via.placeholder.com/150"
                            buttonUrl="#"
                            buttonText="Learn More"
                        />
                    </div>
                    <div className="col-md-4">
                        <Card
                            title="Card 3"
                            text="This is the third card."
                            imageUrl="https://via.placeholder.com/150"
                            buttonUrl="#"
                            buttonText="Learn More"
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
