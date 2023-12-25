import React from 'react';
import Navbar from './Navbar/Navbar.tsx';
import './App.css';
import { read } from 'fs';

type User = {
  name: string;
  email: string;
};
const App = () => {
  const [text, setText] = React.useState("React Typescript");
  const [user, setUser] = React.useState<User[]>();

  const getUsers = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = (await result.json()) as User[];
    setUser(data);
  };

  React.useEffect(() => {
    if (text === "Load Users") {
      getUsers();
    }
  }, []);

  return (
    <>
      <Navbar items={[
          { text: "Home", action: () => setText("Home") },
          {
            text: "Load Users",
            action: () => (setText("Load Users"), getUsers()),
          },
        ]}
      />
      <div className="App">
        <h1>{text}</h1>
      </div>

      <h2>Users information:</h2>

      <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
        {user && user?.length > 0 && (
          <div
            style={{
              background: 'cyan',
              flexDirection: "column",
              display: "flex",
              flex: 1,
              margin: 20,
              paddingLeft: 20,
              borderRadius: 20
            }}>
            {
            user.map((elem) => (
              <div key={elem.name} style={{marginBottom: 20}}>
                <li>Email: {elem.email}</li>
                <li>Name: {elem.name}</li>
              </div>
            ))
            }
          </div>
        )}
      </div>
    </>
  );
};

export default App;