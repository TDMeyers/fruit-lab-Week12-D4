import React from 'react'

export default function Show(props) {
    console.log(props);
  return (
    <div>
        <h1>Show</h1>
        <p>Name: {props.vegetable.name}</p>
        <p>Color: {props.vegetable.color}</p>
        <p>{props.vegetable.readyToEat ? 'This fruit is ready to eat' : 'This fruit is NOT ready to eat'}</p>
    </div>
  )
}
