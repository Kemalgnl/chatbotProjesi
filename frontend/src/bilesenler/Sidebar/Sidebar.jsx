import { memo } from 'react';
import './Sidebar.css';
import { IoMdMenu } from "react-icons/io";
import { RiChatNewLine } from "react-icons/ri";
import { FaMessage } from "react-icons/fa6";
import { FaQuestion } from "react-icons/fa";
import { MdOutlineHistory } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";


const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className="top">
        <IoMdMenu className="menuicon" />
        <div className="newChat">
            <RiChatNewLine className="icon" alt="newchat icon"/>
            <p>New Chat</p>
        </div>
        <div className="recent">
            <p className='recentTitle'>History</p>
            <div className="recentEntry">
                <FaMessage className="icon"/>
                <p>geçmiş konuşmalar</p>
            </div>
        </div>
      </div>

      <div className="bottom">
        <div className="bottonItem recentEntry">
            <FaQuestion className="icon" alt="question icon"/>
            <p>Help</p>
        </div>
        <div className="bottonItem recentEntry">
            <MdOutlineHistory className="icon" alt="history icon"/>
            <p>Activity</p>
        </div>
        <div className="bottonItem recentEntry">
            <IoIosSettings className="icon" alt="settings icon" />
            <p>Settings</p>
        </div>

      </div>
    </div>
  );
};

export default memo(Sidebar);