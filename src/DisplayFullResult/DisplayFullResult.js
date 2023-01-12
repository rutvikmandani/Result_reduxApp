import React from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import "./DisplayFullResult.css"

const DisplayFullResult = () => {
    const resultId = useParams()
    const resultFullData = useSelector((state) => state.ResultReduce.result[resultId.id])

    return (
        <>
            <div className="student_result">
                <h1 className="heading">Student Result</h1>
                {Object.keys(resultFullData).length === 0 ? null :
                    <div>
                        <h3>Roll No : {resultFullData.rollNo}</h3>
                        <h3>Name : {resultFullData.fName}</h3>
                    </div>
                }

                <table className="table" style={{ border: "1px splid red" }}>
                    <thead>
                        <tr>
                            <th>Subject</th>
                            <th>Total Marks</th>
                            <th>Obtain Marks</th>
                        </tr>
                    </thead>

                    {(resultFullData.subjects).map((el, index) =>
                        <tbody key={index}>
                            <tr>
                                <td>{el.subject}</td>
                                <td>{el.total}</td>
                                <td>{el.tmarks}</td>
                            </tr>
                        </tbody>
                    )}
                </table>
                <p>{
                    (resultFullData.calculation).map((element, index) =>
                        <div key={index}>
                            <h3>Total Marks : {element.total}</h3>
                            <h3>Obtain Marks : {element.marksTotal}</h3>
                            <h3>Percentage : {element.percentage}</h3>
                        </div>
                    )} </p>
                <Link to="/result">
                    <button className="back"> Back </button>
                </Link>
            </div>

        </>
    )
}

export default DisplayFullResult;