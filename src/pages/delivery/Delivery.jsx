import classes from '../delivery/Delivery.module.scss'
import rose from '../../assets/rose-background.jpg'
import Questions from '../../components/expansion-item/questions/Questions';

function Delivery() {
    return ( 
    <div>
        <div className={classes.block}>
            <img className={classes.img} src={rose} alt="Декоративное изображение" />
            <p className={classes.header}>Доставка<b></b>в любой день и в любое время</p>
        </div>
        <div className="wrapper">
            <Questions/>
        </div>
    </div>
    );
}

export default Delivery;