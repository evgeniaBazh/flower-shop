import classes from '../advantages/Advantages.module.scss'
import flowerOne from '../../../assets/flowerOne.svg'
import truck from '../../../assets/truck.svg'
import florist from '../../../assets/florist.svg'
import face from '../../../assets/face.svg'

function Advantages() {
    const data = [
        {
            text: 'Уникальные букеты',
            selected: 'на любой вкус',
            picture: flowerOne,
        },
        {
            text: 'Бесплатная доставка',
            selected: 'при заказе на сайте',
            picture: truck,
        },
        {
            text: 'Доставим, зная только',
            selected: 'номер получателя',
            picture: face,
        },
        {
            text: '100% свежие цветы',
            selected: 'или заменим букет',
            picture: florist,
        },
    ];

    return ( 
        <div className="wrapper">
            <div className={classes.advantages}>
                {data.map((item, idx) => (
                    <div className={classes.advantages__item} key={idx}>
                        <div className={classes.advantages__info}>
                            <p className={classes.advantages__text}>{item.text}</p>
                            <p className={classes.advantages__selected }>{item.selected}</p>
                        </div>
                        <img className={classes.advantages__picture }  src={item.picture} alt="Декоративное изображение" />
                    </div>
                    ))
                }
            </div>
        </div>
     );
}

export default Advantages;