import React from 'react'

export default function Index(props) {
  return (
    <div>
        <h1>Index</h1>
        {props.fruits.map((fruit,i) => <p><a href={`/fruits/${i}`}key={i}>{fruit.name}</a></p>)}
        <a href={`/meats`}><button>Meats</button></a>
        <a href={`/vegetables`}><button>Vegetables</button></a>
        <a href={`/fruits/new`}><button>Add Fruit</button></a>
    </div>
  )
}