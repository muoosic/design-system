import { type ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
}

export function Button({ children }: ButtonProps): JSX.Element {
  return <button type="button">{children}</button>;
}

Button.displayName = 'Button';
