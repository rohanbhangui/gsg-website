import React from 'react';
import styled from "styled-components";

const Circle = ({
  className,
  color = "#000",
  blend = "normal",
  opacity = 0.5,
  size = 15,
  x = { direction: "left", dimension: "0"},
  y = { direction: "top", dimension: "0"},
}) => {
  return (
    <Container className={className} color={color} blend={blend} opacity={opacity} size={size} x={x} y={y} />
  )
}

const Container = styled.div`
  position: absolute;
  z-index: 0;
  border-radius: 1000rem;
  background: ${({ color }) => color };
  background-blend-mode: ${({ blend }) => blend };
  opacity: ${({ opacity }) => opacity };
  width: ${({ size }) => size }rem;
  height: ${({ size }) => size }rem;
  ${({ x }) => x && `
    ${x.direction}: ${x.dimension};
  ` }
  ${({ y }) => y && `
    ${y.direction}: ${y.dimension};
  ` }
  transform: translateX(-50%) translateY(-50%);
`

export default Circle;