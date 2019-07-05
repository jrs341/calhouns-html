import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {enableUniqueIds} from 'react-html-id'

class Searchable extends Component {
  static propTypes = {
    editable: PropTypes.bool,
    value: PropTypes.string,
    action: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    state: PropTypes.object.isRequired,
    style: PropTypes.object,
    onClick: PropTypes.func,
    children: PropTypes.node
  }

  static defaultProps = {
    editable: false,
    value: 'Select Entity',
    action: () => undefined,
    id: '',
    state: {}
  }

  constructor (props) {
    super (props)

    this.state = {
      editable: props.editable,
      expanded: false,
      value: props.value
    }

    enableUniqueIds(this)
  }

  componentDidMount () {
    this.setState({
      id: this.nextUniqueId()
    })
  }

  keyPress (e) {
    const { action, id, state } = this.props
    const str = e.target.innerText + String.fromCharCode(e.which)
    return action(str, id, state)
  }

  show () {
    document.getElementById(this.state.id).focus()
    this.setState({
      expanded: !this.state.expanded
    })
  }

  hide () {
    this.setState({
      expanded: false
    })
  }

  set (text) {
    this.props.onClick (text)
    this.setState({
      value: text
    })
  }

  render () {
    const {children} = this.props
    const cls = this.state.editable
      ? 'ura-select'
      : 'ura-select ura-select--editable'
    const dcls = 'ura-select__dropdown'
    const dropdown = this.state.expanded
      ? `${dcls} ${dcls}--visible`
      : dcls

    return <div className={'ura-select'}
      style={this.props.style }
      onClick={ () => this.show()}
      onBlur={ () => this.hide()}>
      <div className={'ura-select__input'}
        id={this.state.id }
        suppressContentEditableWarning
        contentEditable={this.state.editable }
        onKeyPress={
          e => this.keyPress(e)
        }>
        { this.state.value }
        <div className={ dropdown }
          contentEditable={false}>
          { React.Children.map(children, (child, i) =>
            <span className={'ura-select__option'}
              key={`option_${i}`}
              onClick={
                e => this.set(e.target.innerText)
              }>
              { child }</span>
          )}
        </div>
      </div>
    </div>
  }
}

export default Searchable
