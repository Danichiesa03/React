import React from "react";
export default function Click() {
  const handleButtonClick = (event) => {
    console.log(event.target.name);
  };

  const handleImageClick = (event) => {
    event.stop();
    console.log(event.target.src);
  };

  return (
    <div>
      <button name="one" onClick={handleButtonClick}>
        Click Me
      </button>

      <button name="two" onClick={handleButtonClick}>
        <img
          src="https://via.placeholder.com/50"
          alt="Placeholder"
          onClick={handleImageClick}
        />
      </button>
    </div>
  );
}
