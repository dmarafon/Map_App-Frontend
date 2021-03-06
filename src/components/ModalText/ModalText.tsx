import { useEffect, useRef } from "react";

import ReactPortal from "../ReactPortalDom/ReactPortal";
import ModalTextStyled from "./ModalTextStyled";

const ModalText = ({
  children,
  handleClose,
  isOpen,
}: {
  children: any;
  handleClose: any;
  isOpen: boolean;
  customFunction: any;
}): JSX.Element => {
  const nodeRef = useRef(null);

  useEffect(() => {
    const closeOnEscapeKey = (event: { key: string }) =>
      event.key === "Escape" ? handleClose() : null;
    document.body.addEventListener("keydown", closeOnEscapeKey);
    return () => {
      document.body.removeEventListener("keydown", closeOnEscapeKey);
    };
  }, [handleClose]);

  const buttonOnClick = async () => {
    handleClose();
  };

  return (
    <ReactPortal
      wrapperId="react-portal-modal-container"
      data-testid="modal-test"
    >
      <ModalTextStyled>
        <div className="modal" ref={nodeRef}>
          <div className="modal-content">
            <div className="modal-button">
              <button
                data-testid="modal-button"
                onClick={buttonOnClick}
                className="modal-button--closed"
              >
                &times;
              </button>
              {children}
            </div>
          </div>
        </div>
      </ModalTextStyled>
    </ReactPortal>
  );
};

export default ModalText;
