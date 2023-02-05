import React from 'react'

export default function Cell(props) {

    const data = props.data;
    console.log(data);
  return (
    <td>{JSON.stringify(data)}</td>
  )
}
