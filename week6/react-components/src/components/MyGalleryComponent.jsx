import MyImageComponent from "./MyImageComponent";

//the attributes (key-value pairs) specified here feed back to the child element as "props"
function MyGalleryComponent() {
  return (
    <div className="image-container">
      <MyImageComponent
        imgSource="1.webp"
        altText="2 golden retriever puppies"
      />
      <MyImageComponent
        imgSource="2.jpg"
        altText="a labrador puppy carrying a flower"
      />
      <MyImageComponent
        imgSource="3.jpg"
        altText="a dachsund puppy on a car ride"
      />
      <MyImageComponent imgSource="4.jpg" altText="a fluffy collie puppy" />
      <MyImageComponent imgSource="5.jpg" altText="a tiny spaniel puppy" />
    </div>
  );
}

export default MyGalleryComponent;
