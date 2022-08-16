import { useState } from 'react';
import classes from '../../products/Products.module.scss'

function ChangeColorIcon() {
    const colors = {
        white: '#ffffff',
        black: '#000000',
        blue: 'rgb(85, 120, 218)',
    }

    const [cartFillLike, setCartFillLike] = useState(colors.black)
    const [cartFillAddProduct, setCartFillAddProduct] = useState(colors.white)
    return ( 
        <span>
            <button className={classes.btnLike} onMouseEnter={() => {setCartFillLike(colors.white)}} onMouseLeave={() => {setCartFillLike(colors.black)}}>
                <svg className={classes.decor}   version="1.0" xmlns="http://www.w3.org/2000/svg"
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
            <button className={classes.btnAdd} onMouseEnter={() => {setCartFillAddProduct(colors.blue)}} onMouseLeave={() => {setCartFillAddProduct(colors.white)}}>
                <svg style={{marginRight:'8px'}}  className={classes.decor} version="1.0" xmlns="http://www.w3.org/2000/svg"
                    width="32.000000pt" height="32.000000pt" viewBox="0 0 32.000000 32.000000"
                    preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,32.000000) scale(0.100000,-0.100000)"
                    fill={cartFillAddProduct} stroke="none">
                    <path d="M16 303 c18 -3 26 -22 51 -116 21 -79 26 -117 20 -128 -15 -24 -1
                    -49 27 -49 24 0 41 23 30 41 -3 5 15 9 40 9 34 0 44 -3 40 -13 -7 -18 20 -40
                    43 -35 12 2 18 12 18 28 0 24 -2 25 -80 28 -109 4 -123 22 -18 22 53 0 84 4
                    90 13 9 11 43 123 43 140 0 4 -58 7 -129 7 l-128 0 -6 30 c-6 25 -11 30 -34
                    29 -22 -1 -23 -3 -7 -6z m284 -79 c0 -3 -7 -30 -16 -60 l-15 -54 -84 0 -83 0
                    -11 44 c-6 24 -13 51 -17 60 -5 14 7 16 110 16 64 0 116 -3 116 -6z m-170
                    -184 c0 -11 -7 -20 -15 -20 -8 0 -15 9 -15 20 0 11 7 20 15 20 8 0 15 -9 15
                    -20z m146 9 c10 -17 -13 -36 -27 -22 -12 12 -4 33 11 33 5 0 12 -5 16 -11z"/>
                    </g>
                </svg>
            В корзину
            </button>
        </span>
     );
}

export default ChangeColorIcon;