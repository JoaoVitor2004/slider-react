import { useState } from 'react'
import datas from '../../depoiments';
import "./styles.css";

export default function Slider() {

    const [activeIndex, setActiveIndex] = useState(0)

    const handlePrev = () => setActiveIndex(0)
    const handleNext = () => setActiveIndex(1)

    const increment = () => btn.setClick((prev) => prev += 1)

    return (
        <>
            {
                datas.map((item, index) => (
                    <div className={`slider ${activeIndex === index ? "active" : ""}`} key={index}>
                        <div className="container">
                            <p className="description">{item.description}</p>
                            <h4 className="person"><strong className="name">{item.name}</strong>{item.title}</h4>
                        </div>
                        <div className="banner">
                            <img src={activeIndex === 0 ? item.imgTanya : item.imgJohn} alt="image preview" className="img" />
                        </div>
                    </div>
                ))
            }
            <div className="btns">
                <button className={`btn ${activeIndex === 0 ? "opacity" : ""}`} onClick={handlePrev}>
                    <i className="bi bi-arrow-left-circle-fill"></i>
                </button>
                <button className={`btn ${activeIndex === 1 ? "opacity" : ""}`} onClick={handleNext}>
                    <i className="bi bi-arrow-right-circle-fill"></i>
                </button>
            </div>
        </>
    )
}