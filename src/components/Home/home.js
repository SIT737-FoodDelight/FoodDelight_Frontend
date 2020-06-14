import React from 'react'
import NavigationBar from '../Navigation/navigation'

export default (props) => {
    return (
      <div>
          <NavigationBar username={props.username} />
      </div>
    )
  }
  