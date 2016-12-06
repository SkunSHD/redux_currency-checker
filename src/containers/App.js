import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Page from '../components/Page'
import * as pageActions from '../actions/PageActions'

class App extends Component {
  render() {
    const { currency, value, fetching } = this.props.page
     const { setCurrency, getCurrency } = this.props.pageActions
    
    return <div>
      <Page value={value} currency={currency} setCurrency={setCurrency} getCurrency={getCurrency} fetching={fetching} />
    </div>
  }
}

function mapStateToProps (state) {
  return {
    page: state.page
  }
}

function mapDispatchToProps(dispatch) {
  return {
    pageActions: bindActionCreators(pageActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)