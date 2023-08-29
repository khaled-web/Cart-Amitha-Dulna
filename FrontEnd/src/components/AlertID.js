import React from 'react'
import {UseAppContext} from '../context/appContext'

const AlertID = () => {
  const {alertType, alertText} = UseAppContext()
  return (
    <div className={`alert alert-${alertType}`}>
      {alertText}
    </div>
  )
}

export default AlertID