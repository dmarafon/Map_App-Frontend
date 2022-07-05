import { useState, useLayoutEffect } from "react";
import { createPortal } from "react-dom";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    SetStateAction?: string;
  }
}

const createWrapperAndAppendToBody = (wrapperId: string) => {
  const wrapperElement = document.createElement("div") as HTMLElement;
  wrapperElement.setAttribute("id", wrapperId) as void;
  wrapperElement.setAttribute("data-testid", "custom-element") as void;
  document.body.appendChild(wrapperElement) as HTMLElement;
  return wrapperElement;
};

const ReactPortal = ({
  children,
  wrapperId = "react-portal-wrapper",
}: {
  children?: any;
  wrapperId?: string;
}) => {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(
    null
  );

  useLayoutEffect(() => {
    let element = document.getElementById(wrapperId) as HTMLElement;
    let systemCreated = false;

    systemCreated = true;
    element = createWrapperAndAppendToBody(wrapperId) as HTMLElement;

    setWrapperElement(element) as void;

    return () => {
      if (systemCreated && element.parentNode) {
        element.parentNode.removeChild(element) as HTMLElement;
      }
    };
  }, [wrapperId]);

  if (wrapperElement === null) return null;

  return createPortal(children, wrapperElement);
};

export default ReactPortal;
