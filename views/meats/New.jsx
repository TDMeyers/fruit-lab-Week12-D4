import React from 'react'

export default function New() {
  return (
    <div>
        <h1>New</h1>
        <form action='/meats' method='POST'>

            <label htmlFor="name">Name</label>
            <input type="text" id='name' name='name'></input>

            <label htmlFor="state">State</label>
            <input type="text" id='state' name='state'></input>

            <label htmlFor="readyToEat">Ready To Eat:</label>
            <input type="checkbox" id='readyToEat' name='readyToEat'></input>

            <button>Submit</button>
        </form>
        <a href={`/meats`}><button>Back to list</button></a>
    </div>
  )
}