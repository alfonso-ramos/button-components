import Button from "./components/Button"
import Layout from "./containers/Layout"

function App() {
  return (
    <Layout>
      <Button variant={"basic-shape default"}/>
      <Button variant={"basic-shape outline"}/>
    </Layout>
  )
}

export default App
