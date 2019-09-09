import React, { Component } from 'react';
import './signup.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {register} from '../../../redux/actions/authactions';
import { Redirect } from 'react-router-dom';
import {Form,InputGroup,Col} from 'react-bootstrap';

 class signupform extends Component {

    state={
        username:'',
        email:'',
        password:'',
        user_type:'',
        msg:null,
        type:'',
    }

    static propTypes={
        isAuthenticated:PropTypes.bool,
        error:PropTypes.object.isRequired,
        register:PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps){
        const {error}=this.props
        const {isAuthenticated}=this.props
        if(error!== prevProps.error){
            if(error.id==='REGISTER_FAIL'){
                this.setState({msg:error.msg.message})
            }else{
                this.setState({msg:null})
            }
        }
        

        if(isAuthenticated!==prevProps.isAuthenticated){
            if(isAuthenticated.user.user_type==='Student'){
                this.setState({type:isAuthenticated.user.user_type})
            }else if(isAuthenticated.user.user_type==='School'){
                this.setState({type:isAuthenticated.user.user_type})
            }else {
                this.setState({type:''})
            }
        }
        
    }

    handleChange=name=>(event)=>{
        this.setState({[name]:event.target.value})
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        const {username,email,password,user_type}= this.state;

        //Create User Object
        const newUser={
            username,email,password,user_type
        };

        //Atempt to set user
        this.props.register(newUser)

    }

    render() {
        

        return (
            <div>
                {this.state.type==="Student"?(<Redirect to="/students-registraion"/>):this.state.type==="School"?(<Redirect to="/school-registraion"/>):(<Redirect to="/signup"/>)}
                {this.state.msg?(<div>{this.state.msg}</div>):null}

                <Form onSubmit={this.handleSubmit}>
                    <Form.Row style={{justifyContent:'space-around'}}>

                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="Enter Your Username"
                            onChange={this.handleChange("username")}
                            value={this.state.username}
                        />
                    </Form.Group>

                        <Form.Group >
                            <Form.Label>Email</Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                type="text"
                                placeholder="Enater Your Email Id"
                                aria-describedby="inputGroupPrepend"
                                required
                                onChange={this.handleChange("email")}
                                value={this.state.email}
                                />
                            </InputGroup>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row style={{justifyContent:'space-around'}}>
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="Password"
                            placeholder="Enter Your Password"
                            onChange={this.handleChange("password")}
                            value={this.state.password}
                        />
                    </Form.Group>


                    <Form.Group as={Col} md="4">
                        <Form.Label>Account Type</Form.Label>
                        <Form.Control as="select" onChange={this.handleChange("user_type")}  value={this.state.user_type}>
                            <option value=" select">Choose...</option>
                            <option value="School">School</option>
                           <option value="Student">Student</option>
                        </Form.Control>
                    </Form.Group>
                    </Form.Row>
                    <div className="signupform-wrapper">
                        <button className="signup"> Register </button>
                    </div>
                </Form>
            </div>
        )
    }
}


const mapStateToProps=state=>({
    isAuthenticated:state.auth,
    error:state.error
})

export default connect( mapStateToProps,{register}) (signupform);