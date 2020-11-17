import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/theme";
import Analytics from "./components/analytics";
import DataDescription from "./components/dataDescription";

const { default: Cover } = require("./components/cover");

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Cover />
      <DataDescription />
      <Analytics />
    </ThemeProvider>
  );
}

export default App;
