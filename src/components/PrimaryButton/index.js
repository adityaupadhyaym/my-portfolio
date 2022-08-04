import './style.css';

const PrimaryButton = (props) => {
  const getClassNames = () =>
    ` app-primary-button ${
      props.className ? props.className : ''
    }`;

  return (
    <button className={getClassNames()} type='button' onClick={props.onClick}>
      {props.children} 
    </button>
  );
};

export default PrimaryButton;
