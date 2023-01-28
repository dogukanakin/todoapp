import React from 'react'

function HeaderOperations({ item, color, status, id, handleStatus, remove }) {
    return (
        <>
            <tr>
                <th scope="row">{id}</th>
                <td className={status ? "strike-through" : ""}>{item}</td>
                <td>{status ? "Done" : "Pending"}</td>
                <td><button type="button" className="btn btn-success" onClick={() => handleStatus(id)}>TOGGLE</button></td>
                <td><button type="button" className="btn btn-danger" onClick={() => remove(id)}>Delete</button></td>
            </tr>
        </>
    )
}
export default HeaderOperations
