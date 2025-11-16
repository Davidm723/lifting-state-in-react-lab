const Ingredient = ({ ingredient, onClick, isAdd }) => {
  return (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      {isAdd ? (
        <button onClick={onClick}>+</button>
      ) : (
        <button onClick={onClick}>X</button>
      )}
    </li>
  );
};

export default Ingredient;
