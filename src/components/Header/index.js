import {IoMdNotificationsOutline} from 'react-icons/io'
import {MdOutlineNightlight} from 'react-icons/md'
import {AiOutlineMenuFold} from 'react-icons/ai'
import {FaLanguage} from 'react-icons/fa6'

import './index.css'

const Header = () => (
  <div className="header-container">
    <div>
      <img src="" alt="profile pic" className="profile-pic" />
      <AiOutlineMenuFold />
    </div>
    <div className="icons-container">
      <MdOutlineNightlight />
      <IoMdNotificationsOutline />
      <FaLanguage />
      <img src="" alt="avatar" />
    </div>
  </div>
)

export default Header
