import React, { PureComponent, PropTypes } from 'react'

class GachaItem extends PureComponent {
  render () {
    return (
      <li className="gacha-list__item">
        <div className="gacha-list__item__title">{this.props.title}</div>
        <div className="gacha-list__item__effect">{this.props.effect}</div>
      </li>
    )
  }
}

GachaItem.propTypes = {
  title: PropTypes.string.isRequired,
  effect: PropTypes.string.isRequired
}

export default GachaItem
