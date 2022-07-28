import clsx from "clsx";
import React, { memo } from "react";

interface DragIndicatorProps {
  className?: {
    wrap?: string;
    indicator?: string;
  };
  style?: {
    wrap?: React.CSSProperties;
    indicator?: React.CSSProperties;
  };
}

const DragIndicator = ({
  className = {
    wrap: "",
    indicator: "",
  },
  style = {
    wrap: {},
    indicator: {},
  },
}: DragIndicatorProps) => {
  return (
    <div
      className={clsx("BottomSheet__drag-indicator-wrap", className.wrap)}
      style={style.wrap}
    >
      <div
        className={clsx("BottomSheet__drag-indicator", className.indicator)}
        style={style.indicator}
      />
    </div>
  );
};

export default memo(DragIndicator);
