import React from 'react';

const Button = React.memo(({ text, action }) => {
  console.log("Render " + text + " component");
  return (
    <button onClick={action} style={{ margin: "10px" }}>
      {text}
    </button>
  );
});

export default Button;
