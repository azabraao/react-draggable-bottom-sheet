import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import Draggable from "@azabraao/react-draggable";
import clsx from "clsx";
import { useCallbackRef } from "use-callback-ref";

import { lockBodyScroll, unlockBodyScroll } from "./utils";
import Backdrop from "./Backdrop";
import DragIndicator from "./DragIndicator";
import useIsDesktop from "./hooks/useIsDesktop";

import "./styles.css";

interface BottomSheetProps {
  children: React.ReactNode;
  close: VoidFunction;
  isOpen: boolean;
  modalOnDesktop?: boolean;
  desktopBreakpoint?: number;
  classNames?: {
    bottomSheet?: string;
    backdrop?: string;
    draggable?: string;
    window?: {
      wrap?: string;
      content?: string;
    };
    dragIndicator?: {
      wrap?: string;
      indicator?: string;
    };
  };
  styles?: {
    bottomSheet?: React.CSSProperties;
    backdrop?: React.CSSProperties;
    draggable?: React.CSSProperties;
    window?: {
      wrap?: React.CSSProperties;
      content?: React.CSSProperties;
    };
    dragIndicator?: {
      wrap?: React.CSSProperties;
      indicator?: React.CSSProperties;
    };
  };
}

const BottomSheet = ({
  children,
  isOpen,
  close,
  modalOnDesktop = false,
  desktopBreakpoint = 1024,
  styles = {},
  classNames = {
    bottomSheet: "",
    backdrop: "",
    draggable: "",
    window: {
      wrap: "",
      content: "",
    },
    dragIndicator: {
      wrap: "",
      indicator: "",
    },
  },
}: BottomSheetProps) => {
  const isDesktop = useIsDesktop(desktopBreakpoint);
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
        isOpen ? "BottomSheet--open" : "BottomSheet--closed",
        modalOnDesktop && isDesktop && "BottomSheet--modalOnDesktop",
        classNames.bottomSheet
      )}
      style={styles.bottomSheet}
    >
      <Backdrop
        onClick={close}
        className={classNames.backdrop}
        style={styles.backdrop}
      />
      <Draggable
        axis="y"
        bounds={{
          top: 0,
          ...(isDesktop && modalOnDesktop && { bottom: 0 }),
        }}
        position={position}
        defaultClassName={clsx("BottomSheet__draggable", classNames.draggable)}
        onStop={handleStopDragging}
        onDrag={onDragging}
        nodeRef={ref}
      >
        <div
          ref={ref}
          className={clsx("BottomSheet__window-wrap", classNames.window?.wrap)}
          style={styles.window?.wrap}
        >
          {!modalOnDesktop && !isDesktop && (
            <DragIndicator
              className={classNames?.dragIndicator}
              style={styles.dragIndicator}
            />
          )}
          <div
            className={clsx("BottomSheet__window", classNames.window?.content)}
          >
            {children}
          </div>
        </div>
      </Draggable>
    </div>
  );
};

export default memo(BottomSheet);
