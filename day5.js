import React from 'react'

export default function Listfunction() {
    var fruits=["apple","orange","grapes","watermelon"]
    var displayfruits=fruits.map((fname)=>{return <li>{fname}</li>})/*outside the function */
    const stuinfo=[{id:1,name:"PINKY"},{id:2,name:"BLUE"},{id:3,name:"RED"},{id:4,name:"PURPLE"}]
  return (
    
    <div>{displayfruits}
    {stuinfo.map((sinfo)=>{return <li key={sinfo.id}>{sinfo.id}  . {sinfo.name}</li>})}
    </div>
  )
}