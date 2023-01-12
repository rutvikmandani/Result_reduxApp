import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './InsertResult.css';
import { storeResult } from '../ActionType/ResultAction';
import { Link } from 'react-router-dom';

const InsertResult = () => {

  let results = useSelector((state) => state.ResultReduce.result)
  console.log("result", results)
  let dispatch = useDispatch()
  const [error, setError] = useState('')

  let subject = {
    subject: "",
    total: "50",
    tmarks: 0
  }

  const [s_information, setS_Information] = useState({
    rollNo: "",
    fName: "",
    subjects: [{
      subject: "",
      total: "50",
      tmarks: 0
    }
    ],
    calculation: [{
      total: 0,
      marksTotal: 0,
      percentage: 0,
    }]
  })

  const handlerChange = (event) => {
    console.log("calledinput")
    const { name, value } = event.target;
    setS_Information((oldDetail) => {
      return {
        ...oldDetail,
        [name]: value,
      }
    })
  }

  const changeHandler = (e, index) => {
    const { target: { name, value } } = e;
    (s_information.subjects).map((subject, i) => {
      if (index === i) {
        setS_Information((oldDetail) => {
          return {
            ...oldDetail,
            ...s_information.subjects[index][name] = value
          }
        })
      }
      else {
        return { ...s_information.subjects };
      }
    });
  };

  const storeDetail = () => {
    if (s_information.rollNo === "") {
      setError("Please Enter Your Roll No")
    }
    else if (s_information.fName === "") {
      setError("Please Enter Your Name")
    }
    else if (!(s_information.rollNo === "") && !(s_information.fName === "")) {
      // subjects.map((val, index) => {
      (s_information.subjects).map((val) => {
        // return
        if (val.subject === "") {
          setError("Please Enter All Subjects Name")
        }
        else if (val.total === 0) {
          setError("Please Enter All Subjects Total Value")
        }
        else if (val.tmarks === 0) {
          setError("Please Enter All Subjects Obtain Marks Value")
        }
        else if ((!(val.subject === "") && !(val.total === 0)) && !(val.tmarks === 0)) {
          dispatch(storeResult(s_information))
          const sum = s_information.subjects.map((id) => Number(id.total))
          const marks = s_information.subjects.map((id) => Number(id.tmarks))
          const sumTotal = sum.reduce((tot, item) => tot + item)
          const marksTotals = marks.reduce((tot, item) => tot + item)
          const percentages = (marksTotals / sumTotal) * 100
          const p_fixed = percentages.toFixed(2)
          setS_Information((oldDetail) => {
            return {
              ...oldDetail,
              ...s_information.calculation[0].total = sumTotal,
              ...s_information.calculation[0].marksTotal = marksTotals,
              ...s_information.calculation[0].percentage = p_fixed
            }
          })
          setS_Information({
            rollNo: "",
            fName: "",
            subjects: [{
              subject: "",
              total: 50,
              tmarks: 0,
            }
            ],
            calculation: [{
              total: 0,
              marksTotal: 0,
              percentage: 0,
            }]
          })
          setError("")
        }
      })
    }
  }


  const addLine = () => {
    setS_Information({ ...s_information, subjects: [...s_information.subjects, subject] })
  }

  const onDelete = (id) => {
    return (
      setS_Information({
        ...s_information, subjects: [...s_information.subjects.filter((e, index) => {
          return index !== id;
        })]
      })
    )
  }

  return (
    <>
      <div className="container" >
        <h2 className='heading'>Student Detail</h2>
        <div className='s_detail'>
          <label className="label">Roll No:
            <input type="number"
              name="rollNo"
              value={s_information.rollNo}
              onChange={handlerChange}
              autoComplete="off"
              className="input" /> </label>

          <label className="label">Name:
            <input type="text"
              name="fName"
              value={s_information.fName}
              onChange={handlerChange}
              autoComplete="off"
              className="inputN" /> </label>
        </div>
        <h2 className='heading2' >Fill Subject and Marks</h2>
        <button className="add" onClick={addLine} > Add Subject </button>

        <div className='subject'>
          {
            (s_information.subjects).map((sub, index) =>
              <div className='subject' key={index}>
                <select onChange={(e) => changeHandler(e, index)} name="subject" className='select' value={sub.subject} >
                  {/* <option value="none" selected disabled hidden>Select Subject</option> */}
                  <option value="s_s" hidden>Select Subject</option>
                  <option value="html"  >HTML</option>
                  <option value="css"  >CSS</option>
                  <option value="javascript"    >JAVASCRIPT</option>
                  <option value="react"  >REACT</option>
                  <option value="php"  >PHP</option>
                  <option value="c++"  >C++</option>
                  <option value="dbms"  >DBMS</option>
                  <option value="fluter"  >FLUTER</option>
                </select>

                <label className='s_label'>Total Marks: </label>
                <input type="number" autoComplete="off" min="50" max="50" name="total" value={sub.total}
                  onChange={(e) => changeHandler(e, index)}
                  className="sinput" />

                <label className='s_label'>Obtain Marks: </label>
                <input type="number" autoComplete="off" name="tmarks" value={sub.tmarks}
                  onChange={(e) => changeHandler(e, index)}
                  className="sinput" />

                <button className="erace" onClick={() => onDelete(index)}> - </button>
              </div>
            )
          }
          <button className="submit" onClick={storeDetail}> Result </button>
          <p className="error">{error}</p>
          <hr></hr>
          <br></br>
          <div className='show'>
            <Link to={"/result"}>
              <button className='submit'>Show All Result</button>
            </Link>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
}
export default InsertResult;