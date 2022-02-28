import React from 'react'
import Cart from './Cart'
import Navbar from './Navbar';
import Footer from './Footer';


class App extends React.Component{
  constructor() {
      super();
      this.state= {
          products : [
              {
                  title:'Mobile Phone',
                  price:9999,
                  qty:1,
                  img:'https://th.bing.com/th/id/R.edddb95fa11c26b1d0018352b0ae9f88?rik=rdEmhpeunru2ng&riu=http%3a%2f%2fmmoculture.com%2fwp-content%2fuploads%2f2018%2f10%2fRazer-Phone-2-photo-2.jpg&ehk=KhuiR3pIUZTwg4TjhlLmYV%2bsZYtIasppPEs6tMAChY0%3d&risl=&pid=ImgRaw&r=0',
                  id:1
              },
              {
                  title:'Watch',
                  price:999,
                  qty:1,
                  img:'https://retailbd.com/wp-content/uploads/2018/03/relogio-masculino-Watches-Men-LIGE-Sport-Men-s-Mechanical-Watches-Fashion-Business-Automatic-Watch-Man-Waterproof-3-768x768.jpg',
                  id:2
              },
              {
                  title:'Laptop',
                  price:99999,
                  qty:1,
                  img:'https://i.ebayimg.com/00/s/NzY4WDEwMjQ=/z/5UcAAOSwjARchCnt/$_86.JPG',
                  id:3
              }
          ]
      }
  }
  handleIncreaseQuantity = (product) => {
      // console.log('Hey please incre the qty of ',product)
      const { products } = this.state;
      const index = products.indexOf(product)
      products[index].qty +=1;
      this.setState({
          products : products
      });
  }
  handleDecreaseQuantity = (product) => {
      // console.log('Hey please decre the qty of ',product)
      const { products } = this.state;
      const index = products.indexOf(product)
      if(products[index].qty > 0){
          products[index].qty -=1;
          this.setState({
               products : products
       });
      }
  }
  handleDeleteProduct = (id)=>{
    const {products} = this.state;
    const newProducts = products.filter((items) => items.id !== id);
    this.setState({
      products : newProducts
    })
  }

  getCartCount(){
    const { products } = this.state;

    let count=0;

    products.forEach((product)=>{
      count +=product.qty;
    })
    return count ;
  }

  getTotalCartPrice=()=>{
    const {products}=this.state;
     
    let cartTotal=0;

    products.map((product)=>{
      cartTotal= cartTotal + product.qty*product.price;
    })
    return cartTotal;
  }
  render(){
      const {products}=this.state
      return( 
          <div className="App">
              <Navbar count={this.getCartCount()} />
              <Cart  
               products={products}
               onIncreaseQuantity={this.handleIncreaseQuantity}
               onDecreaseQuantity={this.handleDecreaseQuantity}
               DeleteProduct={this.handleDeleteProduct}
               />
              <Footer TotalPrice={this.getTotalCartPrice()} />
          </div>
      );
  }
}


export default App;
