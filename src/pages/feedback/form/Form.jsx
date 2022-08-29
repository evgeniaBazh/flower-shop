function Form() {
    return ( 
        <form action="">
            <p>Имя</p><input type="text" name="username"/>
            <p>Номер телефона</p><input type="tel" />
            <p>Отзыв</p><textarea name="message" cols="40" rows="6" />
            <button type="submit">Отправить</button>
        </form>
     );
}

export default Form;