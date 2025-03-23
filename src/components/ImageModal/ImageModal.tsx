import css from './ImageModal.module.css';
import Modal from 'react-modal';
import { CgCloseR } from 'react-icons/cg';

export default function ImageModal({ isOpen, onRequestClose, selectedImg }) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Image Modal"
      className={css.customModalContent}
      overlayClassName={css.overlay}
      appElement={document.getElementById('root')}
    >
      {selectedImg && (
        <>
          <img src={selectedImg.url} alt="Selected" className={css.modalImage} />
          <div className={css.modalInfoBar}>
            <p className={css.modalInfoBarItem}>
              <span className={css.descrName}>Description:</span>
              {selectedImg.description || 'none'}
            </p>
            <p className={css.modalInfoBarItem}>
              <span className={css.descrName}>Likes:</span>
              {selectedImg.likes || 0}
            </p>
            <p className={css.modalInfoBarItem}>
              <span className={css.descrName}>Author:</span>
              {selectedImg.author || 'none'}
            </p>
          </div>
        </>
      )}
      <button className={css.btnClose} onClick={onRequestClose}>
        <CgCloseR className={css.closerIcon} />
      </button>
    </Modal>
  );
}
