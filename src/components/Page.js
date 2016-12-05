import React, { PropTypes, Component } from 'react'

export default class Page extends Component {
  onCurrencyBtnClick = (e) => {
    this.props.setCurrency(e.target.innerText)
  }

  render() {
    const { currency } = this.props
    return <div>
      <h2>Selected currency: {currency}</h2>
      <div className='dropdown'>
        <button className='dropbtn' onClick={this.onCurrencyBtnClick}>EUR</button>
      </div>
    </div>
  }
}

Page.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired,
  setCurrency: PropTypes.func.isRequired
}