import React from 'react';

const Button = ({ id, label, icon, variant, type = Button, onClick, disabled}) => {
  return (
    <button
      id={id}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant}`}
    >
      {icon}{label}
    </button>
  );
};

export default Button;
