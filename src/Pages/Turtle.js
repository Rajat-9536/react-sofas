import React, { useState } from 'react';

const TurtleRace = () => {
  const [position, setPosition] = useState(0);

  const moveTurtle = () => {
    const newPosition = position + Math.floor(Math.random() * 100) + 1;
    setPosition(newPosition);
  };

  return (
    <div>
      <h1>Turtle Race</h1>
      <button onClick={moveTurtle} className="button">Move Turtle</button>
      <div style={{ marginTop: '20px' }}>
        <div
          style={{
            width: '100%',
            height: '50px',
            backgroundColor: 'green',
            position: 'relative',
          }}
        >
          <div
            style={{
              width: '50px',
              height: '50px',
              backgroundColor: 'red',
              position: 'absolute',
              left: `${position}px`,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TurtleRace;
