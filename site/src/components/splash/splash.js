import React from 'react'
import styled from 'styled-components'

export const Splash = () => {
  return (
    <Outer>
      <Heading>
        <HeadingNormal>Hello and welcome to </HeadingNormal><HeadingRotate>Jambalaya!</HeadingRotate>
      </Heading>
      <IntroText>
        We are two front end developers based in Gothenburg, Sweden, that write stories about web development, especially front end and the JAM stack.
      </IntroText>
      <SiteHeader>
        <SiteHeaderLink href="#">Posts</SiteHeaderLink>
        <SiteHeaderLink href="#">Categories</SiteHeaderLink>
        <SiteHeaderLink href="#">About Jambalaya</SiteHeaderLink>
      </SiteHeader>
    </Outer>
  )
}

const Outer = styled.header`
  position: relative;
  display: flex;
  min-height: 100vh;
  padding: 4rem;
  /* background: tomato; */
  background: linear-gradient(-15deg, tomato 40%, palegoldenrod);
  color: #fff;
`

const Heading = styled.h1`
  @import url('https://fonts.googleapis.com/css?family=Kanit:800|Paytone+One|Work+Sans:800&display=swap');

  margin: 0;
  font-family: 'Work Sans', sans-serif;
  font-family: 'Kanit', sans-serif;
  font-family: 'Paytone One', sans-serif;
  font-weight: 800;
`

const HeadingNormal = styled.span`
  display: block;
  /* padding-bottom: 15rem; */
  font-size: 2.5rem;
`

const HeadingRotate = styled.span`
  display: block;
  font-size: 12rem;
  letter-spacing: -0.5rem;
  transform: translate(-1rem, 2rem) rotateZ(-15deg);
`

const IntroText = styled.p`
  position: absolute;
  top: 60%;
  left: 30%;
  width: 60%;
  margin: 0%;
  font-family: 'Fira Sans', sans-serif;
  font-family: 'Muli', sans-serif;
  font-weight: 500; /* 200, 500 eller 800? */
  font-size: 2rem;
  letter-spacing: 1px;
`

const SiteHeader = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background: tomato;
`

const SiteHeaderLink = styled.a`
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800,900|Muli:200,300,400,500,600,800,900&display=swap');

  display: block;
  padding: 1rem 1.5rem;
  font-family: 'Muli', sans-serif;
  font-family: 'Fira Sans', sans-serif;
  font-size: 1.25rem;
  letter-spacing: 1.5px;
  color: #fff;
  text-decoration: none;
  border-bottom: 5px;
  border-bottom-style: solid;
  border-bottom-color: transparent;
  transition: all 0.2s;

  &:hover {
    border-bottom-color: #fff;
  }
`