import React from 'react'
import s from './statistic.module.css'

interface Props {
  Good: number
  Neutral: number
  Bad: number
  Total: number
  Positive: number
}

const Statistic = ({ Good, Neutral, Bad, Total, Positive }: Props) => (
  <div>
    <p className={s.title}>Good: {Good}</p>
    <p className={s.title}>Neutral: {Neutral}</p>
    <p className={s.title}>Bad: {Bad}</p>
    <p className={s.title}>Total: {Total}</p>
    <p className={s.title}>Positive feedback: {Positive}%</p>
  </div>
)

export default Statistic
