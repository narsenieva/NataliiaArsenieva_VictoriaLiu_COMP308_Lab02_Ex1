import React, { useState, useEffect } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`
function StudentsUpdate(props) {
    const [id, setId] = useState(props.match.params.id);
    const [studentNumber, setStudentNumber] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [program, setProgram] = useState('');
   // const [course, setCourse] = useState('');
    useEffect(()=>{
        const fetchData = async () => {
        const student = await api.getStudentById(id)
        setStudentNumber(student.data.data.studentNumber);
        setPassword(student.data.data.password);
        setFirstName(student.data.data.firstName);
        setLastName(student.data.data.lastName);
        setAddress(student.data.data.address);
        setCity(student.data.data.city);
        setPhoneNumber(student.data.data.phoneNumber);
        setEmail(student.data.data.email);
        setProgram(student.data.data.program);
       // setCourse(student.data.data.course);
        };
       fetchData(); 
    },[id]);
    
    const handleUpdateStudent = async (event) =>{
        const payload = { studentNumber, password, firstName, lastName, 
            address, city, phoneNumber, email, program}
        await api.updateStudentById(id, payload).then(res => {
            window.alert(`Student updated successfully`)
            setStudentNumber('');
            setPassword('');
            setFirstName('');
            setLastName('');
            setAddress('');
            setCity('');
            setPhoneNumber('');
            setEmail('');
            setProgram('');
            //setCourse('');
            window.location.href = `/students/list`;
            
        })

    };

    return (
        <Wrapper>
            <Title>Create Student</Title>

            <Label>Student Number: </Label>
            <InputText
                type="text"
                value={studentNumber}
                onChange={e => setStudentNumber(e.target.value)}
            />

            <Label>Password: </Label>
            <InputText
                type="text"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />

            
            <Label>First Name: </Label>
            <InputText
                type="text"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />
            
            <Label>Last Name: </Label>
            <InputText
                type="text"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            />
            
            <Label>Address: </Label>
            <InputText
                type="text"
                value={address}
                onChange={e => setAddress(e.target.value)}
            />
            
            <Label>City: </Label>
            <InputText
                type="text"
                value={city}
                onChange={e => setCity(e.target.value)}
            />
            
            <Label>Phone Number: </Label>
            <InputText
                type="text"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
            />
            
            <Label>email: </Label>
            <InputText
                type="text"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />

            <Label>Program: </Label>
            <InputText
                type="text"
                value={program}
                onChange={e => setProgram(e.target.value)}
            />

           

            <Button onClick={handleUpdateStudent}>Update Student</Button>
            <CancelButton href={'/students/list'}>Cancel</CancelButton>
        </Wrapper>
    );  
}


export default StudentsUpdate
