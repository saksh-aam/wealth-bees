import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import HT1 from "../../images/HT1.png";
import HT2 from "../../images/HT2.png";
import HT3 from "../../images/HT3.png";

export default function HarnessTechCarousel() {
    const [slideIndex, setSlideIndex] = useState(1);
    const objects = [
        {
            id: uuidv4(),
            img: HT1,
            heading: "Online ATM. - Fast &amp; Secure WealthBees Mobile App",
            para: "Online ATM on the app allows you to invest or withdraw an  amount within 30 minutes of service request.Making you feel secure about the ease of access to your money.",
        },
        {
            id: uuidv4(),
            img: HT2,
            heading: "Portfolio in your pocket. WealthBees Mobile App",
            para: "With an easy and interactive interface, Get an overview of your whole portfolio with real - time updates.Bringing your family's complete portfolio in your pocket.",
        },
        {
            id: uuidv4(),
            img: HT3,
            heading: "Investing through Research &amp; Perfection.",
            para: "Investing in the suitable funds, which ensures your profit, with state - of - the - art infographics- based research on Investments.So that you have a perfectly balanced portfolio.",
        },
    ];

    const moveDot = (index) => {
        setSlideIndex(index);
    };
    function switchobjects() {
        setSlideIndex((index) => {
            if (index >= objects.length) {
                setSlideIndex(1);
            } else {
                setSlideIndex(index + 1);
            }
        });
    }
    const nextSlide = () => {
        if (slideIndex !== objects.length) {
            setSlideIndex(slideIndex + 1);
        } else if (slideIndex === objects.length) {
            setSlideIndex(1);
        }
    };

    const prevSlide = () => {
        if (slideIndex !== 1) {
            setSlideIndex(slideIndex - 1);
        } else if (slideIndex === 1) {
            setSlideIndex(objects.length);
        }
    };
    // useEffect(() => {
    //     const interval = setInterval(switchobjects, 8000);
    //     return () => clearInterval(interval);
    // }, [slideIndex]);

    return (
        <div className="container-slider">
            {objects.map((obj, index) => {
                return (
                    <div
                        key={obj.id}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                    >
                        <div className="mobile-images">
                            <img src={obj.img} alt="" className="boxes__vector-img" />
                        </div>
                        <div className="content-container">
                        <div className="boxes__heading">{obj.heading}</div>
                            <div className="boxes__content">{obj.para}</div>
                        </div>
                    </div>
                );
            })}

            <div className="container-dots">
                {/* <BtnSlider moveSlide={prevSlide} direction={"prev"} /> */}
                {Array.from({ length: 3 }).map((item, index) => (
                    <div
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
                {/* <BtnSlider moveSlide={nextSlide} direction={"next"} /> */}
            </div>
        </div>
    );
}
