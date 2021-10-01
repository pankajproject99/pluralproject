import logo from "./logo.svg";
import "./main-page.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./header";

function App() {
  // load data
  const userName="Pankaj";
  return (
    <div className="container">
      <Header
        subtitle={userName}
        title="Some Title"
      />
    </div>
  );
}

export default App;
