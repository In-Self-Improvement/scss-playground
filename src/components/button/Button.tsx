import React from 'react';
import classnames from 'classnames/bind';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = (props) => {
  const cn = classnames.bind(styles);
  const { children } = props;
  return (
    <div className={cn('button')}>
      <button type='button'>{children}</button>
    </div>
  );
};

export default Button;
