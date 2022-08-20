import { colors } from '../Category'
import { useState } from 'react';
import classes from './Btns.module.scss'

function BtnLike(props) {
    const [cartFillLike, setCartFillLike] = useState(colors.black)
    const [background, setBackground] = useState()
    const likeBtnClickHandler = (event) => {
        event.stopPropagation();
        setCartFillLike(colors.white);
        setBackground(colors.red);
    }

    const classBtn = props.className ? `${classes.btnLike} ${props.className}` : classes.btnLike;

    return ( 
        <button style={{backgroundColor: background,border: '1px solid ' + background}} className={classBtn} onClick={likeBtnClickHandler} onMouseEnter={() => {setCartFillLike(colors.white)}} onMouseLeave={() => {setCartFillLike(colors.black)}}>
                <svg className={classes.decor} version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="32.000000pt" height="32.000000pt" viewBox="0 0 32.000000 32.000000"
                        preserveAspectRatio="xMidYMid meet">

                        <g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
                        fill={cartFillLike} stroke="none">
                        <path d="M37 280 c-35 -28 -44 -78 -22 -121 21 -40 124 -139 145 -139 21 0
                        124 99 145 139 44 86 -46 179 -123 125 -20 -14 -24 -14 -44 0 -31 22 -70 20
                        -101 -4z m100 -22 l23 -21 23 21 c29 27 71 28 97 2 42 -42 19 -104 -65 -175
                        l-55 -47 -55 47 c-84 71 -107 133 -65 175 26 26 68 25 97 -2z"/>
                        </g>
                </svg>
        </button>
     );
}

export default BtnLike;