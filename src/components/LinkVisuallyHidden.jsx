const LinkVisuallyHidden = (props) => {
  const { linkId } = props;
  return <span className="sr-only top-[-100px]" id={linkId}></span>;
};

export default LinkVisuallyHidden;
