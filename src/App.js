import React from 'react'
import { Header, FeedbackForm, FeedbackItem } from "./components"
import { FeedbackProvider } from './context/Context'


const App = () => {
  return (
    <FeedbackProvider>
      <Header />

      <div className="content-container">
        <FeedbackForm />
        <FeedbackItem />
      </div>
    </FeedbackProvider>
  )
}

export default App