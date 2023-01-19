import React,{useContext} from 'react'
import FeedbackContext from '../context/Context'
import FeedbackList from './FeedbackList'

const FeedbackItem = () => {
    const { feedback } = useContext(FeedbackContext)
  return (
    <div className='card-container' >
        {feedback.map((item, id) => {
        return <FeedbackList key={id } item={item} />
        })}
    </div>
  )
}

export default FeedbackItem