import { useEffect, useRef, useState } from 'react';
import Btn from '../../components/btn/Btn';
import { getFeedbacks } from '../../services/api.service';
import classes from '../feedback/Feedback.module.scss'
import Form from "./form/Form";
import Message from './message/Message';

function Feedback() {
    const formRef = useRef();
    const clickHandler = () => {
        formRef.current.scrollIntoView({
            behavior: 'smooth', block:'end'
        })
    }

    const [feedbacks, setFeedbacks] = useState([]);
    const getData = async () => {
        const newFeedbacks = await getFeedbacks();
        setFeedbacks(newFeedbacks);
    }
    useEffect(() => {
        getData();
    }, [])

    return ( 
        <div>
            <div className="wrapper">
                <div className={classes.wrap}>
                    <h1>Отзывы</h1>
                    <div className={classes.wrapBtn}>
                        <Btn onClick={() => clickHandler()}>Оставить отзыв</Btn>
                    </div>
                    <div className={classes.container}>
                        {feedbacks.map((feedback, index) => {
                            return (
                                <Message key={index} feedback={feedback}/>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div ref={formRef} className={classes.wrapForm}>
                <Form refreshFeedbacks={getData} />
            </div>
        </div>
    );
}

export default Feedback;