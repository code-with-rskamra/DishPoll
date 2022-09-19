import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContextProvider";
import classes from "../styles/Dishes.module.scss";

const DishCard = ({ id, dishName, description, image }) => {
  const { selectedDishes, setSelectedDishes } = useContext(AppContext);
  const [vote, setVote] = useState(false);

  const handleSelection = (event) => {
    const { rank, points } = JSON.parse(event.target.value);
    const arr = [...selectedDishes];
    if (selectedDishes.includes(id)) {
      const currentIndex = selectedDishes.indexOf(id);
      arr[currentIndex] = null;
    }
    arr[rank - 1] = id;
    setSelectedDishes(arr);
  };
  return (
    <div className={classes.card}>
      <img src={image} alt={`${dishName}'s picture`} height="50%" />
      <h4 className={classes.card__title}>{dishName}</h4>
      <hr />
      <div className={classes.card__desc}>{description}</div>
      <button className={classes.card__vote} onClick={() => setVote(true)}>
        Vote
      </button>
      <div>
        {vote &&
          [
            { rank: 1, points: 30 },
            { rank: 2, points: 20 },
            { rank: 3, points: 10 },
          ].map((btn) => {
            return (
              <button
                key={btn.rank}
                value={JSON.stringify(btn)}
                onClick={handleSelection}
              >{`Rank at Position ${btn.rank}`}</button>
            );
          })}
      </div>
      {selectedDishes?.includes(id) && (
        <h2 className={classes.ranking}>{`Ranked As ${
          selectedDishes?.indexOf(id) + 1
        }`}</h2>
      )}
    </div>
  );
};

export default DishCard;
