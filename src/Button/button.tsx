'use client';

import React from 'react';
import { COLOR, SIZE, TYPE, VARIANT } from './button.constant';
import './button.styles.css';
import { IButtonProps } from './button.types';
import clsx from 'clsx';

const Button = (props: IButtonProps) => {
  const {
    id,
    ariaLabel,
    className,
    children,
    disabled,
    endIcon,
    startIcon,
    color = COLOR.Primary,
    size = SIZE.Medium,
    variant = VARIANT.Contained,
    type = TYPE.Button,
    onClick,
  } = props;

  const handleOnClick = () => {
    onClick && onClick();
  };

  return (
    <button
      onClick={handleOnClick}
      type={type}
      aria-label={ariaLabel}
      id={id}
      disabled={disabled}
      className={clsx({
        ['btn']: true,
        ['btn-small']: size === SIZE.Small,
        ['btn-medium']: size === SIZE.Medium,
        ['btn-large']: size === SIZE.Large,
        ['btn-contained']: variant === VARIANT.Contained,
        ['btn-outlined']: variant === VARIANT.Outlined,
        ['btn-text']: variant === VARIANT.Text,
        ['btn-contained-disabled']: disabled && variant === VARIANT.Contained,
        ['btn-outlined-disabled']: disabled && variant === VARIANT.Outlined,
        ['btn-text-disabled']: disabled && variant === VARIANT.Text,
        ['btn-primary']: color === COLOR.Primary,
        ['btn-secondary']: color === COLOR.Secondary,
        [className || '']: !!className,
      })}
    >
      <div className="btn-content">
        {startIcon && <span className="btn-icon">{startIcon}</span>}
        {children}
        {endIcon && <span className="btn-icon">{endIcon}</span>}
      </div>
    </button>
  );
};

Button.displayName = 'Button';

export { Button };
