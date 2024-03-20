import Header from './components/Header.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import StateLogin from './components/StateLogin.jsx';

const WORKING_COMPONENT = "STATE_LOGIN"

function App() {
  function workingComponent() {
    switch (WORKING_COMPONENT) {
      case 'STATE_LOGIN':
        return <StateLogin />
      case 'SIGNUP':
        return <Signup />
      default:
        return <Login /> 
    }
  }
  return (
    <>
      <Header />
      <main>
        {workingComponent()}
      </main>
    </>
  );
}

export default App;
