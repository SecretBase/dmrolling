import React, { Component, PropTypes } from 'react'
import './GachaList.css'

import Gacha from './gachaConfig'
import GachaItem from './GachaItem'

class GachaList extends Component {
  constructor (props) {
    super(props)

    this.state = {
      gacha: Gacha.getGacha(props.gachaType)
    }
  }
  render () {
    return (
      <div className="gacha">
        <ul className="gacha-list">
          {Object.keys(this.state.gacha).map((gachaKey) => {
            return <GachaItem key={gachaKey} {...this.state.gacha[gachaKey]} />
          })}
        </ul>
        <button type="button" className="gacha-button">ガチャ</button>
      </div>
    )
  }
}

GachaList.propTypes = {
  gachaType: PropTypes.string.isRequired
}

export default GachaList
