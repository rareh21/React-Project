import React from "react";
import Datefce from "./Datefce"; 
import 'bootstrap/dist/css/bootstrap.min.css' 
const TaskList = (props) => {
  return (
    props.taskList.map((val, idx) => {
      let payment_type = `payment_type-${idx}`, payment_description = `payment_description-${idx}`, payment_code = `payment_code-${idx}`, payment_code_description = `payment_code_description-${idx}`, from_date = `from_date-${idx}`, to_date = `to_date-${idx}`, currency_id = `currency_id-${idx}`, currency = `currency-${idx}`, base_currency = `base_currency-${idx}`, currency_amount = `currency_amount-${idx}`
      return (
        <tr key={val.index}>
          <td>
            <input type="text"  name="payment_type" data-id={idx} id={payment_type} className="form-control " />
          </td>
          <td>
            <input type="text"  name="payment_description" id={payment_description} data-id={idx} className="form-control " />
          </td>
          <td>
            <input type="text"  name="payment_code" id={payment_code} data-id={idx} className="form-control " />
          </td>
          <td>
            <input type="text"  name="payment_code_description" id={payment_code_description} data-id={idx} className="form-control " />
          </td>
          <td>
            <Datefce >
            <input type="text"  name="from_date" id={from_date} data-id={idx} className="form-control " />
            </Datefce>
          </td>
          <td>
            <Datefce>
            <input type="text"  name="to_date" id={to_date} data-id={idx} className="form-control " />
            </Datefce>
          </td>
          <td>
            <input type="text"  name="currency_id" id={currency_id} data-id={idx} className="form-control " />
          </td>
          <td>
            <input type="text"  name="currency" id={currency} data-id={idx} className="form-control " />
          </td>
          <td>
            <input type="text"  name="base_currency" id={base_currency} data-id={idx} className="form-control " />
          </td>
          <td>
            <input type="text"  name="currency_amount" id={currency_amount  } data-id={idx} className="form-control " />
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
export default TaskList