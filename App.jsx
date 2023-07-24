import React from 'react';
// Task 1
const ButtonComponent = ({ label, onClickHandler }) => {
  return (
    <button onClick={onClickHandler}>
      {label}
    </button>
  );
};

// Example usage of the ButtonComponent
const App = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <h1>Task 1 React Functional Component</h1>
      <ButtonComponent label="Click Me" onClickHandler={handleClick} />
    </div>
  );
};

export default App;
