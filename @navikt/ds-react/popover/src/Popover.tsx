import React, {
  forwardRef,
  HTMLAttributes,
  useCallback,
  useEffect,
  useRef,
} from "react";
import { usePopper } from "react-popper";
import mergeRefs from "react-merge-refs";
import cl from "classnames";
import "@navikt/ds-css/popover/index.css";

export interface PopoverProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Element that popover will anchor to
   */
  anchorEl: HTMLElement | null;
  /**
   * Open state for popover
   */
  open: boolean;
  /**
   * Callback for when popover closes
   */
  onClose: () => void;
  /**
   * Content rendered inside popover
   */
  children: React.ReactNode;
  /**
   * Orientation for popover
   * @default 'auto'
   */
  placement?:
    | "auto"
    | "auto-start"
    | "auto-end"
    | "top"
    | "bottom"
    | "right"
    | "left"
    | "top-start"
    | "top-end"
    | "bottom-start"
    | "bottom-end"
    | "right-start"
    | "right-end"
    | "left-start"
    | "left-end";
}

const useEventLister = (event: string, callback) =>
  useEffect(() => {
    document.addEventListener(event, callback);
    return () => {
      document.removeEventListener(event, callback);
    };
  }, [event, callback]);

const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  (
    {
      anchorEl,
      open,
      onClose,
      children,
      placement = "right",
      className,
      ...rest
    },
    ref
  ) => {
    const popoverRef = useRef<HTMLDivElement | null>(null);
    const mergedRef = mergeRefs([popoverRef, ref]);
    const arrowRef = useRef<HTMLDivElement | null>(null);

    const close = useCallback(() => open && onClose(), [open, onClose]);

    useEventLister(
      "click",
      useCallback(
        (e: MouseEvent) =>
          !popoverRef.current?.contains(e.target as Node) && close(),
        [close]
      )
    );

    useEventLister(
      "keydown",
      useCallback((e: KeyboardEvent) => e.key === "Escape" && close(), [close])
    );

    useEventLister(
      "focusin",
      useCallback(
        (e: FocusEvent) => {
          if (
            ![anchorEl, popoverRef.current].some((element) =>
              element?.contains(e.target as Node)
            )
          ) {
            close();
          }
        },
        [anchorEl, close]
      )
    );

    const { styles, attributes, update } = usePopper(
      anchorEl,
      popoverRef.current,
      {
        placement,
        modifiers: [
          {
            name: "arrow",
            options: {
              padding: 8,
              element: arrowRef.current,
            },
          },
          {
            name: "offset",
            options: {
              offset: [0, 16],
            },
          },
        ],
      }
    );

    useEffect(() => {
      open && update && update();
    }, [open, update]);

    return (
      <div
        ref={mergedRef}
        className={cl("navds-popover", className, {
          "popover--hidden": !open || !anchorEl,
        })}
        aria-live="polite"
        aria-hidden={!open || !anchorEl}
        tabIndex={-1}
        {...attributes.popper}
        {...rest}
        style={styles.popper}
      >
        {children}
        <div
          ref={arrowRef}
          style={styles.arrow}
          className="navds-popover__arrow"
        />
      </div>
    );
  }
);

export default Popover;
