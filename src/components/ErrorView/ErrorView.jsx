import errorImage from '../../images/error.jpg';

export default function ErrorView({ message }) {
  return (
    <div>
      <p>{message}</p>
      <img src={errorImage} width="240" alt="sad cat" />
    </div>
  );
}
