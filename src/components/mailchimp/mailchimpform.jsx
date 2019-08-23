import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

 class MailChimpForm extends Component {

    state= {
        email:""
    }

    handleChange=(event)=>{
        this.setState({email:event.target.value})
    }

    handleSubmit=(event)=>{
        event.preventDefault()

        this.setState({email:''})
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                <FormControl 
                    type="email" 
                    placeholder="Enter email" 
                    value={this.state.email}
                    onChange={this.handleChange}
                    />
                    <input type='submit' value='Submit Form' />
                </Form>
                
            </div>
        )
    }
}


export default MailChimpForm