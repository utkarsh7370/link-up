import React from 'react';
import './MyButton.css'
const MyButton = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};

export default MyButton;