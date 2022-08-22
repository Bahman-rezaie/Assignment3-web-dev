import React, {Component} from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state = {
            fullName: '',
            userName: '',
            email: '',
            password: '',
        }
        this.changefullName=this.changefullName.bind(this)
        this.changeuserName=this.changeuserName.bind(this)
        this.changeemail=this.changeemail.bind(this)
        this.changepassword=this.changepassword.bind(this)
        this.onSubmit=this.onSubmit.bind(this)
    }

    changefullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
   
    changeuserName(event){
        this.setState({
            userName:event.target.value
        })
    }

    changeemail(event){
        this.setState({
            email:event.target.value
        })
    }
    changepassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault()

        const registered = {
            fullName:this.state.fullName,
            userName:this.state.userName,
            email:this.state.email,
            password:this.state.password
        }

        axios.post('http://localhost:4000/app/signup', registered)
            .then(Response => console.log(Response.data))
            
            this.setState({
                fullName: '',
                userName: '',
                email: '',
                password: ''
            })
    }

    render() {
        return(
            <div>
            <div className='contrainer'>
                <div className='form-div'>
                    <form onSubmit={this.onSubmit}>
                        <input type= 'Text'
                        placeholder='Full Name'
                        onChange={this.changefullName}
                        value={this.state.fullName}
                        className='form-control form-group'
                        />

                        <input type= 'Text'
                        placeholder='Username'
                        onChange={this.changeuserName}
                        value={this.state.userName}
                        className='form-control form-group'
                        />

                        <input type= 'Text'
                        placeholder='Email'
                        onChange={this.changeemail}
                        value={this.state.email}
                        className='form-control form-group'
                        />

                        <input type= 'Password'
                        placeholder='Password'
                        onChange={this.changepassword}
                        value={this.state.password}
                        className='form-control form-group'
                        />

                        <input type='submit' className='btn btn-danger btn-block' value='Submit'/>
                    </form>
                 </div>
            </div>                
         </div>

        );

    }
}
export default App;
