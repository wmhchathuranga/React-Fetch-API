import React from 'react'
import Cell from './Cell';

export default function Row(props) {
    const data = props.data;
    return (
        <tr>
            {(Object.entries(data).map(([key, value]) => (
                <Cell key={key} data={value} />
            )))}
        </tr>
    )
}
