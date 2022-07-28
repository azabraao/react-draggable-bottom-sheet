import clsx from "clsx";
import React, { memo } from "react";

interface BackdropProps {
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string;
}

const Backdrop = ({ onClick, style = {}, className = "" }: BackdropProps) => (
  <div
    onClick={onClick}
    data-testid="backdrop"
    className={clsx("BottomSheet__backdrop", className)}
    style={style}
  />
);

export default memo(Backdrop);
