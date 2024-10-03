import { Col, Row } from "react-bootstrap";
import MessageContainer from "./MessageContainer"

const ChatRoom = ({messages}) => <div>

  <Row className="px-5 py-5">
    <Col sm={10}>
        <h2>ChatRoom</h2>
    </Col>

    <Col>
    
    </Col>
  </Row>
  <Row className="px-5 py-5">
  <Col sm={12}>
      <MessageContainer messages={messages} />
    </Col>
  </Row>


</div>

export default ChatRoom;