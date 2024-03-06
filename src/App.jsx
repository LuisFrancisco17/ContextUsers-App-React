import "./App.css";
import UserList from "./components/UserList";
import Profile from "./components/Profile";
import UserState from "./context/User/UserState";

function App() {
  return (
    <UserState>
      <Profile />
      <UserList />
    </UserState>
  );
}

export default App;
