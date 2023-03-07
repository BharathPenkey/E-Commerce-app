import { useContext } from "react";
import { CartContext } from "../../context/cart-context";
import "./item.css"

const Item = ({item})=> {
    const {addCartData} = useContext(CartContext);
    return (
        <>
            <section className="card">
                <img className="card-image" src={`http://localhost:1337${item?.image?.data?.attributes?.url}`} alt="game"/>
                <article className="card-title">{item.Title}</article>
                <article className="card-description">{item.Description}</article>
                <section className="card-footer">
                    <article className="price">{item.Price}</article>
                    <button className="cart-button" onClick={()=> {addCartData(item)}}>Add to Cart</button>
                </section>
            </section>
        </>
    )
}
export default Item;