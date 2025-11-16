// src/components/IngredientList/IngredientList.jsx
import Ingredient from "../Ingredient/Ingredient";

const IngredientList = (props) => {
  return (
    <ul>
      {props.ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          isAdd={true}
          onClick={() => props.addToStack(ingredient)}
        />
      ))}
    </ul>
  );
};

export default IngredientList;
