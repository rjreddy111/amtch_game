// Write your code here
import {LiaFileImportSolid} from 'react-icons/lia'
import {FaArrowRightToBracket} from 'react-icons/fa6'
import {HiOutlinePrinter} from 'react-icons/hi'
import {FaAngleDown} from 'react-icons/fa'
import {FiRefreshCw} from 'react-icons/fi'

import EachOrder from '../EachOrder'

import './index.css'

const orderDetails = [
  {
    orderNo: '#TKN20203740',
    orderDate: '2024-02-18',
    City: 'Bengaluru',
    CustomerName: 'Rahul',
    orderValue: '0.0',
    status: 'Pending',
    operation: 'Action',
  },
  {
    orderNo: '#TKN20203741',
    orderDate: '2024-02-19',
    City: 'Mangaluru',
    CustomerName: 'Rohit',
    orderValue: '0.0',
    status: 'Pending',
    operation: 'Action',
  },
  {
    orderNo: '#TKN20203742',
    orderDate: '2024-02-18',
    City: 'Bengaluru',
    CustomerName: 'Rajat',
    orderValue: '0.0',
    status: 'Pending',
    operation: 'Action',
  },
  {
    orderNo: '#TKN20203743',
    orderDate: '2024-02-19',
    City: 'Mangaluru',
    CustomerName: 'Akshay',
    orderValue: '0.0',
    status: 'Pending',
    operation: 'Action',
  },
  {
    orderNo: '#TKN20203744',
    orderDate: '2024-02-18',
    City: 'Hyderabad',
    CustomerName: 'Partha',
    orderValue: '0.0',
    status: 'Pending',
    operation: 'Action',
  },
  {
    orderNo: '#TKN20203745',
    orderDate: '2024-02-18',
    City: 'Chennai',
    CustomerName: 'Vijay',
    orderValue: '0.0',
    status: 'Pending',
    operation: 'Action',
  },
  {
    orderNo: '#TKN20203746',
    orderDate: '2024-02-20',
    City: 'Bidar',
    CustomerName: 'Rahul',
    orderValue: '0.0',
    status: 'Pending',
    operation: 'Action',
  },
  {
    orderNo: '#TKN20203747',
    orderDate: '2024-02-18',
    City: 'Kalaburagi',
    CustomerName: 'Rahul',
    orderValue: '0.0',
    status: 'Pending',
    operation: 'Action',
  },
  {
    orderNo: '#TKN20203748',
    orderDate: '2024-02-21',
    City: 'Bengaluru',
    CustomerName: 'Rahul',
    orderValue: '0.0',
    status: 'Pending',
    operation: 'Action',
  },
  {
    orderNo: '#TKN20203749',
    orderDate: '2024-02-18',
    City: 'Bengaluru',
    CustomerName: 'Rahul',
    orderValue: '0.0',
    status: 'Pending',
    operation: 'Action',
  },
]

const MainContent = () => (
  <div className="main-content-background-container ">
    <ul className="mian-headers">
      <li className="active-color">Pending</li>
      <li>Accepted</li>
      <li>AWB created</li>
      <li>Ready to Ship</li>
      <li>Shipped</li>
      <li>Completed</li>
    </ul>
    <div className="botom-container">
      <div className="buttons-container">
        <button className="buttons-style" type="button">
          {' '}
          <LiaFileImportSolid />
          Import Orders
        </button>
        <button className="buttons-style unactive" type="button">
          {' '}
          <FaArrowRightToBracket />
          Accept
        </button>
        <button className="buttons-style unactive" type="button">
          {' '}
          <HiOutlinePrinter />
          Print
          <FaAngleDown />
        </button>
        <button className="refershButton" type="button">
          <FiRefreshCw />
          Refresh
        </button>
      </div>
      <div className="table-heading">
        <input type="checkbox" className="input" />
        <p className="channel_no.">Channel No.</p>
        <p className="order-number-width">Order No.</p>
        <p>Order Date</p>
        <p>City</p>
        <p>Customer Name</p>
        <p>orderValue</p>
        <p>Status</p>
        <p>Operation</p>
      </div>
      <hr />
      <ul className="onordered-list">
        {orderDetails.map(eachOrder => (
          <EachOrder details={eachOrder} id={eachOrder.orderNo} />
        ))}
      </ul>
    </div>
  </div>
)
export default MainContent
