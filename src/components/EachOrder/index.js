import {GiMilkCarton} from 'react-icons/gi'
import {CiSquarePlus} from 'react-icons/ci'

import './index.css'

const EachOrder = props => {
  const {details} = props
  const {
    orderNo,
    orderDate,
    City,
    CustomerName,
    orderValue,
    status,
    operation,
  } = details
  return (
    <li className="table-styles">
      <div className="initial-colun">
        <label htmlFor="checkbox">
          <CiSquarePlus />
        </label>
      </div>
      <input type="checkbox" id="checkbox" />
      <GiMilkCarton size={20} color="green" />
      <p className="order-no">{orderNo}</p>
      <p>{orderDate}</p>
      <p>{City}</p>
      <p className="customerName">{CustomerName}</p>
      <p>{orderValue}</p>
      <p>{status}</p>
      <select>
        <option>{operation}</option>
      </select>
    </li>
  )
}

export default EachOrder
