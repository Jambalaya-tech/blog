import React from 'react'
import { HexagonGrid } from './hexagon-grid'
import { Hexagon } from '../hexagon/hexagon'

export default {
  title: 'Molecules|Hexagon grid'
}

export const standard = () => {
  return (
    <div style={{ width: '1000px', margin: '0 auto' }}>
      <HexagonGrid>
        {
          [...Array(4)].map((item, index) => {
            return <Hexagon key={index} width="400px">Hex {index}</Hexagon>
          })
        }
      </HexagonGrid>
    </div>
  )
}