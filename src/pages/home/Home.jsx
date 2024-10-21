import React, { useState } from 'react'
import "./Home.css"
import Header from '../../components/Header/Header'
import Explore from '../../components/ExploreMenu/Explore'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay';
import AppDownload from '../../components/appDownload/AppDownload';
function Home() {
  const [categories,setCategories]=useState("All");
  return (
    <div>
<Header/>
<Explore categories={categories} setCategories={setCategories}/>
<FoodDisplay categories={categories}/>
<AppDownload/>
    </div>
  )
}

export default Home
