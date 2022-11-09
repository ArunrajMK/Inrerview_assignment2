import React from 'react'
import "./getdata.css"
function Title({key,title,body}) {



  return (
   
      
       
        <div key={key} id="container">
         <h2>Title: {title}</h2>
         <h4>Body: {body}</h4>
         </div>
       
   
    
  )
}

export default Title