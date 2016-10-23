import React, { Component, PropTypes } from 'react'
import './GachaList.css'

import GachaItem from './GachaItem'

class GachaList extends Component {
  constructor (props) {
    super(props)
    this.gacha = this.gacha.bind(this)
    this.onGacha = this.onGacha.bind(this)

    this.startIndex = this.gacha() % 6 + 1
    this.state = {
      gachaIndex: null,
      isGacha: false
    }
  }

  gacha () {
    return parseInt(Math.random() * 100, 10) % 50 + 20
  }

  onGacha (event) {
    event.preventDefault()
    this.setState({
      isGacha: true
    })

    let gachaSteps = this.gacha()

    this.setState({
      gachaIndex: this.startIndex
    }, () => {
      let gachaInterval = window.setInterval(() => {
        if (this.state.gachaIndex === 6) {
          this.setState({
            gachaIndex: 1
          })
        } else {
          this.setState({
            gachaIndex: this.state.gachaIndex + 1
          })
        }
        if (--gachaSteps <= 0) {
          clearInterval(gachaInterval)
          this.setState({
            isGacha: false
          })
        }
      }, 65)
    })
  }

  render () {
    return (
      <div className="gacha">
        <ul className="gacha-list">
          {Object.keys(this.props.gacha).map((gachaKey) => {
            return (
              <GachaItem
                key={gachaKey}
                isActive={this.state.gachaIndex === parseInt(gachaKey, 10)}
                {...this.props.gacha[gachaKey]}
              />
            )
          })}
        </ul>
        <button
          type="button"
          className="gacha-button"
          onClick={this.onGacha}
          disabled={this.state.isGacha}
        >
          ガチャ
        </button>
      </div>
    )
  }
}

GachaList.propTypes = {
  gacha: PropTypes.object.isRequired
}

export default GachaList
