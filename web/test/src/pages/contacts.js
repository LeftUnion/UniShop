
export function Contacts() {
    return (
    <div className="contacts">
        <form>
            <h2>Свяжитесь с нами</h2>
            <input placeholder="Имя" required="" type="text" />
            <input name="Почта для связи" placeholder="Email" type="email" />
            <textarea id="story" name="story" rows="5" cols="33" placeholder="Ваше сообщение"></textarea>
            <button type="button">Заказать</button>
        </form>
    </div>
    )
}