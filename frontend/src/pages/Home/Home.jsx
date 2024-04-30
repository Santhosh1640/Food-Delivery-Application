// import React from 'react'
import { useState } from 'react';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu';
import Header from '../../components/Header/Header';
import './Home.css';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Home = () => {

    const [category, setCategory] = useState("All");

  return (
    <div>
      <Header></Header>
      <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
      <FoodDisplay category={category}></FoodDisplay>
    </div>
  )
}

export default Home