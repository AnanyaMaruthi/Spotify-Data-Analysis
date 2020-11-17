import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/theme";
import Analytics from "./components/analytics";
import DataDescription from "./components/dataDescription";
import Header from "./components/header";

const { default: Cover } = require("./components/cover");

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        {/* <Header /> */}
        <Cover />
        <Analytics />
        <DataDescription />
      </div>
    </ThemeProvider>
  );
}

export default App;
