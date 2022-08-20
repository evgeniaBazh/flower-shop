import classes from '../input/InputNumber.module.scss'

function InputNumber() {
    return ( 
        <div className={classes.quantity_inner}>        
            <button className={classes.bt_minus}>
                <svg viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>
            <input className={classes.quantity} type="text" value="1" size="2" data-max-count="20" />
            <button className={classes.bt_plus}>
                <svg viewBox="0 0 24 24"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
            </button>
        </div>
     );
}

export default InputNumber;