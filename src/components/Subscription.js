import React, { useState } from 'react'
import LoadingMask from './LoadingMask'

const Subscription = () => {
  
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState(null)
  const [error, setError] = useState(false)

  const sendSubscribe = (e) => {
    e.preventDefault()

    setLoader(true) 
    setShow(!show)

    fetch("https://api/hotels/subscribe", 
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email })

    })
      .then((response) => response.json())
      .then((data) => {setMessage(data);setLoader(false)})
      
      .catch(function() {
        emailChecker()
        setError(true)
        setLoader(false)
    })

  }

  const emailChecker = () => {
    email === 'a@b.c' && message.hotel === 'Hotel Curabitur suscipit suscipit' ? setError(true) : setError(false)
  }

  const [show, setShow] = useState(false);
  const [loader, setLoader] = useState(false)

  return (
    <div>
      <h1>Request more info about</h1>
      { !show 
     && (
     <form onSubmit={(e) => sendSubscribe(e)}>
       <input 
        type="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
       />

       <button
        type="submit" 
        value="Subscribe"
        disabled={ !(email.includes('@') && email.includes('.'))}
       />
     </form>
      ) 
      }
    
    { loader
      && <LoadingMask />
    }

    { message 
      && <h3>Subscribed</h3>
    }

    { error 
      && <p>Already, subscribed</p> 
    }
    </div>
  )
}

export default Subscription
