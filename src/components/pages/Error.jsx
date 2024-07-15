import React from 'react'
import Errorimg from '../../static/images/errorgif.gif'

const Error = () => {
  return (
    <div>
        <img src={Errorimg} alt='404 error' className='w-50'></img>
    </div>
  )
}

export default Error