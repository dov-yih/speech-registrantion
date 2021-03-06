import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Row,
  Col,
} from 'react-bootstrap'

import {
  Route,
  Redirect
} from 'react-router-dom'
import {connect} from 'react-redux'

import Sidebar from '@/components/Sidebar'
import routes from '@/routes/admin'

class AdminIndex extends Component {
  static propTypes = {};

  render() {
    const {
      match: { url },
      isLogin,
    } = this.props
    return <Row>
      <Col bsStyle="pills" stacked="true" md={3}>
        <Sidebar prefix={url} />
      </Col>
      {/* @see https://reacttraining.com/react-router/web/example/recursive-paths */}
      <Col md={8} mdOffset={1}>
        {isLogin
          ? routes.map(
            ({ path, exact, component }, idx) => (
              <Route
                key={idx}
                path={url + path}
                exact={exact}
                component={component}
              />
            ))
          : <Redirect to="/login" />
        }
      </Col>
    </Row>
  }
}
export default connect(state => {
  const { user: isLogin } = state
  return { isLogin }
})(AdminIndex)
