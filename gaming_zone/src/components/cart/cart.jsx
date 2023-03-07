import { useCallback, useContext, useRef } from "react";
import { CartContext } from "../../context/cart-context";
import useRazorpay from "react-razorpay";

const Cart = ()=> {
    const {cartData} = useContext(CartContext);
    const total = useRef();
    const RazorPay = useRazorpay();
    const razorPayDisplay = useCallback(async (total)=> {
        const options = {
            key: "rzp_test_YAcDZfdeVeqdn7",
            amount: total*60,
            currency: "INR",
            name: "gaming zone",
            description: "Gaming Transaction",
            handler: (res)=> {
                console.log(res);
            },
            prefill: {
                name: "bharath penkey",
                email: "penkybharath@gmail.com",
                contact: "8121510685"
            
            },
            notes: {
                address: "work address"
            },
            theme: {
                color: "#3399cc",
            },
        }
        const rzp1 = new RazorPay(options);
        rzp1.open();
        
    }, [RazorPay])
    
    //total.current.price = 0;
    return (
        <>
            <section>
                <section>
                {cartData.map((cartItem)=> {
                return (
                    <article>
                        <img src={`http://localhost:1337${cartItem?.image?.data?.attributes?.url}`} alt=""/>
                        <article>{cartItem.Title}</article>
                        <article>{cartItem.Price}</article>
                        <button>Remove from cart</button>
                    </article>
                )
            })}
                </section>
                <section>
                <article>Billing Information </article>
                  {cartData.map((cart)=> {
                      //total.current.price = total.current.price + cart.price
                      return <article>
                          <span>{cart.title}</span>
                          <span>{cart.price}</span>
                      </article>
                  })}
                  <article>Total: 3000</article>
                  <button onClick={()=>{razorPayDisplay(6000)}}>Checkout</button>
                </section>
            </section>
           
        </>
    )
}
export default Cart;

// key rzp_test_YAcDZfdeVeqdn7
// secret   vPQOL7bDho60m7x6VFw94boL