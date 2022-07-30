import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './CSS/trial.css';

function wishlistmethod(){
    
}
function addtocartmethod(){
    
}
function Showproducts() {
    const [products,setproducts] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/products')
        .then(res => {
            console.log(res)
            setproducts(res.data)
        })
        .catch(err =>{
            console.log(err)
        })
    })
    
    return(
        <div>
            <ul>
                {
                    products.map(product => 
                        <div style={{display: "inline"}}>
                            <li class="cards__item">
                                <div class="card">
                                    <div class="card__image card__image--flowers" style={{ backgroundImage: `url(${product.image})` }}></div>
                                    <div class="card__content">
                                        <div class="card__title" style={{color:'black'}}>T Shirt for formal Men</div>
                                        <p class="card__text" style={{color:'black'}}>Amount: {product.amount} &#8377;</p>
                                        <button class="btn btn--block card__btn" onClick={wishlistmethod}>Wishlist</button>
                                        <button class="btn btn--block card__btn" onClick={addtocartmethod}>Add To Cart</button>
                                    </div>
                               </div>
                            </li>
                            {/* <li>image link: {product.image} amount:{product.amount}</li> */}
                            {/* <img src= {product.image} /> */}
                        </div>
                        )
                }
            </ul>
        </div>
    );
}
export default Showproducts;
