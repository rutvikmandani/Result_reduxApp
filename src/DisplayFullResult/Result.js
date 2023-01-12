import React from "react";

const DisplayResult = (props) => {
    return (
        <>
            {
                <tbody>
                    <tr> <td>{props.subject}</td>
                        <td>{props.total}</td>
                        <td>{props.tmarks}</td></tr>
                </tbody>
            }
        </>
    )
}

export default DisplayResult;