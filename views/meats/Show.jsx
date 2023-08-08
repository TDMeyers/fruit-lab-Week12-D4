import React from 'react'

export default function Show(props) {
  return (
    <div>
        <h1>Show</h1>
        <p>Name: {props.meat.name}</p>
        <p>Color: {props.meat.color}</p>
        <p>{props.meat.readyToEat ? 'This fruit is ready to eat' : 'This fruit is NOT ready to eat'}</p>
    </div>
  )
}
