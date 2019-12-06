import React from 'react'
import { Hexagon } from './hexagon'

export default {
  title: 'Atoms|Hexagon'
}

export const standard = () => {
  return (
    <div style={{ width: '50%', height: '500px' }}>
      <Hexagon width="100%" />
    </div>
  )
}
