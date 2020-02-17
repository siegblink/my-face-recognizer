import React from 'react'
import styled from 'styled-components'

const RankContainer = styled.section`
  text-align: start;
  width: 1000px;
  margin: 0 auto;
`

const WelcomeText = styled.h1`
  color: gold;
  font-weight: 300;
  margin-bottom: 1.34rem;
`

const SubHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.34rem;
`

const HeaderText = styled.h3`
  color: gold;
  font-weight: 300;
  color: #fff;
`

export default function Rank({ name, entries }) {
  return (
    <RankContainer>
      <WelcomeText>Welcome back, Siegfred</WelcomeText>
      <SubHeader>
        <HeaderText>
          Detect faces in your pictures. Copy and paste the URL of an image in
          the box below.
        </HeaderText>
        <HeaderText>Your entry count is 0</HeaderText>
      </SubHeader>
    </RankContainer>
  )
}
