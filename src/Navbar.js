
import React from 'react'


function Navbar(props) {
   
    return (
        <div className='navbar'>
            
            <div className="cart-icon">
                <img src="https://cdn-icons.flaticon.com/png/128/2838/premium/2838838.png?token=exp=1645967699~hmac=fd04e603bb993c11e43599eec77e1687" alt="cart-icon" />
                <span className="cart-items-count">{props.count}</span>
            </div>
        </div>
    )
}
 
export default Navbar;