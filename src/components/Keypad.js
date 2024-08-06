// components/Keypad.js
import React from 'react';

function Keypad() {
  // Event handler function for input change
  const handleChange = () => {
    console.log('Entering password...');
  };

  return (
    <div>
      {/* Input field with type password and event handler */}
      <input 
        type="password" 
        onChange={handleChange} 
      />
    </div>
  );
}

export default Keypad;
