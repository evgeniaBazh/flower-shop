import { useState } from 'react';
import classes from './Btns.module.scss'
import { colors } from '../Category'

// TODO Вынести иконки в отдельный компонент, отрефакторить этот компонент, назват например ProductActions
function BtnAddProduct(props) {
    const [cartFillAddProduct, setCartFillAddProduct] = useState(colors.white)
    const [onClickCart, setOnClickCart] = useState(false)
    const onClickCartAdd = (event) => {
        event.stopPropagation();
        setOnClickCart(true);
        setCartFillAddProduct(colors.blue)   
    }

    const classBtn = props.className ? `${classes.btnAdd} ${props.className}` : classes.btnAdd;

    return ( 
        <button className={classBtn} onClick={onClickCartAdd} onMouseEnter={() => {setCartFillAddProduct(colors.blue)}} onMouseLeave={() => {setCartFillAddProduct(colors.white)}}>
            {onClickCart === true ? <svg style={{marginRight:'8px', height:'26px'}}  className={classes.decor} xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill={cartFillAddProduct}><rect fill="none" height="24" width="24"/><path d="M22,5.18L10.59,16.6l-4.24-4.24l1.41-1.41l2.83,2.83l10-10L22,5.18z M19.79,10.22C19.92,10.79,20,11.39,20,12 c0,4.42-3.58,8-8,8s-8-3.58-8-8c0-4.42,3.58-8,8-8c1.58,0,3.04,0.46,4.28,1.25l1.44-1.44C16.1,2.67,14.13,2,12,2C6.48,2,2,6.48,2,12 c0,5.52,4.48,10,10,10s10-4.48,10-10c0-1.19-0.22-2.33-0.6-3.39L19.79,10.22z"/></svg> : <svg style={{marginRight:'8px'}}  className={classes.decor} version="1.0" xmlns="http://www.w3.org/2000/svg"
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
        </svg>}
        В корзину
        </button>
     );
}

export default BtnAddProduct;