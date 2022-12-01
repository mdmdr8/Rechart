import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import SubwayApi from './SubwayApi';
import RechartsLineTest from './RechartsLineTest';
import PostCodeApp from './PostCodeApp';
function App() {
  return (
    <div className="App">
      <SubwayApi />
      {/* <RechartsLineTest/> */}
      <PostCodeApp />

    </div>
  );
}

export default App;
