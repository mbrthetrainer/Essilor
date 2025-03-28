import {saveAs} from 'file-saver'

const logmessages:string[]=[]

const log=(message:string)=>{
    const timestamp=new Date().toISOString()
    const logEntry=`${timestamp} - ${message}`
    console.log(logEntry)
    logmessages.push(logEntry)
}

const exportLogsToFile=()=>{
  const logData=logmessages.join("\n")
  const blob=new Blob([logData],{type:"text/plain;charset=utf-8"})
  const fileName=`logs-${new Date().toISOString().replace(/:/g,'-')}.txt`
  saveAs(blob,fileName)
}

export {log,exportLogsToFile}