import './Item.css'

interface ItemProps {
    id: number;
    image: string;
    name: string;
    new_price: number;
    old_price: number;
}

function Item({ image, name, new_price, old_price }: ItemProps) {
    return (
        <div className='item'>
            <img src={image} alt="images"/>
            <p>{name}</p>
            <div className="item-price">
                <div className="item-price-new">
                    <p>${new_price}</p>
                </div>
                <div className="item-price-old">
                    ${old_price}
                </div>
            </div>
        </div>
    );
}

export default Item;