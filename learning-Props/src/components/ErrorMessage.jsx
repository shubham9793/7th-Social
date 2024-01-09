const ErrorMessage = (props) => {
  return props.items && props.items.length === 0 ? (
    <p>I am still hungry!.</p>
  ) : null;
};

export default ErrorMessage;
