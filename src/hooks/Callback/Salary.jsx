import React from 'react';

const Salary = React.memo(({ salary }) => {
  console.log("Render salary component");
  return <>{salary}</>;
});

export default Salary;
