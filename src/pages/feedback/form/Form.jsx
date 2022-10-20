import { useState } from "react";
import Input from '../../../components/input/Input'
import Btn from "../../../components/btn/Btn";
import { addFeedback } from "../../../services/api.service";

function Form({refreshFeedbacks}) {
    const defaultForm = {
        userName: '',
        tel: '',
        message: '', 
    };

    const [formValue, setFormData] = useState(defaultForm);

    const formKeys = {};
    Object.keys(defaultForm).forEach(key => {
        formKeys[key] = key;
    });

    async function onSubmit(e) {
        e.preventDefault()
        const formData = new FormData();
        Object.keys(defaultForm).forEach(key => {
            formData.append(key, formValue[key])
        });
        
       
        try {
            await addFeedback(formData)
            refreshFeedbacks();
        } catch(e) {
            alert(e)
        }

    }
    
    function onChange(e, key) {
        setFormData({
            ...formValue,
            [key]: e.target.value,
        })
    }

    const handleChange = (event, key) => {
        const copy = {...formValue};
        copy[key] = (event.target.value);
        setFormData(copy);
    };

    return ( 
        <form className="flex flex-col" onSubmit={onSubmit}>
            <Input onInput={(e) => onChange(e, formKeys.userName)} onChange={(event) => handleChange(event, 'userName')} textarea={false} type="text" name="userName" value={formValue.name}>Имя</Input>
            <Input onInput={(e) => onChange(e, formKeys.tel)} onChange={(event) => handleChange(event, 'tel')} textarea={false} type="text" name="tel" value={formValue.tel}>Телефон</Input>
            <Input onInput={(e) => onChange(e, formKeys.message)} onChange={(event) => handleChange(event, 'message')} textarea={true} type="text" name="message" value={formValue.message}>Сообщение</Input>
            <Btn type='submit'>Отправить</Btn>
        </form>
     );
}

export default Form;