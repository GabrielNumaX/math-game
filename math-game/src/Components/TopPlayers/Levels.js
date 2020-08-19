import React from 'react'

const Levels = (props) => {


    return(
        <tr>
            <td>{props.position}</td>
            <td>{props.player}</td>
            <td>{props.points}</td>
            <td>{props.level}</td>
        </tr>
    )
}

export default Levels;