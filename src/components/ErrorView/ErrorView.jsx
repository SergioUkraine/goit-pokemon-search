import errorImage from '../../images/error.jpg';
import PropTypes from 'prop-types';

function ErrorView({ message }) {
  return (
    <div>
      <p>{message}</p>
      <img src={errorImage} width="240" alt="sad cat" />
    </div>
  );
}

ErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};

export default ErrorView;
