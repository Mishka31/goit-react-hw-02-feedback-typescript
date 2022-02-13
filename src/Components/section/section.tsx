import PropTypes from 'prop-types'
import s from './section.module.css'

interface Props {
  title: string
  children?: React.ReactChildren | React.ReactNode
}

const Section = ({ title, children }: Props) => {
  return (
    <div className={s.container}>
      <h3 className={s.title}>{title}</h3>
      {children}
    </div>
  )
}

export default Section

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}
