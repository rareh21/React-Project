import React from "react";
import Datefce from "./Datefce"; 
import SimpleDialogDemo from './Dialog';
import 'bootstrap/dist/css/bootstrap.min.css' 
const TaskList = (props) => {

  function createData(payment_description, payment_code_description, currency, base_currency) {
    return { payment_description, payment_code_description, currency, base_currency };
  }
  const rows = [
    createData('ALLOWANCES', 'HOUSING', 'AED', 'AED'),

  ];
  return (
    props.taskList.map((val, idx) => {
      let payment_type = `payment_type-${idx}`, payment_description = `payment_description-${idx}`, payment_code = `payment_code-${idx}`, payment_code_description = `payment_code_description-${idx}`, from_date = `from_date-${idx}`, to_date = `to_date-${idx}`, currency_id = `currency_id-${idx}`, currency = `currency-${idx}`, base_currency = `base_currency-${idx}`, currency_amount = `currency_amount-${idx}`
      return (
        <tr key={val.index}>
          <td colSpan="1" style={{}}>
            <input type="text"  name="payment_type" data-id={idx} id={payment_type}  style={{width:60}} />   
            <SimpleDialogDemo />
          </td>
            {rows.map((row) => (
              <td colSpan="1" data-id={idx} id={payment_type} style={{fontFamily:'Arial', fontSize:15, fontWeight:100}}>
              {row.payment_description}
              </td>
            ))}
          <td colSpan="1">
            <input type="text"  name="payment_code" id={payment_code} data-id={idx}  style={{width:60}} />
            <SimpleDialogDemo />
          </td>
          {rows.map((row) => (
              <td colSpan="1" style={{fontFamily:'Arial', fontSize:15, fontWeight:100}}>
              {row.payment_code_description}
              </td>
            ))}
          <td colSpan="1">
            <Datefce />
          </td>
          <td colSpan="1">
          <Datefce />
          </td>
          <td colSpan="1">
            <input type="text"  name="currency_id" id={currency_id} data-id={idx}  style={{width:60}} />
            <SimpleDialogDemo />
          </td>
          {rows.map((row) => (
              <td colSpan="1" style={{fontFamily:'Arial', fontSize:15, fontWeight:100}}>
              {row.currency}
              </td>
            ))}
          {rows.map((row) => (
              <td colSpan="1" style={{fontFamily:'Arial', fontSize:15, fontWeight:100}}>
              {row.base_currency}
              </td>
            ))}
          <td colSpan="1">
            <input type="text"  name="currency_amount" id={currency_amount  } data-id={idx}  style={{width:100}} />
          </td> 

          <td>
            {
            idx===0?<button onClick={()=>props.add()} type="button" className="btn btn-primary text-center">Add<i className="fa fa-plus" aria-hidden="true"></i></button>
            : <button className="btn btn-danger" onClick={(() => props.delete(val))} ><i className="fa fa-minus" aria-hidden="true">Delete</i></button>
            }
          </td>
        </tr >
      )
    })
  )
}
export default TaskList;