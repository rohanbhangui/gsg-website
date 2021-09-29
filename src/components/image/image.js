import { useEffect, useState } from "react";
import styled from "styled-components";

const _Image = ({ src, height }) => {
  const [dimensions, setDimensions] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    const img = new Image();
    img.onload = function () {
      console.log(this.width + "x" + this.height);
      setDimensions({
        height: this.height,
        width: this.width,
      });
    };

    img.src = src;
  }, []);

  return (
    <ImageContainer
      height={height}
      aspectRatio={(dimensions.width / dimensions.height) * 100}
    >
      <img src={src} alt="" />
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

export default _Image;
