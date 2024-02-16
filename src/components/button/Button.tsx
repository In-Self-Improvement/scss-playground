import React from 'react';
import classnames from 'classnames/bind';
import styles from './Button.module.scss';

interface ButtonProps {
  type?: 'submit' | 'reset' | 'button';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const cn = classnames.bind(styles);
  const { type = 'button', children } = props;

  return (
    <div className={cn('button')}>
      {/* eslint-disable-next-line react/button-has-type */}
      <button type={type}>{children}</button>
    </div>
  );
};

export default Button;
