import "./App.css";
import UserProvider from "./components/contexts/userContext";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <UserProvider>
      <Layout />
    </UserProvider>
  );
}

export default App;
