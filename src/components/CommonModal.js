import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../styles/CommonModal.scss';

/**
 * Generic bootstrap modal wrapper.
 *
 * Props:
 *   show: boolean - controls visibility
 *   onHide: function - called when modal requests to be hidden
 *   title: string|node - modal header title
 *   children: node - body content
 *   footer: node - optional footer content (by default close button)
 *   size: 'sm'|'lg'|'xl' - modal size
 *   centered: boolean - vertically center modal
 */
function CommonModal({
  show,
  onHide,
  title,
  children,
  footer,
  size = undefined,
  centered = true,
}) {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size={size}
      centered={centered}
      className="common-modal"
      backdropClassName="common-modal-backdrop"
    >
      {title && (
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
      )}
      <Modal.Body>{children}</Modal.Body>
      <Modal.Footer>
        {footer || <Button variant="secondary" onClick={onHide}>Close</Button>}
      </Modal.Footer>
    </Modal>
  );
}

export default CommonModal;
