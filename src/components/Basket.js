import React from 'react'

export default function Basket({basket}) {
  return (
    <div>
    <div className='mainBasket'>
    <div className='showBasket'>
    <h2>Sepet</h2>
    {
     basket.map(item => (
       <div className='basketList'>
       <img width="100" src={item.img} />
       <p>{item.name} x {item.amount}</p>
       <p> $ {item.price * item.amount}</p>

       </div>
       ))
     }
     </div>
     

     </div>
     </div>
     )
   }