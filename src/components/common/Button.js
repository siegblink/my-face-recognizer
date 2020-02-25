import React from 'react'
import styled from 'styled-components'

const ButtonComponent = styled.a`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  line-height: 1.43;
  box-sizing: border-box;
  text-decoration: none;
  box-shadow: 0 2px 2px 0 rgba(41, 48, 59, 0.24),
    0 0 2px 0 rgba(41, 48, 59, 0.12);
  color: #b3d9fc;
  border-radius: 2px;
  font-size: 16px;
  font-weight: 600;
  height: 48px;
  margin-bottom: 8px;
  ${props => props.google && `margin-bottom: 40px;`}
  padding: 0;
  background-color: #1a538a;
  ${props => props.google && `background-color: #fff; color: #29303b;`}
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`

const LogoWrapper = styled.span`
  -webkit-tap-highlight-color: transparent;
  color: #fff;
  box-sizing: border-box;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  vertical-align: -8%;
  display: inline-block;
  font-size: 20px;
  padding: 16px 0;
  text-align: center;
  width: 48px;
`

export function Button(props) {
  return (
    <div>
      <ButtonComponent google={props.google}>
        <LogoWrapper>{props.children}</LogoWrapper>
        {props.text}
      </ButtonComponent>
    </div>
  )
}
