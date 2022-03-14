import React from 'react';

// page that will be showed if the route doesn't exist

const NoMatch = () : JSX.Element => {
  const styleDivHome: React.CSSProperties = {
    padding: '30px',
    width: 'auto',
    height: '100%',
    boxShadow: '0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1)',
    margin: '10px 100px 50px 100px',
    textAlign: 'center'
  };

  return (
    <div style={styleDivHome}>
      <h2>No Page Found :(</h2>
    </div>
  );
};

export default NoMatch;
