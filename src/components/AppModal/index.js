
import Modal from 'react-modal';

import './style.css';

const customStyles = {
  content: {
    top: '0',
    left: '70px',
    right: '0',
    bottom: '0',
    borderRadius: '0',
    padding: '0',
    border: 'none',
    zIndex : '1',
  },
};

Modal.setAppElement('#root');
Modal.defaultStyles.overlay.backgroundColor = 'transparent';

const AppModal = (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      onRequestClose={props.onCloseModal}
      style={customStyles}
      contentLabel={props.contentLabel}
      className = "modal"
      overlayClassName= 'overlay'
    >
      {props.children}
    </Modal>
  );
};

export default AppModal;
