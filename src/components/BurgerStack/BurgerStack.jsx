// src/components/BurgerStack/BurgerStack.jsx

import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = (props) => {
  return (
    <ul>
      {props.ingredients.length === 0 ? (
        <li>No Ingredients</li>
      ) : (
        props.ingredients.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            isAdd={false}
            onClick={() => props.removeFromStack(index)}
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
