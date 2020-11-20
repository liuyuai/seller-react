import React from 'react'
import {useParams} from 'react-router-dom'


const OrderDetail = ()=>{
  const {id} =useParams();
  return (
      <div>
        This is id = {id} detail !
      </div>
  )
  
};

export default OrderDetail
