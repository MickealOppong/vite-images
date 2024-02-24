import { useAppContext } from "./components/AppContextProvider";
import ImageGrid from "./components/ImageGrid";
import Search from "./components/Search";
import ThemeToggle from "./components/ThemeToggle";


function App() {
  const { darkTheme } = useAppContext();
  return <main>
    <ThemeToggle />
    <Search />
    <ImageGrid />
  </main>
}

export default App
