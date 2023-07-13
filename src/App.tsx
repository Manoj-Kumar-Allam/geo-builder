import "./App.css";
import UIContainer from "./components/ui/UIContainer";
import FiltersContextProvider from "./store/FiltersContext";

function App() {
  return (
    <FiltersContextProvider>
      <UIContainer />
    </FiltersContextProvider>
  );
}

export default App;
