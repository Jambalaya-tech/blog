import React from 'react'
import styled from 'styled-components'

import { Splash } from '../splash/splash'
import { Postcard } from '../postcard/postcard'

const latestPosts = [
  {
    title: 'Some exciting blog post title that is quite long, though not super long',
    excerpt: `I have a 10 year old son. He has words. He is so good with these words it's unbelievable. Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?! You know, it really doesn’t matter what you write as long as you’ve got a young, and beautiful, piece of text.`,
    date: '2020-01-01',
    author: 'Glenn Trump',
    url: '#',
    categories: ['VueJS', 'CSS', 'Webpack']
  },
  {
    title: 'Some exciting blog post title that is quite long, though not super long',
    excerpt: `I have a 10 year old son. He has words. He is so good with these words it's unbelievable. Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?! You know, it really doesn’t matter what you write as long as you’ve got a young, and beautiful, piece of text.`,
    date: '2020-01-01',
    author: 'Glenn Trump',
    url: '#',
    categories: ['VueJS', 'CSS', 'Webpack']
  },
  {
    title: 'Some exciting blog post title that is quite long, though not super long',
    excerpt: `I have a 10 year old son. He has words. He is so good with these words it's unbelievable. Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?! You know, it really doesn’t matter what you write as long as you’ve got a young, and beautiful, piece of text.`,
    date: '2020-01-01',
    author: 'Glenn Trump',
    url: '#',
    categories: ['VueJS', 'CSS', 'Webpack']
  },
  {
    title: 'Some exciting blog post title that is quite long, though not super long',
    excerpt: `I have a 10 year old son. He has words. He is so good with these words it's unbelievable. Look at that text! Would anyone use that? Can you imagine that, the text of your next webpage?! You know, it really doesn’t matter what you write as long as you’ve got a young, and beautiful, piece of text.`,
    date: '2020-01-01',
    author: 'Glenn Trump',
    url: '#',
    categories: ['VueJS', 'CSS', 'Webpack']
  }
]

export const HomeTemplate = () => {
  return (
    <>
      <Splash />
      <Heading>Latest posts</Heading>
      <CardGrid>
        {latestPosts.map(post => <Postcard {...post} />)}
      </CardGrid>
    </>
  )
}

const Heading = styled.h2`
  @import url('https://fonts.googleapis.com/css?family=Kanit:800|Paytone+One|Work+Sans:800&display=swap');

  margin: 5rem 0 2rem 0;
  padding: 0;
  font-family: 'Paytone One', sans-serif;
  font-size: 64px;
  color: tomato;
  text-align: center;
`

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem;
  /* max-width: 1200px; */
`
