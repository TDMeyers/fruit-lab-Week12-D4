import React from 'react'

export default function Index(props) {
  return (
    <div>
        <h1>Index</h1>
        {props.meats.map((meat,i) => <p key={i}>{meat.name}</p>)}
    </div>
  )
}