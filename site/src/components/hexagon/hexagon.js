import React from 'react'
import styled from 'styled-components'

export const Hexagon = ({ children, width }) => {
  width = typeof width !== 'undefined' ? width : '100%'

  return (
    <Hex width={width}>
      {children &&
        <HexContent> {children}</HexContent>
      }
    </Hex >
  )
}

// Basic code from https://www.codesmite.com/article/how-to-create-pure-css-hexagonal-grids

// const Hex = styled.div`
//   position: relative;
//   width: ${props => props.width};
//   max-width: 100%;
//   padding-bottom: calc(${props => props.width} * 1.11); // No clue why 1.11 seems to work. Update: Ok, it does not...
//   transform: rotate(-60deg) skewY(30deg);
//   visibility: hidden;
//   overflow: hidden;

//   &::after {
//     content: " ";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: hotpink;
//     visibility: visible;
//     transform: skewY(-30deg) rotate(60deg);
//   }
// `

const Hex = styled.div`
  position: relative;
  width: ${props => props.width};
  /* height: calc(${props => props.width} * 0.864); */
  padding-bottom: 86.60254%;
  max-width: 100%;
  max-height: 100%;
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/9/99/Hexagon.svg);
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
`

const HexContent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

// Read stuff here and be mind blown: http://jtauber.github.io/articles/css-hexagon.html
