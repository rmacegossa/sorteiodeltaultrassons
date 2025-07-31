import { useState } from 'react'
import Hero from './components/Hero'
import Form from './components/Form'
import ThankYou from './components/ThankYou'
import { Toaster } from 'react-hot-toast'

function App() {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  if (isFormSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Toaster position="top-right" />
        <ThankYou />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Toaster position="top-right" />
      <Hero />
      <Form onSuccess={() => setIsFormSubmitted(true)} />
    </div>
  )
}

export default App 