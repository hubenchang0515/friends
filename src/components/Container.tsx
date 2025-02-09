import React from "react";
import "./Container.css"

export interface ContainerProps {
    id?:string;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}

export default function Container(props:ContainerProps) {
    return (
        <div className="container" id={props.id} style={props.style}>
            {props.children}
        </div>
    )
}