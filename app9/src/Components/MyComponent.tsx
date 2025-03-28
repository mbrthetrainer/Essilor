import React from 'react'
import {log,exportLogsToFile} from './LogService'

const MyComponent:React.FC = () => {
  return (
    <div>
        <button onClick={()=>log('Button is Clicked at MyComponent')}>Click Me</button>
        <button onClick={exportLogsToFile}>Download Log File</button>
    </div>
  )
}

export default MyComponent