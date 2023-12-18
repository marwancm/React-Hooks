import React from 'react';

const Age = React.memo(({ age }) => {
  console.log("Render age component");
  return <>{age}</>;
});

export default Age;
