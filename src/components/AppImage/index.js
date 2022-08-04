import './style.css';

const AppImage = (props) => {
  const getClassNames = () =>
    `app-image ${props.className ? props.className : ''}`;

  return <img src={props.src} alt={props.alt} className={getClassNames()} />;
};

export default AppImage;
