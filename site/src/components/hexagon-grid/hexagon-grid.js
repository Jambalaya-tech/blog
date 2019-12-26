import React from 'react'
import styled from 'styled-components'

// Gör om så här? https://codepen.io/ericornelissen/pen/vWbWKv

export const HexagonGrid = ({ children }) => {
  return (
    <HexGrid>
      {children}
    </HexGrid>
  )
}

const HexGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr)); // Note: 0 is needed to shrink the items if needed, check https://stackoverflow.com/a/43312314
  grid-auto-rows: 1fr;
  grid-gap: 10px;
  max-width: 100%;
  height: 100%;

  /* > :nth-child(1) {
    grid-column: 1 / 3;
    grid-row: 1 / 3;
  }

  > :nth-child(2) {
    grid-column: 2 / 5;
    grid-row: 2 / 4;
  }

  > :nth-child(3) {
    grid-column: 4 / 6;
    grid-row: 1 / 3;
  }

  > :nth-child(4) {
    grid-column: 1 / 3;
    grid-row: 3 / 6;
  }

  > :nth-child(5) {
    grid-column: 2 / 5;
    grid-row: 4 / 7;
  }

  > :nth-child(6) {
    grid-column: 4 / 6;
    grid-row: 3 / 6;
  }   */
`
