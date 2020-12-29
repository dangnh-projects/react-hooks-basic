import {useState, useEffect, useRef} from 'react';

const randomColor = (color) => {
    const LIST_COLOR = ['black', 'red', 'blue', 'yellow'];
    const currentIndex = LIST_COLOR.indexOf(color);
    let newIndex = currentIndex;

    while(currentIndex === newIndex)
    {
        newIndex = Math.trunc(Math.random() * LIST_COLOR.length);
    }
    console.log(LIST_COLOR[newIndex]);

    return LIST_COLOR[newIndex];
}

const useMagicColor = () => {
    const colorRef = useRef('white');
    const [color, setColor] = useState('white');

    useEffect(() => {
        const colorInterval = setInterval(() => {
            console.log('First color: ', colorRef.current);
            const colorChange = randomColor(colorRef.current);
            setColor(colorChange);

            colorRef.current = colorChange;
        }, 1000)
        return () => {
            clearInterval(colorInterval);
        }
    }, []);

    return color;
}

export default useMagicColor;