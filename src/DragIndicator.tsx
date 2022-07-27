import React, { memo } from "react";

interface DragIndicatorProps {
  styles: {
    backgroundColor: string;
    width: number;
    height: number;
  };
}

const DragIndicator = ({ styles }: DragIndicatorProps) => {
  return (
    <div className="BottomSheet__drag-indicator-wrap">
      <div
        className="BottomSheet__drag-indicator"
        style={{
          backgroundColor: styles.backgroundColor,
          width: styles.width,
          height: styles.height,
        }}
      />
    </div>
  );
};

export default memo(DragIndicator);
