import { useEffect, useRef } from "react";

import ReactPortal from "../ReactPortalDom/ReactPortal";
import AddMarkFormStyled from "./AddMarkFormStyled";

const AddMarkForm = ({
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
      <AddMarkFormStyled>
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
      </AddMarkFormStyled>
    </ReactPortal>
  );
};

export default AddMarkForm;
