import React from 'react'

const BtnContainer = ({jobs,currentItem,SetCurrentItem}) => {
  return (
    <div className='btn-container'>
       {jobs.map((item,index)=>{
        return <button 
        key={item.id} 
        className={index === currentItem?'job-btn active-btn':'job-btn'}
        onClick={()=>SetCurrentItem(index)}
        >
        {item.company}</button>
       })} 
    </div>
  )
}

export default BtnContainer