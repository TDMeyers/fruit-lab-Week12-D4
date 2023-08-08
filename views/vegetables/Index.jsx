import React from 'react'

export default function Index(props) {
  return (
    <div>
        <h1>Index</h1>
        {props.vegetables.map((vegetable,i) => <p key={i}>{vegetable.name}</p>)}
    </div>
  )
}