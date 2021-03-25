import './SeatLayout.css';
import React, {useState} from 'react';
import Seat from './Seat';

function SeatLayout() {

  let seatLayout = [
    [
      { seatPresent : true, isSeatOccupied : false , isSeatSelectedByCustomer : false, info : {Addionalcost : 30}},
      { seatPresent : true, isSeatOccupied : false , isSeatSelectedByCustomer : false, info : {Addionalcost : 0}},
      { seatPresent : true, isSeatOccupied : false , isSeatSelectedByCustomer : false, info : {Addionalcost : 0}},
      { seatPresent : true, isSeatOccupied : false , isSeatSelectedByCustomer : false, info : {Addionalcost : 0}},
      { seatPresent : true, isSeatOccupied : false , isSeatSelectedByCustomer : false, info : {Addionalcost : 0}},
      { seatPresent : true, isSeatOccupied : true , isSeatSelectedByCustomer : false, info : {Addionalcost : 30}},
      { seatPresent : true, isSeatOccupied : false , isSeatSelectedByCustomer : false, info : {Addionalcost : 0}},
    ],
    [
      { seatPresent : false, isSeatOccupied : false , isSeatSelectedByCustomer : false, info : {Addionalcost : 20}},
      { seatPresent : false, isSeatOccupied : false , isSeatSelectedByCustomer : false, info : {Addionalcost : 0}},
      { seatPresent : true, isSeatOccupied : false , isSeatSelectedByCustomer : false, info : {Addionalcost : 0}},
      { seatPresent : true, isSeatOccupied : false , isSeatSelectedByCustomer : false, info : {Addionalcost : 0}},
      { seatPresent : true, isSeatOccupied : false , isSeatSelectedByCustomer : false, info : {Addionalcost : 0}},
      { seatPresent : true, isSeatOccupied : true , isSeatSelectedByCustomer : false, info : {Addionalcost : 0}},
      { seatPresent : true, isSeatOccupied : false , isSeatSelectedByCustomer : false, info : {Addionalcost : 0}},
    ]
  ];

  let [userSelectedSeats, setUserSelectedSeats] = useState([]);

  const [seatLayoutMatrix, setLayoutMatrix] = useState(seatLayout);

  function onSeatSelection (rowIndex, seatIndex) {
    console.log ( "Selected Seat is : " , rowIndex , seatIndex  );
    if (!seatLayoutMatrix[rowIndex][seatIndex]['isSeatOccupied']) {
      setUserSelectedSeats(userSelectedSeats.push(seatLayoutMatrix[rowIndex][seatIndex]));
    } 
  }

  return (
    seatLayoutMatrix.map((row, rowIndex) => { 
      return (
        <div className='row'>
          {
            row.map(({seatPresent, isSeatOccupied, isSeatSelectedByCustomer}, seatIndex) => {
              return (
                <Seat 
                  key = {rowIndex+seatIndex}
                  seatPresent = {seatPresent}
                  isSeatOccupied = {isSeatOccupied}
                  isSeatSelectedByCustomer = {isSeatSelectedByCustomer}
                  rowIndex = { rowIndex }
                  seatIndex = {seatIndex}
                  onSeatSelection={onSeatSelection}
                />
              )
            })
          }
        </div>
      )
    })
  )
};

export default SeatLayout;