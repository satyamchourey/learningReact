import React,{Component} from 'react'
import Plus from 'react-icons/lib/fa/plus-circle'
class Note extends Component {
    constructor(props){
        super(props)
        this.renderForm=this.renderForm.bind(this)
      }
    renderForm(e){
        e.preventDefault();
        return(
          <div> 
          <form><textarea ref={input=>this.newNote=input} /> 
                <button>Save</button>
                </form>
          </div>
        );
    }
    render(){

        return (
            <div  className='note' >
              <button onClick={this.renderForm}>Add New <Plus /></button>
            </div>
        );
    }
}
export default Note ;