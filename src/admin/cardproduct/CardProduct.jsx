import { useRef } from 'react';
import { useState } from 'react';
import {categories, createProduct, getCategoryName} from '../../services/api.service'

function CreateProduct()  {
    const defaultForm = {
        title: '',
        cost: 0,
        category: categories.mb, 
    };

    const imgRef = useRef(null)

    const [formValue, setFormData] = useState(defaultForm);

    const formKeys = {};
    Object.keys(defaultForm).forEach(key => {
        formKeys[key] = key;
    });

    function onSubmit(e) {
        e.preventDefault()
        const formData = new FormData();
        Object.keys(defaultForm).forEach(key => {
            formData.append(key, formValue[key])
        });
        
        formData.append('img', imgRef.current.files[0])
        createProduct(formData)
    }
    
    function onChange(e, key) {
        setFormData({
            ...formValue,
            [key]: e.target.value,
        })
    }

    return(
        <form className="wrapper" onSubmit={onSubmit}>
            <p>Категория</p>
            <select value={formValue.category} onChange={(e) => onChange(e, formKeys.category)} type='text'>
                {Object.values(categories).map(category => (
                    <option value={category}>{getCategoryName(category)}</option>
                ))}
            </select>
            <p>Название букета</p>
            <input onInput={(e) => onChange(e, formKeys.title)} value={formValue.title} type='text'></input>
            <p>Стоимость букета</p>
            <input onInput={(e) => onChange(e, formKeys.cost)} value={formValue.cost} type='number'></input>
            <p>Картинка</p>
            <input ref={imgRef} type="file" />
            <button type="submit">Отправить</button>
        </form>
    )
}

export default CreateProduct;