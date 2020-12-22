import React, {useState} from 'react';
import '../../App.scss';

const getRandomColorBox = () => {
    const listColor = ['deeppink', 'green', 'yellow', 'black', 'blue']
    const colorPick = Math.trunc(Math.random() * 5)
    return listColor[colorPick]
}

const ColorBox = () => {
    const [color, setColor] = useState(() => {
        const initColor = localStorage.getItem('box_color') || 'deeppink'
        return initColor
    });
    const handleClickColorBox = () => {
        const colorBox = getRandomColorBox()
        setColor(colorBox)
        localStorage.setItem('box_color', colorBox)
    }

    return (
    <div
        className="color-box"
        style={{backgroundColor: color}}
        onClick={handleClickColorBox}
        >
    </div>);
}

export default ColorBox;