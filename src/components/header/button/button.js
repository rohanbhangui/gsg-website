import React from 'react';
import styled, { css } from "styled-components";

import { Link as _Link } from "react-router-dom";

const Button = ({
  linkto,
  onClick,
  classes = "default",
  label
}) => {
  if(linkto) {
    return (
      <Link className={classes} to={linkto}>{label}</Link>
    )
  }

  return (
    <Action className={classes} onClick={onClick}>
      {label}
    </Action>
  )
}

const sharedStyle = css`
  border-radius: 0.2rem;
  padding: 0.75rem 1.25rem;
  display: inline-block;
  font-weight: 600;
  font-size: 0.8rem;
  margin-top: 1.5rem;
  text-decoration: none;

  &:active {
    position: relative;
    top: 0.08rem;
  }

  &.default {
    color: white;
    background: black;
  }
`

const Action = styled.button`
  ${sharedStyle}
`
const Link = styled(_Link)`
  ${sharedStyle}
`

export default Button;