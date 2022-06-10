import React, { useEffect} from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FiShoppingCart } from 'react-icons/fi'
import { BsChatLeft } from 'react-icons/bs'
import { RiNotification3Line } from 'react-icons/ri'
import { MdKeyboardArrowDown } from 'react-icons/md'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { Cart, Chat, Notification, UserProfile } from './index'

import avatar from '../data/avatar.jpg'
import { useStateContext } from '../contexts/ContextProvider'

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
    <TooltipComponent content={title} position="BottomCenter">
        <button type='button' onClick={customFunc} 
        style={{color}}
        className="relative text-x1 rounded-full p-3 hover:bg-light-gray"
        >
        <span style={{background: dotColor}} className="absolute inline-flex rounded-full w-2 h-2 top-2 right-2"></span>
        {icon}
        </button>
    </TooltipComponent>
  )
 

const Navbar = () => {
  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick } = useStateContext();
 


  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>
    <NavButton title="Menu" 
      customFunc={() => setActiveMenu((prevActiveMenu) => !prevActiveMenu)} color="blue" icon={<AiOutlineMenu />} />

        <div className='flex'>
        <NavButton 
          title="Cart" 
          customFunc={() => handleClick('cart')} 
          color="blue" 
          icon={<FiShoppingCart />} 
          />
        </div>

        <div className='flex'>
        <NavButton
          title="Chat" 
          dotColor="#03C9D7"
          customFunc={() => handleClick('chat')} 
          color="blue"
          icon={<BsChatLeft />}
           />
        </div>

        <div className='flex'>
        <NavButton
          title="Notification" 
          dotColor="#03C9D7"
          customFunc={() => handleClick('notification')} 
          color="blue"
          icon={<RiNotification3Line />}
           />
           <TooltipComponent
            content="Profile"
            position="BottomCenter"
           >
             <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg' 
             onClick={() => handleClick('userProfile')}>
                <img 
                  src={avatar} 
                  alt="avatar" 
                  className="w-8 h-8 rounded-full" />
                  <p>
                    <span className="text-gray-400 text-14">Hi, </span> {' '}
                    <span className="text-gray-400 text-14 font-bold ml-1">John Doe</span>
                  </p>
                  <MdKeyboardArrowDown 
                  className="text-gray-400 text-14"
                  />
             </div>
           </TooltipComponent>

           {isClicked.cart && <Cart />}
           {isClicked.chat && <Chat />}
           {isClicked.notification && <Notification />}
           {isClicked.userProfile && <UserProfile />}
        </div>

      </div>

      
  )
}

export default Navbar