import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

const Banner = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }




    return (
        <div style = {{height:"400px"}}>
            <Carousel activeIndex={index} onSelect={handleSelect} >
                <Carousel.Item >
                    <img style={{objectFit:"cover", height: "400px"}}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2FyZWhvdXNlJTIwbWFuYWdlbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Different Country Coin</h3>
                        <p>Buy different country coin</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img style={{objectFit:"cover", height: "400px"}}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1589792923962-537704632910?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8d2FyZWhvdXNlJTIwbWFuYWdlbWVudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Crown Coin</h3>
                        <p>Buy rear crown Coin</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item >
                    <img style={{objectFit:"cover", height: "400px"}}
                        className="d-block w-100"
                        src="https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHdhcmVob3VzZSUyMG1hbmFnZW1lbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Coin with Certification</h3>
                        <p>
                            Get certified rear coin.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

    );
}

export default Banner;