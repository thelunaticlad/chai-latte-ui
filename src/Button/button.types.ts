import { ButtonHTMLAttributes, DetailedHTMLProps, SVGProps } from "react";
import { COLOR, SIZE, VARIANT } from "./button.constant";

type Size = `${SIZE}`;
type Variant = `${VARIANT}`;
type Color = `${COLOR}`;
type IconType = React.ReactElement<SVGProps<SVGSVGElement>>;

export interface IButton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size: Size;
  className: string;
  disabled: boolean;
  rounded: boolean;
  variant: Variant;
  startIcon: IconType;
  endIcon: IconType;
  withIcon: boolean;
  color: Color;
  id: string;
  onClick: () => void;
}

export interface IButtonProps extends Partial<IButton> {
  ariaLabel: string;
  children: React.ReactNode;
}
