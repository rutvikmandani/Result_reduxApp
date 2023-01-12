import React from "react";
import { useSelector } from "react-redux";
import "./DisplayResult.css"
import { Link, useNavigate } from "react-router-dom";

const DisplayResult = () => {
    const resultData = useSelector((state) => state.ResultReduce.result)
    console.log("resultData", resultData)
    const navigate = useNavigate()

    const show = (id) => {
        console.log("id", id)
        navigate(`/fullresult/${id}`)
    }

    
    return (
        <>
            <div className="page">
                <h1> All Student Result </h1>
                <div className="container_result">
                    <table className="resultName">
                        <thead>
                            <tr>
                                <th className="header">Roll No</th>
                                <th className="header">Name</th>
                                <th className="header">Action</th>
                            </tr>
                        </thead>
                        {
                            resultData.map((val, index) => {
                                return (
                                    <>
                                        <tbody key={index}>
                                            <tr>
                                                <td>{val.rollNo}</td>
                                                <td>{val.fName}</td>
                                                <td><button className="showResult" onClick={() => show(index)}> show full Result</button></td>
                                            </tr>
                                        </tbody>
                                        {/* <div className="result">
                                    <p>Roll No:{val.rollNo}</p>
                                    <p>Name: {val.fName}</p>
                                    <button className="showResult"
                                        onClick={() => show(index)}
                                    > show full Result</button>
                                    </div> */}
                                    </>
                                )
                            })
                        }
                    </table>
                    <Link to="/">
                    <button className="back"> Back </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default DisplayResult;