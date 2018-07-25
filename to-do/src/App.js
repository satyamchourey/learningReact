import React , {Component} from 'react';
import List from 'react-icons/lib/fa/list-alt'
import Note from './note'
import './App.css'
class ToDo extends Component {
  constructor(props){
    super(props)
  }

  
render(){
  return(
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>To Do <List /> </h1>
      </header>
      <Note />
    </div>
  )
}

}
export default ToDo; 