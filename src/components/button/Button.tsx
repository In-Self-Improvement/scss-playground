import React from 'react';
import classnames from 'classnames/bind';
import styles from './Button.module.scss';

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  children: React.ReactNode;
  apple?: boolean;
}

const Button: React.FC<ButtonProps> = (props) => {
  const cn = classnames.bind(styles);
  const { type = 'button', children, apple = false } = props;

  return (
    <div>
      {/* eslint-disable-next-line react/button-has-type */}
      <button type={type} className={cn('button', apple && 'button__apple')}>
        {children}
      </button>
    </div>
  );
};

export default Button;
