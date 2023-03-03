import React, { memo } from "react";
import clsx from "clsx";

interface BackdropProps {
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  className?: string;
  isActive: boolean;
}

const Backdrop = ({
  onClick,
  style = {},
  className = "",
  isActive = false,
}: BackdropProps) => (
  <div
    onClick={onClick}
    data-testid="backdrop"
    className={clsx(
      "BottomSheet__backdrop",
      {
        "BottomSheet__backdrop--active": isActive,
      },
      className
    )}
    style={style}
  />
);

export default memo(Backdrop);
