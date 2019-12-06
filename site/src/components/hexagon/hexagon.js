import React from 'react'
import styled from 'styled-components'

export const Hexagon = ({ width }) => {
  return (
    <Wrapper width={width}>
      <Hex></Hex>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: ${props => props.width};
  height: calc(${props => props.width} * 0.864);
`

const Hex = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(https://upload.wikimedia.org/wikipedia/commons/9/99/Hexagon.svg);
    background-repeat: no-repeat;
    background-size: contain;
  }
`

// Read stuff here and be mind blown: http://jtauber.github.io/articles/css-hexagon.html
