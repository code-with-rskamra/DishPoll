import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContextProvider";
import classes from "../styles/PollResult.module.scss";
import { calcDishScore } from "../utils/pollScore";

const PollResult = () => {
  const [sorted, setSorted] = useState([]);
  const { dishes } = useContext(AppContext);
  useEffect(() => {
    const updatePoints = async () => {
      const allDishes = await calcDishScore(dishes);
      setSorted(allDishes);
    };
    updatePoints();
  }, []);

  return (
    <div className={classes.results}>
      <div className={classes.card}>
        <div>S No.</div>
        <div>Picture</div>
        <div>Dish</div>
        <div>Score</div>
        <div>Rank</div>
      </div>

      {sorted?.map((allDishes, index) => {
        const [dishId, score] = allDishes;
        const [{ dishName, image }] = dishes.filter(
          (dish) => dish.id == dishId
        );
        return (
          <div className={classes.card}>
            <div>{`${index + 1}.`}</div>
            <img src={`${image},${dishName}`} alt={`${dishName}'s picture`} />
            <h4 className={classes.card__dishname}>{dishName}</h4>
            <h4 className={classes.card__dishscore}>{`${score || 0}`}</h4>

            {index >= 0 && index <= 2 && score != 0 ? (
              <img src={`./assets/${index + 1}.png`} />
            ) : (
              <img
                src={`https://freepngimg.com/thumb/sad_emoji/36807-4-sad-emoji-clipart.png`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default PollResult;
