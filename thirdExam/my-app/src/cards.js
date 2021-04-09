import React, { Component } from 'react'
import Card from './card'
import './cards.css'

export default class Cards extends Component {
  constructor(){
    super()
    this.state = {
      colors:['red','green','black','blue'],
      focus:''
    }
  }
  setFocused = (color) => {
    this.setState((state) => {
      state.focus = color
      return state
    })
  }
  render() {
    return (
      <div className="Cards">
        {this.state.colors.map((color) => <Card setFocused = {this.setFocused} focus = {this.state.focus} color={color}/>) }
      </div>
    )
  }
}
