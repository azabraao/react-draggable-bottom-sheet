import clsx from "clsx";
import { memo } from "react";

interface BackdropProps {
  isActive: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  transitionDuration?: number;
}

const Backdrop = ({ transitionDuration, isActive, onClick }: BackdropProps) => (
  <div
    onClick={onClick}
    data-testid="backdrop"
    className={clsx(
      "bg-black-transparent absolute top-0 right-0 bottom-0 left-0 transition-opacity z-20",
      {
        "duration-1000": transitionDuration === 1000,
        "duration-500": transitionDuration === 500,
        "duration-300": transitionDuration === 300,
        "opacity-0 pointer-events-none": !isActive,
        "opacity-100 pointer-events-auto": isActive,
      }
    )}
  />
);

Backdrop.defaultProps = {
  transitionDuration: 300,
};

export default memo(Backdrop);
