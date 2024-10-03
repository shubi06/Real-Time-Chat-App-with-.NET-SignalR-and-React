import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Container } from 'react-bootstrap';
import WaitingRoom from './components/waitingroom';
import { useState } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import ChatRoom from './components/ChatRoom';

function App() {
  const [conn, setConnection] = useState(null);
  const [messages, setMessages] = useState([]);

  const joinChatRoom = async (username, chatroom) => {
    try {
      const conn = new HubConnectionBuilder()
        .withUrl("https://localhost:7026/chat")
        .configureLogging(LogLevel.Information)
        .build();

      conn.on("JoinSpecificChatRoom", (username, msg) => {
        setMessages(prevMessages => [...prevMessages, { username, msg }]);
      });

      conn.on("ReceiveSpecificMessage", (username, msg) => {
        setMessages(prevMessages => [...prevMessages, { username, msg }]);
      });

      conn.on("receivemessage", (username, msg) => {
        setMessages(prevMessages => [...prevMessages, { username, msg }]);
      });

      await conn.start();
      await conn.invoke("JoinSpecificChatRoom", { username, chatroom });

      setConnection(conn);
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = async (message) => {
    try {
      await conn.invoke("SendMessage", message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="app">
      <main>
        <Container>
          <Row className="my-5 text-center">
            <Col>
              <h1 className="font-weight-bold display-4">ChatApp</h1>
              <p className="lead">Connect and chat in real-time</p>
            </Col>
          </Row>
          <Row>
            <Col>
              {!conn
                ? <WaitingRoom joinChatRoom={joinChatRoom} />
                : <ChatRoom messages={messages} sendMessage={sendMessage} />
              }
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
