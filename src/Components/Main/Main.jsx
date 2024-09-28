import React,{useEffect} from 'react'
import './main.css'
import { HiOutlineLocationMarker } from "react-icons/hi";
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img4 from '../../Assets/img4.jpg'
import img3 from '../../Assets/img3.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'


import { HiOutlineClipboardCheck } from "react-icons/hi"
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data=[
    {
        id:1,
        imgSrc:img1,
        destTitle:'Bali Island',
        location:'INDONESIA',
        grade:'CULTRAL RELAX',
        fees:'$700',
        description:'Bali is an Indonesian island and one of the best holiday destinations in the Indonesian archipelago.Bali is known for its volcanic moutains, history, art&culture, food, temples and beautiful sandy beaches.'
    },
    {
        id:2,
        imgSrc:img2,
        destTitle:'Great Barrier Reef',
        location:'Australia',
        grade:'CULTRAL RELAX',
        fees:'$500',
        description:'The Great Barrier Reef, located off the coast of Queensland, Australia, is the worlds largest coral reef system and one of the most iconic natural wonders on the planet.The hallmark of this place is lavish and beauty.'
    },
    {
        id:3,
        imgSrc:img4,
        destTitle:'Cappadocia',
        location:'Turkey',
        grade:'CULTRAL RELAX',
        fees:'$800',
        description:'According to the World Tourism Ranking,45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappadocia.This place is known for its luxurious stays and adventurous activities.'
    },
    {
        id:4,
        imgSrc:img3,
        destTitle:'vaadhoo island',
        location:'Maldives',
        grade:'CULTRAL RELAX',
        fees:'₹200000',
        description:'Vaadhoo Island is one of the many beautiful islands in the Maldives, but it stands out due to its extraordinary natural phenomenon known as the "Sea of Stars".'
    },
    {
        id:5,
        imgSrc:img5,
        destTitle:'Guanajuato',
        location:'Mexico',
        grade:'CULTRAL RELAX',
        fees:'$1000',
        description:'Guanajuato is a picturesque colonial city nestled in the mountains of central Mexico, known for its colorful houses, underground tunnels, and rich history as a former silver mining hub. '
    },
    {
        id:6,
        imgSrc:img6,
        destTitle:'Cinque Terre',
        location:'Italy',
        grade:'CULTRAL RELAX',
        fees:'$800',
        description:'Cinque Terre is a stunning coastal area in Italy consisting of five colorful, cliffside villages—Monterosso, Vernazza, Corniglia, Manarola, and Riomaggiore—on the Italian Riviera. Known for its rugged beauty, scenic hiking trails, and crystal-clear waters, it’s a UNESCO World Heritage site. '
    }
     
    

]
const Main = () =>{
    useEffect(()=>{
        Aos.init({duration:2000})
    },[])
    return(

    <section className="main container section">
        <div className="secTitle">
            <h3 data-aos="fade-up" className="title">
                Most Visited destinations
            </h3>

        </div>
        <div className="secContent grid">
            {
                Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
                 return(
                    <div key={id} data-aos="fade-up" className="singleDestination">
                        <div className="imageDiv">
                            <img src={imgSrc} alt={destTitle}/>
                        </div>
                        <div className="cardInfo">
                            <h4 className="destTitle">{destTitle}</h4>
                        <span className="continent flex">
                        <HiOutlineLocationMarker className="icon" />
                        <span className="name">{location}</span>
                        </span>
                        <div className="fees flex">
                            <div className="grade">
                                <span>{grade}<small>+1</small></span>
                        </div>
                        <div className="price">
                        <h5>{fees}</h5>
                        </div>
                       
                        </div>
                        <div className="desc">
                            <p>{description}</p>
                        </div>
                        <button className="btn flex">
                            DETAILS<HiOutlineClipboardCheck className="icon" />
                        </button>
                    </div>
                    </div>
                 )
                })
            }
            
        </div>
    </section>
    )
}
export default Main