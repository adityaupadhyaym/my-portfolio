import './style.css';

const Typography = (props) => {
  const getClassNames = (tagClass) => {
    return `${tagClass} ${props.className ? props.className : ''}`;
  };

  const getTypography = () => {
    switch (props.type) {
      case 'H1':
        return (
          <h1 className={getClassNames('h1')} style={props.styles}>
            {props.children}
          </h1>
        );

      case 'H2':
        return (
          <h2 className={getClassNames('h2')} style={props.styles}>
            {props.children}
          </h2>
        );

      case 'H3':
        return (
          <h3 className={getClassNames('h3')} style={props.styles}>
            {props.children}
          </h3>
        );

      case 'H4':
        return (
          <h4 className={getClassNames('h4')} style={props.styles}>
            {props.children}
          </h4>
        );

      case 'H5':
        return (
          <h5 className={getClassNames('h5')} style={props.styles}>
            {props.children}
          </h5>
        );

      case 'H6':
        return (
          <h6 className={getClassNames('h6')} style={props.styles}>
            {props.children}
          </h6>
        );

      case 'H7':
        return (
          <p className={getClassNames('h7')} style={props.styles}>
            {props.children}
          </p>
        );

      default:
        return (
          <p className={getClassNames('h7')} style={props.styles}>
            {props.children}
          </p>
        );
    }
  };

  return getTypography();
};

export default Typography;
