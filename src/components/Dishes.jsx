import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import DishCard from "./DishCard";
import classes from "../styles/Dishes.module.scss";
import { AppContext } from "../context/AppContextProvider";

const Dishes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { loginStatus, selectedDishes, setSelectedDishes, dishes } =
    useContext(AppContext);
  const POLL_URL = process.env.REACT_APP_POLL_API;
  const { handleAlert } = useContext(AppContext);

  useEffect(() => {
    const pollExist = async () => {
      try {
        const response = await axios.get(`${POLL_URL}/${loginStatus?.user}`);
        setSelectedDishes(response?.data?.poll);
      } catch (err) {
        return handleAlert({
          message: "Please Poll",
          status: true,
        });
      }
    };
    pollExist();
  }, []);

  const handleSavePoll = async () => {
    setIsLoading(true);
    const body = {
      id: loginStatus.user,
      poll: selectedDishes,
    };
    try {
      const res = await axios.put(`${POLL_URL}/${loginStatus.user}`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res) {
        handleAlert({
          message: "Poll Updated Successfully",
          status: true,
        });
      }
    } catch (err) {
      console.log("PUT FAILED");
      const res = await axios.post(`${POLL_URL}`, body, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (res) {
        handleAlert({
          message: "Poll Added Successfully",
          status: true,
        });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return dishes ? (
    <>
      <div className={classes.save}>
        <button onClick={handleSavePoll} className={classes.cardbtn}>
          {!isLoading ? `Save` : `Saving ...`}
        </button>
      </div>
      <div className={classes.container}>
        {dishes?.map((dish) => {
          return <DishCard key={dish.id} {...dish} />;
        })}
      </div>
    </>
  ) : (
    <h1 className={classes.loading}>Loading ... Please wait</h1>
  );
};

export default Dishes;
