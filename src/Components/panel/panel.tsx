import React, { Component } from 'react'
import s from './panel.module.css'

interface Props {
  onGood: () => void
  onNeutral: () => void
  onBad: () => void
}

class Panel extends Component<Props> {
  render() {
    const { onGood, onNeutral, onBad } = this.props
    return (
      <div className={s.container}>
        <button className={s.button} type="button" onClick={onGood}>
          Good
        </button>
        <button className={s.button} type="button" onClick={onNeutral}>
          Neutral
        </button>
        <button className={s.button} type="button" onClick={onBad}>
          Bad
        </button>
      </div>
    )
  }
}

export default Panel
