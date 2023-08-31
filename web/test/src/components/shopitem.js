export function ShopItem({src, name, price}) {
    return (
        <div className="shopitem">
            <img alt="Балин"  src={src}/>
            <h3 className="shopitem_name"> {name} </h3>
            <h6> {price}&#8381;</h6>
            <button className="buy"></button>
        </div>
    )
}