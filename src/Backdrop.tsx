import clsx from "clsx";
import { memo } from "react";

interface BackdropProps {
  backgroundColor?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Backdrop = ({ backgroundColor, onClick }: BackdropProps) => (
  <div
    onClick={onClick}
    data-testid="backdrop"
    className={"BottomSheet__backdrop"}
    style={{
      backgroundColor: backgroundColor,
    }}
  />
);

Backdrop.defaultProps = {
  backgroundColor: "",
};

export default memo(Backdrop);
