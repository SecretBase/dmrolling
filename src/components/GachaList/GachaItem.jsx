import React, { PureComponent, PropTypes } from 'react'
import classnames from 'classnames'

class GachaItem extends PureComponent {
  render () {
    const itemClasses = classnames('gacha-list__item', {
      'gacha-list__item--active': this.props.isActive
    })
    return (
      <li className={itemClasses}>
        <div className="gacha-list__item__title">{this.props.title}</div>
        <div className="gacha-list__item__effect">{this.props.effect}</div>
      </li>
    )
  }
}

GachaItem.propTypes = {
  title: PropTypes.string.isRequired,
  effect: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired
}

export default GachaItem
