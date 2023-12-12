import { Component } from "react";
import data from "./data.json"
class App extends Component{
    state = {
        contacts: data,
        name: ''
      }
}
export default App
