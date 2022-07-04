import React, {useState} from 'react'
import {useParams,Link} from 'react-router-dom'
const Apparel = () => {
    const {param} = useParams()
    console.log(param)
    // const [category,setCategory] = useState(param)
  return (
    <div className='wrapper'>
        <div  className='links'>
            <div>
                <Link to="/home">Home /</Link>
                <Link to={`/${param}`}> {param}</Link>
            </div>
        </div>
    <div className='container-content apparel'>
        <div className='hero'><h1>Apparel</h1></div>
        <div className='shop-by-category'>
            <div>
            <p>SHOP BY CATEGORY</p>
            </div>
            <div>
            <ul>
                <li>
                    <span>Hats and Beanies</span>
                    <img></img>
                </li>
                <li>
                    <span>Loungewear</span>
                    <img></img>
                </li>
                <li>
                    <span>Hoodes & Jackets</span>
                    <img></img>
                </li>
                <li>
                    <span>Bottoms</span>
                    <img></img>
                </li>
                <li>
                    <span>Tops</span>
                    <img></img>
                </li>
            </ul>
            </div>
        </div>
        <div className='filters'>
            <div><button>Filters</button></div>
            <div>
                <label for="sortby">Sort By</label>
                <select name="sortby">
                <option>Featured</option>
                <option value="highToLow">Price: High To Low</option>
                <option value="lowToHigh">Price: Low To High</option>
                </select></div>
        </div>
        <div className='products'>
            <div className='products-container'>
                <img src="../img/VayneHoodie.webp" style={{
                    height: "300px"
                }}></img>
                <div className='products-info'>
                <span>Spirt Blossom Vayne Crewneck (Unisex)</span>
                <span>$60.00</span>
                </div>
            </div>
        </div>
        <div></div>
        <div></div>
    </div>
    </div>
  )
}

export default Apparel