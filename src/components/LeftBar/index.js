// Write your code here
import {Component} from 'react'
import {AiOutlineDashboard} from 'react-icons/ai'
import {CiShoppingTag, CiDeliveryTruck} from 'react-icons/ci'
import {IoReorderFour, IoShareSocialOutline} from 'react-icons/io5'

import './index.css'

const allButtons = ['Dashboard', 'Inventory', 'Orders', 'Shipping', 'Channels']

// Write your code here

class LeftBar extends Component {
  state = {activeButton: 'Orders'}

  onClickDashboard = () => {
    this.setState({activeButton: 'Dashboard'})
  }

  onClickInven = () => {
    this.setState({activeButton: 'Inventory'})
  }

  onClickOrders = () => {
    this.setState({activeButton: 'Orders'})
  }

  onClickShipping = () => {
    this.setState({activeButton: 'Shipping'})
  }

  onClickCHannels = () => {
    this.setState({activeButton: 'Channels'})
  }

  render() {
    const {activeButton} = this.state
    console.log(activeButton)
    const isActiveDashboard = activeButton === 'Dashboard'
    const isActiveInven = activeButton === 'Inventory'
    const isActiveOrders = activeButton === 'Orders'
    const isActiveSHipping = activeButton === 'Shipping'
    const isActiveChannels = activeButton === 'Channels'

    const activeDashboard = isActiveDashboard ? 'highligh' : 'normal'
    const activeInven = isActiveInven ? 'highligh' : 'normal'
    const activeOrders = isActiveOrders ? 'highligh' : 'normal'
    const activeShipping = isActiveSHipping ? 'highligh' : 'normal'
    const activeChannels = isActiveChannels ? 'highligh' : 'normal'

    return (
      <div className="left-bar-container">
        <ul>
          <li onClick={this.onClickDashboard} className={activeDashboard}>
            <AiOutlineDashboard />
            <p>Dashboard </p>
          </li>
          <li onClick={this.onClickInven} className={activeInven}>
            {' '}
            <CiShoppingTag />
            <p>Inventory</p>
          </li>
          <li onClick={this.onClickOrders} className={activeOrders}>
            {' '}
            <IoReorderFour />
            <p>Orders</p>
          </li>
          <li onClick={this.onClickShipping} className={activeShipping}>
            {' '}
            <CiDeliveryTruck />
            <p>Shipping</p>
          </li>
          <li onClick={this.onClickCHannels} className={activeChannels}>
            <IoShareSocialOutline />
            <p> Channels</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default LeftBar
