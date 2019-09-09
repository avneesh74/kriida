import React, { Component } from 'react'
import './students.css';
import HeadingText from '../../top-features/headingtext.component';
import StudentForm from './studentform';


 class StudentsRegistraion extends Component {

    render() {
        return (
            
            <div className="container-students-registraions">
                <div className="inner-container">
                    <div>
                        <HeadingText
                            title='Complete Your'
                            text='Registraion'
                        />
                        <StudentForm/>
                    </div>
                </div>
            </div>
        )
    }
}


export default  StudentsRegistraion;