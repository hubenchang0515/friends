import React from "react";
import "./Card.css"

export interface CardProps {
    id?:string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

export default function Card(props:CardProps) {
    return (
        <div className="card" id={props.id} style={props.style}>
            {props.children}
        </div>
    )
}