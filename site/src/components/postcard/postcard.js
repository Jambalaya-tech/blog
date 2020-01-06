import React from 'react'
import styled from 'styled-components'

export const Postcard = ({ title, excerpt, date, author, url, categories }) => {
  return (
    <Card href={url}>
      <Date>{date}</Date>
      <Heading>{title}</Heading>
      <Excerpt>{excerpt}</Excerpt>
    </Card>
  )
}

const Card = styled.a`
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800,900|Muli:200,300,400,500,600,800,900&display=swap');

  display: block;
  padding: 0;
  font-family: 'Fira Sans', sans-serif;
  text-decoration: none;
  color: #111;
`

const Date = styled.h4`
  padding: 0;
  margin: 0;
  font-size: 0.8rem;
  font-weight: 700;
  color: #999;
`

const Heading = styled.h3`
  @import url('https://fonts.googleapis.com/css?family=Kanit:800|Paytone+One|Work+Sans:800&display=swap');

  margin: 0;
  padding-bottom: 0.5rem;
  font-family: 'Paytone One', sans-serif;
  font-size: 24px;
  font-weight: 800;
  line-height: 1.2;
  color: tomato;
`

const Excerpt = styled.p`
  display: block;
  margin: 0;
  padding: 0.5rem 0;
  font-size: 18px;
  font-weight: 400;
  color: #666;
`