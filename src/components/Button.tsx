import React, { ReactNode } from 'react';
import { MouseEventHandler } from 'react';

interface ButtonProps {
  id: string;
  label: string;
  icon: ReactNode;
  variant: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
  ariaLabelledBy: string;
}

const Button = ({ id, label, icon, variant, onClick, disabled, ariaLabelledBy }: ButtonProps) => {
  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      aria-labelledby={ariaLabelledBy}
      className={`btn btn-${variant} mb-3`}
    >
      {icon}{label}
    </button>
  );
};

export default Button;
