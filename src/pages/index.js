import React, { useEffect, useState, useRef } from "react";
import Head from "next/head";
import axios from "axios";
import { Button, Container } from "react-bootstrap";

function iMessage() {
  const [userInput, setUserInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatBodyRef = useRef(null);

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const  handleSubmit = async (e) => {
    
    e.preventDefault();
    const newMessage = { user: true, text: userInput };
    setMessages((prevMessage) => [...prevMessage, newMessage, { user: false, text: "loading" }])
    // console.log(messages), if we log messages it logs the state that was present when enetering this fcn.

    setLoading(true)
    try {
      const response = await axios.post(
        '/api/marx', 
        { 
          message: userInput 
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      )
      
      const botResponse = {
        user: false,
        text: response.data.results[0],
      };

      setMessages((prevMessage) => {
        prevMessage[prevMessage.length - 1] = botResponse;
        return  [...prevMessage]
      })

    } catch (error) {
      //Handle error for internal server problems
      console.log(error)
      const botResponse = {
        user: false,
        text: "Oops! Something went wrong.",
      };

      setMessages((prevMessage) => {
        prevMessage[prevMessage.length - 1] = botResponse;
        return  [...prevMessage]
      })

    }

    
    setUserInput('')
    setLoading(false)
    
  }

  useEffect(() => {
    chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
  }, [messages]);

  return (
    <main>
      <Head>
        <title>Karl Marx Chatbot - apcodes</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          
        />
      </Head>

      <div className="chatbot-layout m-0 ">
        <div className="chat-title">
          <i className="fs-4 fa-solid fa-arrow-left"></i>
          <div className="d-flex align-items-center">
            <img
              className="profile-image"
              src="https://image.lexica.art/full_jpg/f929ed95-d205-445d-a112-41b5e506782c"
              alt="Profile"
            />
            <div className="d-flex flex-column ms-3">
              <p className="title-info fs-5">Karl Marx</p>
              <div className="d-flex align-items-center">
                <i className="fa-solid fa-circle icon-status"></i>
                <p className="m-0 status">Online</p>
              </div>
            </div>
          </div>
          <i className="fs-4 fa-solid fa-bars"></i>
        </div>
        <div className="chat-body" id="chat-body" ref={chatBodyRef}>
          <p className="chat-header">
            Powered by{" "}
            <a href="https://twitter.com/realapcodes" target="_blank">
              apcodes
            </a>
            .{" "}
          </p>

          <div className="message-container">
            {messages.map((message, index)=> (
              <div className="message" key={index}>
                {message.user ? (
                  <>
                    <div className="user-message bg-secondary">
                      {message.text}
                    </div>
                    <p className="text-end">You</p>
                  </>
                ):(
                  <>
                    <div className="bot-message bg-light">
                      {message.text === "loading" ? (
                        <div className="line-1-horizontal"></div>
                      ):(
                        message.text
                      )}
                    </div>
                    <p className="text-start">Karl</p>
                  </>
                )
                }
                
              </div>
            ))}
           
          </div>
        </div>

        <form className="chat-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type your message here..."
            value={userInput}
            onChange={handleChange}
            disabled={loading}
          />
          <Button className="btn btn-outline-dark" type="submit"><i className="fa-regular fa-paper-plane fs-5 "></i></Button>
        </form>
      </div>
    </main>
  );
}

export default iMessage;
