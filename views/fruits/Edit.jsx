import React from 'react'

export default function Edit({ fruit,index }) {
    let { name,color,readyToEat } = fruit;
  return (
    <div>
        <h1>Edit</h1>
        <form action={`/fruits/${index}?_method=PUT`} method='POST'>

            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name' value={name}></input>

            <label htmlFor="color">Color</label>
            <input type="text" id='color' name='color' value={color}></input>

            <label htmlFor="readyToEat">Ready To Eat:</label>
            <input type="checkbox" id='readyToEat' name='readyToEat' checked={readyToEat}></input>

            <button>Edit</button>
        </form>
        <a href={`/fruits/${index}`}><button>Back to item</button></a>
        <a href={`/fruits/`}><button>Back to list</button></a>
    </div>
  )
}