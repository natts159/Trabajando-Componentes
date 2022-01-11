import React from 'react'
import TableRow from './TableRow';

function Table() {

    let data = [
        {
            title:"Alicia en el país de las maravillas",
            length:90,
            rating:4,
            genres:['Aventura', 'Fantasia'],
            awards:3
        },
        {
            title:"Mortal Kombat",
            length:120,
            rating:6,
            genres:['Aventura', 'Ciencia Ficción'],
            awards:3
        }
    ]

    return (
        <div className="container">
            <div className="card shadow mb-4">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Titulo</th>
                        <th scope="col">Duración</th>
                        <th scope="col">Rating</th>
                        <th scope="col">Género</th>
                        <th scope="col">Premios</th>
                    </tr>
                </thead>
                <tbody>
                 {
                     data.map((item, index) => <TableRow key={item + index} {...item} /> )
                 }
                </tbody>

        

            </table>
            </div>
            
        </div>
    )
}

export default Table
