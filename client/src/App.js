import './normalize.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <div className="side-menu-button">
          <span>+</span>
          New Chat
        </div>
      </aside>
      <section className="chatbox">
        <div className="chat-input-holder">
          <textarea rows="1" className="chat-input-textarea" placeholder="Type your prompt here"></textarea>
        </div>
      </section>
    </div>
  );
}

export default App;
