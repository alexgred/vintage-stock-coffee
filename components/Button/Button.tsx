import { HTMLAttributes, ReactNode } from 'react';

type ButtonType = 'button' | 'submit' | 'reset';

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: Readonly<ReactNode>;
  type?: ButtonType;
  name?: string;
}

export default function Button({
  children,
  type = 'button',
  name = '',
  ...props
}: ButtonProps) {
  return (
    <button type={type} name={name} {...props}>
      {children}
    </button>
  );
}
