import { useRef } from 'react';
import { feedbacks } from '../../services/api.service';
import classes from '../feedback/Feedback.module.scss'
import Form from "./form/Form";

function Feedback() {
    const formRef = useRef();
    const clickHandler = () => {
        formRef.current.scrollIntoView({
            behavior: 'smooth', block:'end'
        })
    }
    return ( 
        <div className="wrapper">
            <h1>Отзывы</h1>
            <div>
                <button onClick={() => clickHandler()}>Оставить отзыв</button>
            </div>
            <div className={classes.container}>
                {feedbacks.map((feedback, index) => {
                    return (
                        <div key={index} className={classes.feedback}>
                            <p>{feedback.name}</p>
                            <p>{feedback.message}</p>
                        </div>
                    )
                })}
            </div>
            <div ref={formRef}>
                <Form  />
            </div>
        </div>
    );
}

export default Feedback;