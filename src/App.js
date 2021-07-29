import CustomizeMenu from "./components/CustomizeMenu";
import sampleData from "./sampleData";
function App() {
  console.log(sampleData);
  return (
    <div className="App">
      <CustomizeMenu />
    </div>
  );
}

export default App;
