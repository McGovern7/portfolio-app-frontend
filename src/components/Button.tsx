import React, { ReactNode } from 'react';
import { MouseEventHandler } from 'react';


interface ButtonProps {
  id: string;
  label: string;
  icon: ReactNode;
  variant: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}

const Button = ({ id, label, icon, variant, onClick, disabled }: ButtonProps) => {
  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      className={`btn btn-${variant} mb-3`}
    >
      {icon}{label}
    </button>
  );
};

export default Button;
