import React, { Component } from 'react';
import './students.css';
import API_URL from '../../../config';
import axios from 'axios';
import {register} from '../../../redux/actions/authactions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import TextField  from '@material-ui/core/TextField';
import {Form} from 'react-bootstrap';
import Select from 'react-select';
import ReactPhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/dist/style.css';
import CustomButton from '../../custom-button/custom.button';





 class StudentForm extends Component {
    state={
        name:'',
        dob:'',
        schoollists:'',
        schoolsData:[],
        userData:[],
        phone_no:'',
        message:'',
        error:'',
        users:'',
        loading:false,
    }

    componentDidMount(){
        axios.get('https://kriida-final.herokuapp.com/schoollists')
            .then(res=>{
                this.setState({schoolsData:res.data})
            })
        
        axios.get('https://kriida-final.herokuapp.com/users')
            .then(res=>{
                this.setState({userData:res.data})
            })
    }

    static propTypes={
        isAuthenticated:PropTypes.bool,
        error:PropTypes.object.isRequired,
        register:PropTypes.func.isRequired
    }

    handleChange=e=>{
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    selecthandleChange=(schoollists)=>{
        this.setState({
            schoollists,
            
        })
    }

    selecthandleChangeUsers=(users)=>{
            this.setState({
                users
            })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const {isAuthenticated}=this.props
        this.setState({
            name:'',
            dob:'',
            schoollists:'',
            phone_no:'',
            users:'',
            
        })

        const {name,dob,schoollists,error,message,phone_no,users}= this.state;
        
        const data={
            name,dob,schoollists,phone_no,users
        }
        
        console.log(data)

        const token= isAuthenticated.jwt
        const url='https://kriida-final.herokuapp.com/players'

        axios.post(url,data,{
            headers: {
                'authorization': `Bearer ${token}`,
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(res=>{
            console.log('Data: ', res.data);
            this.setState({
                message:res.data
                
            })
            console.log(message)
        })
        .catch(err=>{
            console.log('An error occurred:', err);
            this.setState({
                error:err.message
            })
            console.log(message)
        })

        console.log(token)
    }

    


    render() {
        const {schoolsData}=this.state;
        var options = schoolsData.map(schoolData => ({ value: schoolData.id, label: schoolData.name,  }))
        const {userData} = this.state;
        var userOption = userData.map(usersData=>({value:usersData.id, label:usersData.username}))

        return (
            <div>
                <Form onSubmit={this.handleSubmit} className="students-form">
                    <div className="form-wrapper">
                        
                        
                        
                        <div>
                            <TextField
                                name="name" 
                                className="form-control" 
                                value={this.state.name}
                                label="Your Name" 
                                onChange={ e => this.handleChange(e)}
                                required
                                /> 
                        </div>

                        <div>
                            <TextField className="date-control"
                                    name="dob"
                                    type="date"
                                    value={this.state.dob}
                                    defaultValue="2017-05-24"
                                    onChange={e => this.handleChange(e)}
                                    required
                            />
                        </div>

                        <div>
                            <div className= "select-text">Select School</div>
                            <Select styles={customStyles} 
                                className="date-control" 
                                value={this.state.schoollists.id}
                                labelKey='name'
                                valueKey='id' 
                                options={options}
                                onChange={this.selecthandleChange}
                                />
                        </div>
                        <div className= "select-text">
                            <div >Enter Your Number</div>
                                <ReactPhoneInput  className="date-control"
                                    defaultCountry={'in'} 
                                    value={this.state.phone_no} 
                                    onChange={phone_no => this.setState({ phone_no })}
                                />
                            
                        </div>  
                        <div>
                            <div className= "select-text">Verify Username</div>
                            <Select styles={customStyles} 
                                className="date-control" 
                                value={this.state.users.id}
                                labelKey='username'
                                valueKey='id' 
                                options={userOption}
                                onChange={this.selecthandleChangeUsers}
                                />
                        </div>
                        
                    <div className= "custom-button-class">
                        <CustomButton>
                            Submit
                        </CustomButton>
                    </div>
                    </div>
                    
                </Form>
            </div>
        )
    }
}



const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'white' : 'black',
      padding: 10,
    }),
    
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = 'opacity 300ms';
  
      return { ...provided, opacity, transition };
    }
  }



const mapStateToProps=(state)=>({
    isAuthenticated:state.auth,
})


export default connect(mapStateToProps,{register}) (StudentForm)
