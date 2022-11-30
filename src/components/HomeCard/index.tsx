import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { IoPlayCircleOutline } from "react-icons/io5";
import "./styles.css"

interface HomeCardsProps {
    index: number;
    title: string;
}

export default function HomeCard({ index, title }: HomeCardsProps) {
    const navigate = useNavigate();

    function MouseOver(event: any) {
        event.target.style.cursor = "pointer";
    }

    return (
        <div key={index} className="home-card"
            onMouseOver={MouseOver}
            onClick={() => navigate(`/question/${index}`)}>
            <div className="row">
                <div className="text-center">
                    <h3>{title}</h3>
                    <div className="button-start-home">
                        <IoPlayCircleOutline size={80} />
                    </div>
                </div>
            </div>
        </div>
    );
}