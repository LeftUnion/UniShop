
export function CartItem({uuid, id, src, name, price}) {

    const handleRemove = (event) => {
        // Шаг 1: Получаем сохраненный массив из localStorage
        const cartJSON = localStorage.getItem('cart');
        let cart = [];

        if (cartJSON) {
            cart = JSON.parse(cartJSON);
        }

        const jsonArray = cart.map((jsonString) => JSON.parse(jsonString));
        const updatedCart = jsonArray.filter(obj => obj.id !== uuid);
        const arr = updatedCart.map((jsonString) => JSON.stringify(jsonString));

        console.log(updatedCart)
        // Шаг 3: Сохраняем обновленный массив в localStorage
        localStorage.setItem('cart', JSON.stringify(arr));

        window.location.reload()
    }

    return (
    <>
        <div id={uuid} className="cartitem" >
            <img alt="Балин"  src={src}/>
            <h3  className="shopitem_name"> {name} </h3>
            <h6 > {price}&#8381;</h6>
            <button onClick={handleRemove}  ></button>
        </div>
    </>
    )
}