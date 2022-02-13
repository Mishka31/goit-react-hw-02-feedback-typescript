import PropTypes from 'prop-types'
import s from './notification.module.css'

interface Props {
  message: string
}

const Notification = ({ message }: Props) => (
  <p className={s.title}>{message}</p>
)

export default Notification

Notification.propTypes = {
  message: PropTypes.string.isRequired,
}
