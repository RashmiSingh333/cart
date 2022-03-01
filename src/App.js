import React from 'react'
import Cart from './Cart'
import Navbar from './Navbar';
import Footer from './Footer';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


class App extends React.Component{
  constructor() {
      super();
      this.state= {
          products : [] ,
          loading:true
      }
      this.db=firebase.firestore();
  }

  componentDidMount () {
    //console.log('run')
    /*
    firebase
        .firestore()
        .collection('products')
        .get()
        .then((snapshot) => {
          console.log( 'snapshot',snapshot);

          snapshot.docs.map((doc) => {
            console.log('objects->',doc.data());
          });
          const products = snapshot.docs.map((doc) => {
            const data = doc.data();

            data['id'] = doc.id;
            return data;
          })

          this.setState({
            products: products,
            loading: false
          })

        })*/
    this.db
        .collection('products')
        //.where('price','>',999)
        .orderBy('price')
        .onSnapshot((snapshot) => {
          console.log( 'snapshot',snapshot);

          snapshot.docs.map((doc) => {
            console.log('objects->',doc.data());
          });
          const products = snapshot.docs.map((doc) => {
            const data = doc.data();

            data['id'] = doc.id;
            return data;
          })

          this.setState({
            products: products,
            loading: false
          })

        })

  }
  
  handleIncreaseQuantity = (product) => {
      // console.log('Hey please incre the qty of ',product)
      const { products } = this.state;
      const index = products.indexOf(product)
      // products[index].qty +=1;
      // this.setState({
      //   products : products
      // });
       
      const docRef = this.db.collection('products').doc(products[index].id)

      docRef
         .update({
           qty: products[index].qty + 1
         })
         .then(()=>{
           console.log('Updated successfully')
         })
         .catch((error) => {
           console.log('Error : ',error)
         })
  }
  handleDecreaseQuantity = (product) => {
      // console.log('Hey please decre the qty of ',product)
      const { products } = this.state;
      const index = products.indexOf(product);

      //if(products[index].qty > 0){
      //  products[index].qty -=1;
      //    this.setState({
      //         products : products
      //  })
      // }  
      
      if(products[index].qty > 0){

        const docRef = this.db.collection('products').doc(products[index].id)

        docRef
         .update({
           qty: products[index].qty - 1
         })
         .then(()=>{
           console.log('Updated successfully')
         })
         .catch((error) => {
           console.log('Error : ',error)
         })
      }
      
    }


  
  handleDeleteProduct = (id)=>{
    const {products} = this.state;
    
   // const newProducts = products.filter((items) => items.id !== id);
   // this.setState({
   //   products : newProducts
   // })
    
    const docRef = this.db.collection('products').doc(id) ;
    
    docRef
      .delete()
      .then(()=>{
        console.log('Deleted successfully')
      })
      .catch((error) => {
        console.log('Error : ',error)
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
      return ''
    })
    return cartTotal;
  }
   addProduct = ()=> {
     this.db
        .collection('products')
        .add({
          img: '',
          price:9999,
          qty:1,
          title: 'Laptop'
        })
        .then((docRef)=>{
          console.log('Product has been added',docRef)
        })
        .catch((error)=>{
          console.log('Error : ',error)
        })
   }
  render(){
      const {products, loading}=this.state
      return( 
          <div className="App">
              <Navbar count={this.getCartCount()} />
              {loading && <h1>Loading Products...</h1>}
              {/*<button onClick={this.addProduct}>Add a Product</button>*/}
              
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
