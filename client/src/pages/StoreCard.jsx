import './styles/StoreCard.css'
import { BiChevronLeftCircle } from "react-icons/bi";
import { BiChevronRightCircle } from "react-icons/bi";
import { useState } from 'react'


function StoreCard({prop}){
    const [cantidad, setCantidad ] = useState(0)

    const buttMayor = (e) =>{
        e.preventDefault();
        setCantidad(cantidad + 1)
    }
    const buttMenor = (e) =>{
        e.preventDefault();
        cantidad >0 && setCantidad(cantidad - 1) 
    }
    
    return(

        <div className="card_cont">
            <div>
                <img 
                    height={205} 
                    src={prop.url} 
                    alt={prop.title}
                />
            </div>
            <div className="card__info">
                <div><h2>{prop.title}</h2></div>
                <div><h4>Pricing:{' '+prop.pricing}</h4></div>
            </div>
            <div className="card_bott">
                <button className="btn_green"><b>Buy</b> </button>
                <button className='btn_red'><b>Delete</b> </button>
                <div><button onClick={buttMenor} className ='btn_cont'>< BiChevronLeftCircle/></button>{cantidad}<button onClick={buttMayor} className ='btn_cont'><BiChevronRightCircle/></button></div>
                
            </div>
        </div>
    )
}

export default StoreCard;