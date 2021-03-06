import React, { Component, PropTypes } from 'react'
import classnames from 'classnames'
import './App.css'

import GachaList from './components/GachaList'
import Gacha from './components/GachaList/gachaConfig'

const DOGIRAGON = 'DOGIRAGON'
const DOKINDAMU = 'DOKINDAMU'

class App extends Component {
  constructor (props) {
    super(props)

    this.onGachaTypeChange = this.onGachaTypeChange.bind(this)
    this.state = {
      gachaType: this.props.gachaType
    }
  }

  onGachaTypeChange (gachaType) {
    return (event) => {
      event.preventDefault()
      this.setState({
        gachaType
      })
    }
  }

  render () {
    const dogiragonTypeBtnClasses = classnames('gacha-type__button', {
      'gacha-type__button--active': this.state.gachaType === DOGIRAGON
    })
    const dokindamuTypeBtnClasses = classnames('gacha-type__button', {
      'gacha-type__button--active': this.state.gachaType === DOKINDAMU
    })
    const gacha = Gacha.getGacha(this.state.gachaType)

    return (
      <div className="App">
        <div className="App-header">
          <h1 className="text-center">デュエル・マスターズ</h1>
        </div>
        <div className="gacha-container">
          <button type="button" className={dogiragonTypeBtnClasses} onClick={this.onGachaTypeChange(DOGIRAGON)}>ドギラゴン・ガチャ</button>
          <button type="button" className={dokindamuTypeBtnClasses} onClick={this.onGachaTypeChange(DOKINDAMU)}>ドキンダム・ガチャ</button>
        </div>
        <GachaList gacha={gacha} />
      </div>
    )
  }
}

App.propTypes = {
  gachaType: PropTypes.string
}

App.defaultProps = {
  gachaType: DOGIRAGON
}

export default App
