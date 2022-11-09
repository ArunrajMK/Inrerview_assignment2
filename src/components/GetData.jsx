import axios from 'axios'
import React, { memo, useEffect, useState } from 'react'
import "./getdata.css"
import Title from './Title'
function GetData () {

const [data, setData] = useState([])
const [isLoading, setIsLoading] = useState(false)
const [isError, setIsError] = useState(false)
const [filter, setFilter] = useState("")
const [filter3, setFilter3] = useState("")
const [userId, setUserId] = useState()



    const getData = ()=>{
        setIsLoading(true)
        axios({
            method:"GET",
            url:"https://jsonplaceholder.typicode.com/posts",
            params:{
                q:`${filter}`,
                userId:userId,
              

            }
        })
        .then((res)=>{
         setData(res.data)
        })
        .then((error)=>{
            setIsError(true)
        })





    }



    useEffect(()=>{
       getData()
    },[])



// let datafilter = data.map((item)=>{
//     return item.title.search("quia")
// })
// const filterFun = ()=>{
//     let filter2 = data.filter(item=>{
//         return item.title === setFilter3
//     })

//     setData(filter2)
   
// }



// console.log("data ff",filter2)

// console.log("data cc",datafilter)

  return (
    <div>
     <h1>Filter</h1>
    
    {/* <input placeholder='Search by title' onChange={(e)=>setFilter3(e.target.value)} /> */}
    {/* <button onClick={filterFun}>Submit</button><br/> */}
    <input placeholder='search' onChange={(e)=>setFilter(e.target.value)} />
     
     <select onChange={(e)=>setUserId(e.target.value)} >
     <option value="#">User ID</option>
        <option value="1">1</option>
        <option  value="2">2</option>
        <option  value="3">3</option>
        <option  value="4">4</option>
        <option  value="5">5</option>
        <option  value="6">6</option>
        <option  value="7">7</option>
        <option  value="8">8</option>
        <option  value="9">9</option>
        <option  value="10">10</option>
     </select>
     <button onClick={getData}>Submit</button>
<div id="maincontainer">
        {data.map((item)=>(
        // <div key={item.key} id="container">
        //  <h2>Title: {item.title}</h2>
        //  <h4>Body: {item.body}</h4>
        
        //  </div>
          <Title {...item}/>
        ))}
    </div>
    </div>
  )
}

export default GetData

