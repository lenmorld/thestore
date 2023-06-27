import React from 'react'
import Card from '../Card/Card'

import "./FeaturedProducts.scss"

const data = [
    {
        id: 1,
        img: "https://images.pexels.com/photos/3662357/pexels-photo-3662357.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2: "https://images.pexels.com/photos/3399995/pexels-photo-3399995.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Short sleeve black T-shirt",
        isNew: true,
        oldPrice: 19,
        price: 12
    }, 
    {
        id: 2,
        img: "https://images.pexels.com/photos/15336570/pexels-photo-15336570.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2: "https://images.pexels.com/photos/15336574/pexels-photo-15336574.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Long sleeve black T-shirt",
        isNew: true,
        oldPrice: 55,
        price: 25
    }, 
    {
        id: 3,
        img: "https://images.pexels.com/photos/7533330/pexels-photo-7533330.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2: "https://images.pexels.com/photos/7533344/pexels-photo-7533344.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Short sleeve white T-shirt",
        isNew: false,
        oldPrice: 19,
        price: 12
    }, 
    {
        id: 4,
        img: "https://images.pexels.com/photos/6311585/pexels-photo-6311585.jpeg?auto=compress&cs=tinysrgb&w=1600",
        img2: "https://images.pexels.com/photos/6311588/pexels-photo-6311588.jpeg?auto=compress&cs=tinysrgb&w=1600",
        title: "Short sleeve gray T-shirt",
        isNew: false,
        oldPrice: 19,
        price: 12
    }, 
]

const FeaturedProducts = ({type}) => {
    return (
        <div className='featuredProducts'>
            <div className="top">
                <h1>{type} products</h1>
                <p>
                    VHS yuccie hexagon hell of, activated charcoal woke austin green juice. 
                    Kinfolk iceland retro iPhone locavore neutral milk hotel. 
                    Pabst cronut intelligentsia pitchfork bitters subway tile sustainable. 
                    Cloud bread VHS migas fixie, YOLO yes plz copper mug locavore ennui authentic hot chicken. 
                    Kickstarter iPhone keytar lomo.
                </p>
            </div>
            <div className="bottom">
                {data.map(item => (
                    <Card 
                        item={item} 
                        key={item.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default FeaturedProducts