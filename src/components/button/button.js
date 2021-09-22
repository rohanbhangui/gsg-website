import React from 'react';
import styled, { css } from "styled-components";

import { Link as _Link } from "react-router-dom";

const Button = ({
  linkto,
  onClick,
  className = "default",
  label
}) => {
  if(linkto) {
    if(/(http(s?)):\/\//i.test(linkto)) {
      return (
        <ExternalLink className={className} href={linkto}>{label}</ExternalLink>
      )
    }

    return (
      <Link className={className} to={linkto}>{label}</Link>
    )
  }

  return (
    <Action className={className} onClick={onClick}>
      {label}
    </Action>
  )
}

const sharedStyle = css`
  border-radius: 0.3rem;
  padding: 0.8rem 1.5rem;
  display: inline-block;
  font-weight: 600;
  font-size: 1rem;
  margin-top: 1.5rem;
  text-decoration: none;

  @media ${({ theme }) => theme.mediaQuery.medium} {
    font-size: 0.8rem;
    border-radius: 0.2rem;
    padding: 0.6rem 1.25rem;
  }

  &:active {
    position: relative;
    top: 0.08rem;
  }

  &.default {
    color: white;
    background: black;
  }

  &.outline {
    color: black;
    border: 2px solid black;
  }

  &.outline-invert {
    color: white;
    border: 2px solid white;
  }
`

const Action = styled.button`
  ${sharedStyle}
`
const Link = styled(_Link)`
  ${sharedStyle}
`
const ExternalLink = styled.a`
  ${sharedStyle}
`

export default Button;