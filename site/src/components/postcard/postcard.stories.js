import React from 'react'
import { Postcard } from './postcard'

export default {
  title: 'Molecules|Postcard'
}

const cardProps = {
  title: 'Some exciting blog post title that is quite long, though not super long',
  excerpt: `I have a 10 year old son. He has words. He is so good with these words it's unbelievable. Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?! You know, it really doesn’t matter what you write as long as you’ve got a young, and beautiful, piece of text.`,
  date: '2020-01-01',
  author: 'Glenn Trump',
  url: '#',
  categories: ['VueJS', 'CSS', 'Webpack']
}

export const standard = () => {
  return <Postcard {...cardProps} />
}
