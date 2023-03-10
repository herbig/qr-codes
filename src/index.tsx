import { ChakraProvider, theme, Center } from "@chakra-ui/react"
import * as React from "react"
import * as ReactDOM from "react-dom/client"
import * as serviceWorker from "./serviceWorker"
import { QRCodeGenerator } from "./ui/QRCodeGenerator"

const App = () => (
  <ChakraProvider theme={theme}>
    <Center m='4rem'>
      <QRCodeGenerator />
    </Center>
  </ChakraProvider>
)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.register()