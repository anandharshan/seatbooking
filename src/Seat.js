import './Seat.css';
import React from 'react';

export default function Seat ({
  seatPresent, 
  isSeatOccupied, 
  isSeatSelectedByCustomer, 
  rowIndex,
  seatIndex,
  onSeatSelection
}) {

  let classes = 'seat'; 
  if(!seatPresent) { 
    return (
      <div className='seat hidden'>

      </div>
    )
  }

  if(isSeatOccupied) {
    classes += ' occupied';
  } else if(isSeatSelectedByCustomer) {
    classes += ' selected'
  };

  return (
    <div className = {classes} onClick={() => onSeatSelection (rowIndex, seatIndex)}>
      {seatIndex}
    </div>
  )
}