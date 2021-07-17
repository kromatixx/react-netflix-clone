import React from 'react'
import { Container, Inner, Item } from './styles/jumbotron'
import { Subtitle } from 'srccomponentsjumbotronstylesjumbotron'

export default Jumbotron = function({ children, direction = 'row', ...restProps }) => {
  return (
    <Item {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  )
}

Jumbotron.Inner = JumbotronInner = ({ children, ...restProps }) => {
  return <Inner {...restProps}>{children}</Inner>
}

Jumbotron.Item = JumbotronItem = ({ children, ...restProps }) => {
  return <Item {...restProps}>{children}</Item>
}
Jumbotron.Container = JumbotronContainer = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>
}
Jumbotron.Title = JumbotronTitle = ({ children, ...restProps }) => {
  return <Title {...restProps}>{children}</Title>
}
Jumbotron.Subtitle = JumbotronSubTitle = ({ children, ...restProps }) => {
  return <SubTitle {...restProps}>{children}</SubTitle>
}
Jumbotron.Image = JumbotronImage = ({ children, ...restProps }) => {
  return <Image {...restProps}>{children}</Image>
}
