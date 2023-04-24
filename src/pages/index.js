import React, { useState } from "react";
import Head from "next/head";
import axios from "axios";
import { Button, Container } from "react-bootstrap";

function iMessage() {
  return (
    <main>
      <Head>
        <title>Karl Marx Chatbot - apcodes</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
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
        <div className="chat-body">
          <p className="chat-header">
            Powered by{" "}
            <a href="https://twitter.com/realapcodes" target="_blank">
              apcodes
            </a>
            .{" "}
          </p>

          <div className="message-container">
            <div className="message">
              <div className="user-message bg-secondary">
                Hi Marx can you provide me your most important contributions to
                current society
              </div>
              <p className="text-end">You</p>
            </div>

            <div className="message">
              <div className="bot-message bg-light">
                Development of the theory of communism: I am known for my
                development of the theory of communism, which advocates for a
                classless society in which the means of production are owned and
                controlled by the workers. This theory has influenced many
                socialist and communist movements around the world and continues
                to be relevant today
              </div>
              <p className="text-start">Karl</p>
            </div>

            <div className="message">
              <div className="bot-message bg-light">
                Development of the theory of communism: I am known for my
                development of the theory of communism, which advocates for a
                classless society in which the means of production are owned and
                controlled by the workers. This theory has influenced many
                socialist and communist movements around the world and continues
                to be relevant today
              </div>
              <p className="text-start">Karl</p>
            </div>

            <div className="message">
              <div className="user-message bg-secondary">
                Hi Marx can you provide me your most important contributions to
                current society
              </div>
              <p className="text-end">You</p>
            </div>

            <div className="message">
              <div className="user-message bg-secondary">
                Hi Marx can you provide me your most important contributions to
                current society
              </div>
              <p className="text-end">You</p>
            </div>

            
          </div>
        </div>

        <form className="chat-form">
          <input
            type="text"
            placeholder="Type your message here..."
          />
          <Button className="btn btn-outline-dark"><i className="fa-regular fa-paper-plane fs-4"></i></Button>
        </form>
      </div>
    </main>
  );
}

export default iMessage;
