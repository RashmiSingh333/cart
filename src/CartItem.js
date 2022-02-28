import React from 'react'

class CartItem extends React.Component {
    
    /*
    increaseQuantity = () =>{
        //console.log('this',this.state.qty);
        //setState form 1->
        //this.setState({
        //   qty: this.state.qty + 1;
        //})
        //setState form 2->
         this.setState((prevState)=>{
             return {
                 qty:prevState.qty + 1
             }
         });
    }
    decreaseQuantity = () =>{

        if(this.state.qty > 0){
            this.setState((prevState) => {
                return {
                    qty: prevState.qty - 1
                }
            });
        }
    }*/

    render() {
        const product = this.props.product;
        return (
            <div className="cart-item">
                 {/* { console.log(this.props) } */}
                 <div className="left-block">
                     <img alt="" style={style.image} src={product.img}/>
                 </div>
                 <div className="right-block">
                     <div style={{fontSize:25}}>{product.title}</div>
                     <div style={{color:'#777'}}>Rs {product.price}</div>
                     <div style={{color:'#777'}}>Qty: {product.qty}</div>

                     <div className="cart-item-actions">
                     {/* Buttons */}

                     <img alt="increase"
                          className="action-icons"
                          src="https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1645718974~hmac=849f5241d3acde14400d0deaab813960"
                          onClick={() => {this.props.onIncreaseQuantity(product)}}
                         />
                     <img alt="decrease"
                          className="action-icons"
                          src="https://cdn-icons-png.flaticon.com/512/992/992683.png" 
                          onClick={() => {this.props.onDecreaseQuantity(product)}}
                     />
                     <img alt="delete"
                          className="action-icons"
                          src="https://cdn-icons.flaticon.com/png/512/484/premium/484662.png?token=exp=1646026207~hmac=2d71b3f414bd7967f66f8baab0951825" 
                           onClick={()=>{this.props.DeleteProduct(product.id)}}
                     />
                 </div>
                 </div>
                
            </div>
        )
    }
}
const style={
    image:{
        height:110,
        width:110,
        borderRadius:4,
        background: '#ccc'
    }
}
export default CartItem;