import { useState } from "react";
import { addFeedback } from "../../../services/api.service";

function Form(props) {
    const [formData, setFormData] = useState({
        name: '',
        message: '',
        tel: '',
    })
   
    const handleChange = (event, key) => {
        const copy = {...formData};
        copy[key] = (event.target.value);
        setFormData(copy);
    };

    const handleSubmit = () => {
        addFeedback(formData);
        props.refreshFeedbacks();
    }

    return ( 
        <form action="">
            <p>Имя</p><input onChange={(event) => handleChange(event, 'name')} type="text" name="username" value={formData.name}/>
            <p>Номер телефона</p><input onChange={(event) => handleChange(event, 'tel')} type="tel" value={formData.tel}/>
            <p>Отзыв</p><textarea onChange={(event) => handleChange(event, 'message')} name="message" cols="40" rows="6" value={formData.message}/>
            <button type="button" onClick={() => handleSubmit()}>Отправить</button>
        </form>
     );
}

export default Form;