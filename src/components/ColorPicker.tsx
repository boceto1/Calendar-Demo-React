/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import 'react-color-picker/index.css'

export interface IProps {
    color?: string;
    onSelectColor: (color: string) => void
}


const colors = {
    blue: "#84B9E5",
    green: "#A1E584",
    orange: "#E5BD84",
    purple: "#BA84E5"
}


const selectColorFromCode = (color: string) => {
    if (color === "#84B9E5") return "blue";
    if (color === "#A1E584") return "green";
    if (color === "#E5BD84") return "orange";
    return "purple"
}

const ColorPicker = ({ color, onSelectColor }: IProps) => {

    const selectedColor = !color ? "blue" : selectColorFromCode(color);

    const [colorS, setColors] = useState(selectedColor);

    const selectColor = (color: string) => { setColors(color); onSelectColor(color) }

    const renderblue = (colorS === "blue") ? (
        <div className="col-1"><a href="#" className="dot selected-dot" style={{ backgroundColor: colors.blue }} onClick={() => selectColor("blue")}></a></div>
    ) : (
            <div className="col-1"><a href="#" className="dot" style={{ backgroundColor: colors.blue }} onClick={() => selectColor("blue")}></a></div>
        );

    const rendergreen = (colorS === "green") ? (
        <div className="col-1"><a href="#" className="dot selected-dot" style={{ backgroundColor: colors.green }} onClick={() => selectColor("green")}></a></div>
    ) : (
            <div className="col-1"><a href="#" className="dot" style={{ backgroundColor: colors.green }} onClick={() => selectColor("green")}></a></div>
        );

    const renderorange = (colorS === "orange") ? (
        <div className="col-1"><a href="#" className="dot selected-dot" style={{ backgroundColor: colors.orange }} onClick={() => selectColor("orange")}></a></div>
    ) : (
            <div className="col-1"><a href="#" className="dot" style={{ backgroundColor: colors.orange }} onClick={() => selectColor("orange")}></a></div>
        );

    const renderpurple = (colorS === "purple") ? (
        <div className="col-1"><a href="#" className="dot selected-dot" style={{ backgroundColor: colors.purple }} onClick={() => selectColor("purple")}></a></div>
    ) : (
            <div className="col-1"><a href="#" className="dot" style={{ backgroundColor: colors.purple }} onClick={() => selectColor("purple")}></a></div>
        );

    return (<div className="row">
        {renderblue}
        {rendergreen}
        {renderorange}
        {renderpurple}
    </div>
    )
}

export default ColorPicker;