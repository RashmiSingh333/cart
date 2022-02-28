
const Footer = (props)=> {
    return(
        <div className='footer' style={styles.footer}>
             <div style={styles.TotalPrice}>
                 <span>Total Price :</span>
                 <span>{props.TotalPrice}</span>
             </div>
        </div>
    );
}
const styles={
    footer:{
      display:'flex',
      height:'9vh',
      backgroundColor:'blue',
      justifyContent: 'flex-end'
},
TotalPrice:{
      color:'white',
      fontSize:25,
      marginRight:10
}

}
export default Footer;
