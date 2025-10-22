import { memo, useState } from 'react';
import './Main.css';
import { GrGallery } from "react-icons/gr";
import { FaMicrophone, FaUserCircle, FaRegLightbulb } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { askQuestion } from "./api.js";
import { useRef, useEffect } from 'react';


import gemini from '../images/gemini.png';

const Main = () => {
    const [question, setQuestion] = useState("");
    const [messages, setMessages] = useState([]); 
    const [showResult, setShowResult] = useState(false);

    function formatAnswer(str, maxLength = 80) {
        const jsonString = JSON.stringify(str, null, 2);
        return jsonString
            .replace(/\\n/g, '\n')        
            .replace(/\*+/g, '')          
            .replace(/ {2,}/g, '')       
            .replace(/"+/g, '')           
            .replace(/\\+/g, '')          
            .replace(/\?\\+/g, '?')      
            .replace(/\?+/g, '?')
            .replace(/`+/g, '"')
            .replace(/\//g, '')
            .trim();
        }

    const resultRef = useRef(null);

    useEffect(() => {
        if (resultRef.current) {
            resultRef.current.scrollTo({top: resultRef.current.scrollHeight,behavior: 'smooth',
        });
    }
    }, [messages]);


    async function testQuestion() {
        if (!question) return;

        const userMessage = { role: "user", content: question };
        setMessages(prev => [...prev, userMessage]); 

        try {
            const data = await askQuestion(question, null);
            const botMessage = { role: "bot", content: data?.answer ?? "Bir hata oluştu" };
            setMessages(prev => [...prev, botMessage]); 
        } catch (error) {
            const botMessage = { role: "bot", content: "Bir hata oluştu" };
            setMessages(prev => [...prev, botMessage]);
        }

        setQuestion("");
        setShowResult(true);
    }

    return (
        <div className="main">
            <div className="nav">
                <p>Chatbot</p>
                <FaUserCircle className='userphoto' />
            </div>

            <div className="mainController">

                {!showResult
                    ? <>
                        <div className="open">
                            <p><span>HELLO WORLD</span></p>
                            <p>LETS TALK</p>
                        </div>
                        <div className="cards">
                            {[...Array(4)].map((_, idx) => (
                                <div className="card" key={idx}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere a enim at sequi dolorem eos!</p>
                                    <FaRegLightbulb className='cardIcon' />
                                </div>
                            ))}
                        </div>
                    </>
                    : <div className='result'ref={resultRef}>
                        {messages.map((msg, idx) => (
                            <div key={idx} className={msg.role === "user" ? "resultTitle" : "resultData"}>
                                {msg.role === "user" ? (
                                    <>
                                        <FaUserCircle className='userphoto' />
                                        <p>{msg.content}</p>
                                    </>
                                ) : (
                                    <>
                                        <img className='geminiIcon' src={gemini} alt="" width="50"/>
                                        <p><pre className='resultDataText'>{formatAnswer(msg.content)}</pre></p>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                }

                <div className="chatbase">
                    <div className="searchBox">
                        <input
                            value={question}
                            onChange={e => setQuestion(e.target.value)}
                            type="text"
                            placeholder='write here'
                            onKeyDown={e => e.key === "Enter" && testQuestion()}
                        />
                        <div>
                            <GrGallery className='galeri' />
                            <FaMicrophone className='microphone' />
                            <button onClick={testQuestion} className='sendButton'><IoSend /></button>
                        </div>
                    </div>
                    <p className="bottomInfo">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, hic?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default memo(Main);
