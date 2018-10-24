import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Media,
  Panel
} from 'react-bootstrap'
const { Left, Body, Heading, Right} = Media

export default class Speech extends Component {
  static propTypes = {  }

  render() {
    const {dataSrc} = this.props
    const {id, subject, introduce, url, isPPT, speaker_name,tags, pre_knowledge } = dataSrc
    return (
      <Media>
        <Body>
          <Heading>{subject}</Heading>
        <p>{introduce}</p>
        <p>{pre_knowledge}</p>
        </Body>
      </Media>
    )
  }
}
