import Nerv from 'nervjs'
import omit from 'omit.js'
import classNames from 'classnames'
import './style/index.scss'

class Row extends Nerv.Component {
  constructor () {
    super(...arguments)
  }
  
  componentDidMount () {}

  render () {
    const {
      hoverClass,
      className,
    } = this.props
    const cls = classNames(
      's4s-row',
      {
        [`${hoverClass}`]: this.state.hover
      },
      className
    )
    return (
      <div
        {...omit(this.props, ['className'])}
        className={cls}
      >
        {this.props.children}
      </div>
    )
  }

  renderItems() {
    const { children } = this.props
    const count = children.length

    let warpChildrens = []
    children.forEach((child, index)=> {
      let dom = {
        
      }
    })
  }
}

export default ScrollView
