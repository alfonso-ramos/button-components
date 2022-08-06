import Button from "./components/Button"
import Layout from "./containers/Layout"
import RowContainer from "./containers/RowContainer"
import SideMenu from "./containers/SideMenu"

function App() {
  return (
    <Layout>
      <SideMenu />
        <Button 
          description="<Button />"
          variant={"basic-shape default"} 
          text="Default"/>
        <Button 
          description="&:hover, &:focus"
          variant={"basic-shape default default--hover"}
          text="Default"/>

        <Button 
          description='<Button variant="outline" />'
          variant={"basic-shape outline"}
          text="Default"/>
        variant="outline"
        <Button 
          variant={"basic-shape outline outline--hover"}
          text="Default"/>
        variant="text"
        <Button 
          variant={"basic-shape text"}
          text="Default"/>
        &:hover
        <Button 
          variant={"basic-shape text text--hover"}
          text="Default"/>
      variant="disableShadow"
      <Button 
        variant={"basic-shape disableShadow"}
        text="Default"/>
        <Button 
          description="<Button disabled />"
          variant={"basic-shape disabled"}
          text="Default"/>
          
          <Button 
          description='<Button variant="text" disabled />'
          variant={"basic-shape text-disabled"}
          text="Default"/>


          
    </Layout>
  )
}

export default App
