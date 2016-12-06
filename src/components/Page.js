import React, { PropTypes, Component } from 'react'

export default class Page extends Component {
  onCurrencyBtnClick = (e) => {
    this.props.getCurrency(e.target.innerText)
  }

  render() {
    const { currency, fetching } = this.props
    return <div>
      <h2>Selected currency: {currency}</h2>
      <button className='btn' onClick={this.onCurrencyBtnClick}>EUR</button>
      { fetching ? <p>Был произведён запросс, загрузка ...</p> : '' }
    </div>
  }
}

Page.propTypes = {
  currency: PropTypes.string.isRequired,
  value: PropTypes.array.isRequired,
  setCurrency: PropTypes.func.isRequired,
  getCurrency: PropTypes.func.isRequired
}