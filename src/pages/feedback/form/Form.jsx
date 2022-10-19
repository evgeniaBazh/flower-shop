import { useState } from "react";
import { addFeedback } from "../../../services/api.service";
import Input from '../../../components/input/Input'
import Btn from "../../../components/btn/Btn";

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
        <form className="flex flex-col">
            <Input onChange={(event) => handleChange(event, 'name')} textarea={false} type="text" name="username" value={formData.name}>Имя</Input>
            <Input onChange={(event) => handleChange(event, 'tel')} textarea={false} type="text" name="username" value={formData.tel}>Телефон</Input>
            <Input onChange={(event) => handleChange(event, 'message')} textarea={true} type="text" name="message" value={formData.message}>Сообщение</Input>
            <Btn onClick={() => handleSubmit()}>Отправить</Btn>
        </form>
     );
}

export default Form;