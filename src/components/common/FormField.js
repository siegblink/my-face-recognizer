import React from 'react'
import styled from 'styled-components'

const FormFieldComponent = styled.div`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  line-height: 1.43;
  color: #29303b;
  box-sizing: border-box;
  margin-bottom: 8px;
  position: relative;
`

const Label = styled.label`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  font-size: 15px;
  line-height: 1.43;
  color: #29303b;
  box-sizing: border-box;
  display: inline-block;
  max-width: 100%;
  font-weight: 400;
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`

const Input = styled.input`
  -webkit-font-smoothing: antialiased;
  -webkit-tap-highlight-color: transparent;
  box-sizing: border-box;
  font: inherit;
  font-family: inherit;
  margin: 0;
  display: block;
  width: 100%;
  line-height: 1.43;
  background-color: #fff;
  border: 1px solid #8a92a3;
  box-shadow: none;
  transition: border-color ease-in-out 0.08s, box-shadow ease-in-out 0.08s;
  border-radius: 5px;
  color: #29303b;
  font-size: 16px;
  height: auto;
  padding: 11px 45px 12px 14px;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-size: 16px 18px;
  background-position: 98% 50%;
  cursor: auto;
`

export function FormField(props) {
  return (
    <FormFieldComponent>
      <Label>{props.label}</Label>
      <div>
        <Input
          placeholder={props.placeholder}
          name={props.name}
          value={props.value}
          onChange={props.onChange}
        />
      </div>
    </FormFieldComponent>
  )
}
