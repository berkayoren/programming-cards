import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ name, options, img }) => {
  const [showImage, setshowImage] = useState(false);
  console.log(showImage);
  return (
    <Container
      style={{ background: "peachpuff" }}
      className="p-4 rounded-2 h-100 lang-card"
      onClick={() => setshowImage(!showImage)}
      type="button"
    >
      {showImage && (
        <Container>
          <Image className="lang-logo" src={img} width="70%"></Image>
          <h3 className="display-6">{name}</h3>
        </Container>
      )}
      {!showImage && (
        <ol className="h-100 d-flex flex-column justify-content-center">
          {options.map((item) => {
            return <li className="h5 text-start"> {item} </li>;
          })}
        </ol>
      )}
    </Container>
  );
};

export default Language;
