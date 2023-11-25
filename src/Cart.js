import React from 'react';
import { useCart } from "react-use-cart";
import styles from "./Cart.module.css";

const Cart = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart
  }=useCart();

  if(isEmpty){
     return <div className={styles.cart}> <h1 className="text-center mt-5 text-danger">Your Cart is Empty</h1></div>
  }

  return (
      <section className="py-4 container">
        <div className="row justify-content-center">
          <div className="col-12">
            <h5 className={`${styles.quantity} my-4`}>Cart (<span className={styles.totalItem}>{totalUniqueItems}</span>) total items: (<span className={styles.totalItem}>{totalItems}</span>)</h5>
            <table className="table table-light table-hover m-0">
              <tbody>
              {
                items.map((item)=>{
                 return  (
                    <tr className={`${styles.tableRow}`}>
                      <td>
                        <img className={`${styles.img} ${styles.imgHeight}`} src={item.img} alt="" />
                      </td>
                      <td>{item.title}</td>
                      <td>$ {item.price}</td>
                      <td >Quantity: (<span className={styles.quantity}>{item.quantity}</span>)</td>
                      <td>
                        <button className="btn btn-primary ms-3"
                          onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</button>
                        <button
                            onClick={()=>updateItemQuantity(item.id,item.quantity+1)}
                          className="btn btn-primary ms-3">+</button>
                        <button onClick={()=>removeItem(item.id)}
                            className="btn btn-danger ms-3">Remove</button>
                      </td>

                    </tr>
                 )
                })
              }
              </tbody>
            </table>
          </div>

          <div className="col-auto ms-auto mt-3">
            <h2>Total price: $ {cartTotal}</h2>
          </div>

          <div className="col-auto ms-auto mt-3">
            <button className="btn btn-danger m-2" onClick={()=>emptyCart()}>Clear Cart</button>
          </div>
        </div>
      </section>
  );
};

export default Cart;
