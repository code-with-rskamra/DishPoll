import axios from "axios";
import React, { useEffect, useState } from "react";
import DishCard from "./DishCard";
import classes from "../styles/Dishes.module.scss";
const Dishes = () => {
  const [dishes, setDishes] = useState();
  const url = process.env.REACT_APP_DISHES_API;

  useEffect(() => {
    const getDishes = async () => {
      const response = await axios.get(url);
      setDishes(response.data);
    };
    getDishes();
  }, []);

  return dishes ? (
    <div className={classes.container}>
      {dishes?.map((dish) => {
        return <DishCard key={dish.id} {...dish} />;
      })}
    </div>
  ) : (
    <h1 className={classes.loading}>Loading ... Please wait</h1>
  );
};

export default Dishes;
