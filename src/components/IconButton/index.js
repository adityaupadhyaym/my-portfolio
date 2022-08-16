import AppImage from '../AppImage';

import './style.css';

const PrimaryButton = (props) => {
  const getClassNames = () =>
    `app-icon-button ${props.className ? props.className : ''}`;

  return (
    <button className={getClassNames()} type='button' onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default PrimaryButton;
