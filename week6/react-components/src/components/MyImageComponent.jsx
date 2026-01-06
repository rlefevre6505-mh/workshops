//props are added in the component as a peramenter, then given arguments when they are handled in a parent

function MyImageComponent(props) {
  return (
    <div className="imgDiv">
      <img src={props.imgSource} alt={props.altText} />
      <p>A photo of {props.altText}</p>
    </div>
  );
}

export default MyImageComponent;
