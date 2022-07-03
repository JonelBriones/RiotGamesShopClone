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
    <div className='container-content'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
    </div>
    </div>
  )
}

export default Apparel