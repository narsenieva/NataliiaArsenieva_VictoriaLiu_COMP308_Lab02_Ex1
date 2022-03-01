import React, { useState } from 'react'
import api from '../api'

import styled from 'styled-components'
import { StudentInsert } from '.'

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


    function StudentInsert(props) {
        const [studentNumber, setStudentNumber] = useState('');
        const [password, setPassword] = useState('');
        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [address, setAddress] = useState('');
        const [city, setCity] = useState('');
        const [phoneNumber, setPhoneNumber] = useState('');
        const [email, setEmail] = useState('');
        const [program, setProgram] = useState('');

        const handleChangeInputPhoneNumber = (event )=> {
            const value = event.target.validity.valid
                ? event.target.value
                : phoneNumber
    
            setPhoneNumber(value);
        }
        const handleAddStudent = async (event) =>{
            //const arrayTime = time.split('/')
            const payload = { studentNumber, password, firstName, lastName,
                              address, city, phoneNumber, email, program };
            await api.insertStudent(payload).then(res => {
                window.alert(`Student inserted successfully`)
                setStudentNumber('');
                setPassword('');
                setFirstName('');
                setLastName('');
                setAddress('');
                setCity('');
                setPhoneNumber('');
                setEmail('');
                setProgram('');
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

                <Label>Rating: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={rating}
                    onChange={handleChangeInputRating}
                />

                <Label>Time: </Label>
                <InputText
                    type="text"
                    value={time}
                    onChange={e => setTime(e.target.value)}
                />

                <Button onClick={handleAddMovie}>Add Movie</Button>
                <CancelButton href={'/movies/list'}>Cancel</CancelButton>
            </Wrapper>
        );
        }

export default StudentInsert