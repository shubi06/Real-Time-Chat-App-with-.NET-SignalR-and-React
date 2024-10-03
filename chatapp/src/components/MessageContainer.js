const MessageContainer = ({ messages = [] }) => {
  return (
    <div>
      {messages.map((msg, index) => (
        <table striped bordered key={index}>
          <tbody>
            <tr>
              <td>{msg.msg} - {msg.username}</td>
            </tr>
          </tbody>
        </table>
      ))}
    </div>
  );
};

export default MessageContainer;
