import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import Draggable from "@azabraao/react-draggable";
import clsx from "clsx";
import { useCallbackRef } from "use-callback-ref";

import { lockBodyScroll, unlockBodyScroll } from "./utils";
import Backdrop from "./Backdrop";
import DragIndicator from "./DragIndicator";

interface BottomSheetProps {
  children: React.ReactNode;
  close: VoidFunction;
  isOpen: boolean;
  theme?: {
    dragIndicator: {
      backgroundColor: string;
      width: number;
      height: number;
    };
    backdrop: {
      backgroundColor: string;
    };
    window: {
      backgroundColor: string;
      borderRadius: string;
    };
  };
}

const BottomSheet = ({
  children,
  isOpen,
  close,
  theme = {
    dragIndicator: {
      backgroundColor: "#0F0E17",
      width: 40,
      height: 2,
    },
    backdrop: {
      backgroundColor: "rgba(15, 14, 23, 0.5)",
    },
    window: {
      backgroundColor: "#ffffff",
      borderRadius: "8px 8px 0 0",
    },
  },
}: BottomSheetProps) => {
  const [rect, setRect] = useState<DOMRect>();
  const ref = useCallbackRef(null, (ref: HTMLDivElement | null) => {
    setRect(ref?.getBoundingClientRect());
  });

  useEffect(() => {
    if (isOpen) lockBodyScroll();
    else unlockBodyScroll();
  }, [isOpen]);

  const onDragging = useCallback(() => {
    if (ref?.current) {
      ref.current.style.transition = "none";
    }
  }, [ref]);

  const handleStopDragging = useCallback(
    (_: any, { y }: { y: number }) => {
      if (ref.current) {
        ref.current.style.transition = "transform 0.3s ease-in-out";
        const elementHeight = ref.current?.offsetHeight | 0;
        const elementHeightHalf = elementHeight / 2;
        const shouldClose = y > elementHeightHalf;

        if (shouldClose) close();
      }
    },
    [ref]
  );

  const position = useMemo(() => {
    return {
      x: 0,
      y: isOpen ? 0 : rect?.height || 10000,
    };
  }, [isOpen, rect]);

  return (
    <div
      className={clsx(
        "BottomSheet",
        isOpen ? "BottomSheet--open" : "BottomSheet--closed"
      )}
    >
      <Backdrop
        onClick={close}
        backgroundColor={theme.backdrop.backgroundColor}
      />
      <Draggable
        axis="y"
        bounds={{
          top: 0,
        }}
        position={position}
        defaultClassName={clsx("BottomSheet__draggable")}
        onStop={handleStopDragging}
        onDrag={onDragging}
        nodeRef={ref}
      >
        <div
          ref={ref}
          className="BottomSheet__main"
          style={{
            backgroundColor: theme.window.backgroundColor,
            borderRadius: theme.window.borderRadius,
          }}
        >
          <DragIndicator styles={theme.dragIndicator} />
          <div className="BottomSheet__window">{children}</div>
        </div>
      </Draggable>
    </div>
  );
};

export default memo(BottomSheet);
