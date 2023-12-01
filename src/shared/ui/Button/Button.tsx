import { classNames } from 'shared/config/lib/classNames/classNames';
import s from './Button.module.scss';
import { ButtonHTMLAttributes, FC } from 'react';

export enum ThemeButton {
  CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, theme, children, ...otherProps } = props;
  return (
    <button className={classNames(s.Button, { [s[theme]]: true }, [className])} {...otherProps}>
      {children}
    </button>
  );
};
