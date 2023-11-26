function MyButton() {
  return <button>I'm a button</button>;
}

function App() {
  return (
    <div className="App">
      <h1>Welcome to my App</h1>

      <MyButton />
      <MyButton />
      <MyButton />
    </div>
  );
}

export default App;
