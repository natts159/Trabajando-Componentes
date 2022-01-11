import React from 'react'

function TableRow({title, length, rating, genres, awards}) {
    return (
        <tr>
            <th scope="row">{title}</th>
            <td>{length}</td>
            <td>{rating}</td>
            <td>
                {
                genres.map((genre, index) => <li key= {genre + index}>{genre}</li>)
                }
            </td>
            <td>{awards}</td>
        </tr>
    )
}

export default TableRow
