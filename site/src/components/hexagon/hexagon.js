import React from 'react'
import styled from 'styled-components'

export const Hexagon = ({ children, width }) => {
  width = typeof width !== 'undefined' ? width : '100%'

  return (
    <Hex width={width}>{children}</Hex>
  )
}

const Hex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => props.width};
  height: calc(${props => props.width} * 0.864);
  max-width: 100%;
  max-height: 100%;
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/9/99/Hexagon.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`

// Read stuff here and be mind blown: http://jtauber.github.io/articles/css-hexagon.html
