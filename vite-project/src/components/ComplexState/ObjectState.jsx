import React, { useState } from 'react'
import './objectstate.css'
const ObjectState = () => {
    const [product, setProduct] = useState({
        product_brand: 'oTTo',
        product_image: "https://images.meesho.com/images/products/145585895/3ww20_512.webp",
        description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries`,
        price: '$700',
        isFavourite: false
    })

    const handleFavoutites =() => {
        setProduct((prev) => (
            {
                ...prev,
                isFavourite: !prev.isFavourite
            }
        ))
    }
    return (
        <section className='product-card'>
            <div className='product_img_container'>
            <img src={product.product_image}  alt='img_product'/>
            </div>
            <div className='inner_container'>
                <img className="favourites" src={product.isFavourite ? "heart_favourite_enabled111.jpg" : "heart_favourite_disable.png"} alt="heart_enable" width={30} height={30} onClick={handleFavoutites}/>
                <h3>{product.product_brand}</h3>
            </div>
            <p>{product.description}</p>
            <h2>{product.price}</h2>
            <button className='add_to_cart_button'>Add to cart</button>
        </section>
    )
}

export default ObjectState
