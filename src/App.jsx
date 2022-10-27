import Links from "./components/Links"
import Profile from "./components/Profile"

function App() {
  return (
    <div className="App">
      <Profile width={window.outerWidth} />
      <Links />
      <footer className="footer">
        <hr />
        <div>
          <img src="/img/zuri-logo.svg" />
          <p>HNG Internship 9 Frontend Task</p>
          <img src="/img/I4G.png" />
        </div>
      </footer>
    </div>
  )
}

export default App
