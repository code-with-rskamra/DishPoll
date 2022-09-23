import axios from "axios";

export const calcDishScore = async (dishes) => {
  const finalResult = {};
  const allPolls = await axios.get(process.env.REACT_APP_POLL_API);
  dishes.map((dish) => {
    if (finalResult[dish.id] === undefined) {
      finalResult[dish.id] = getScore(allPolls, dish.id);
    } else {
      const current = finalResult[dish.id];
      finalResult[dish.id] = current + getScore(allPolls, dish.id);
    }
  });
  const updatedResult = Object.entries(finalResult).sort(
    ([, a], [, b]) => b - a
  );
  return updatedResult;
};

const getScore = (polls, dishId) => {
  let sum = 0;
  polls.data.map((user) => {
    if (user?.poll.includes(dishId)) {
      console.log("__", score(user.poll.indexOf(dishId)));
      sum += score(user.poll.indexOf(dishId));
    }
  });
  return sum;
};

const score = (index) => {
  if (index == 0) {
    return 30;
  } else if (index == 1) {
    return 20;
  } else {
    return 10;
  }
};
