import { useState,useEffect} from 'react'
import './Home.css'
import axios from 'axios'

/**
 * A React component that represents the About Us page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */


const AboutUs = props => {
  const [texts,setText] = useState({})
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/About-Us`)
      .then(response => {
        setText(response.data.info)
        setLoading(false)
      })
      .catch(err => {
        setError(err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  return (
    <div>
      <img src={texts.link}></img>
      <div>{texts.text}</div>
    </div>
  )
}

// make this component available to be imported into any other file
export default AboutUs
