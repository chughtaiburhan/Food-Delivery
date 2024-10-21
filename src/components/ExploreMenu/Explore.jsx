import React from 'react'
import './Explore.css';
import { menu_list } from '../../assets/assets';

function Explore({categories,setCategories}) {
  return (
    <div className='explore-menu' id='explore-menu'>
    <h1>Explore Our Menu</h1>
    <p className='explore-menu-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, placeat adipisci. Quia libero sed, nihil </p>
    <div className="explore-menu-list">
        {menu_list.map((item,index)=>{
            return (
                <div key={index} className="explore-menu-list-item" onClick={()=>setCategories(prev => prev === item.menu_name ? 'All' : item.menu_name)}>
                    <img className={ categories === item.menu_name ? 'active' :''} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
    </div>
    <hr />
    </div>
  )
}

export default Explore
