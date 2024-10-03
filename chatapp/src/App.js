

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Col, Row, Container} from 'react-bootstrap';
import WaitingRoom from './components/waitingroom';
import { useState } from 'react';
import {HubConnection, HubConnectionBuilder, LogLevel} from '@microsoft/signalr';


function App() {
  const[conn, setConnection] = useState();

  const joinChatRoom = async (username, chatroom) => {
    try {
      const conn = new HubConnectionBuilder()
      .withUrl("https://localhost:7026/chat")
      .configureLogging(LogLevel.Information)
      .build();

      conn.on("JoinSpecificChatRoom",(username, msg) => {
        console.log("msg: ", msg);
      } );

      await conn.start();
      await conn.invoke("JoinSpecificChatRoom",{username, chatroom});

      setConnection(conn);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <main>
        <Container>
          <Row className='px-5 my-5'>
            <Col sm='12'>
            <h1 className='font-weight-light'> Welcome to the ChatApp</h1>
            </Col>
          </Row>
          <WaitingRoom joinChatRoom={joinChatRoom}></WaitingRoom>
        </Container>
      </main>
    </div>
  );
}

export default App;
