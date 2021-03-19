import './App.scss';
import ProsComponent from "./containers/ProsComponent";
import ConsComponent from "./containers/ConsComponent";

function App() {
  return (
    <div className="App">
      <div className='app_container'>
          <div className='app_header'>
              Should I eat at McDonald’s?
          </div>
          <div className='app_content'>
              <ProsComponent/>
              <ConsComponent/>
          </div>
      </div>
    </div>
  );
}

export default App;
