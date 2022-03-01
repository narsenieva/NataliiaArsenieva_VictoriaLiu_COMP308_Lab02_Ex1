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
function CoursesUpdate(props) {
    const [id, setId] = useState(props.match.params.id);
    const [courseCode, setCourseCode] = useState('');
    const [courseName, setCourseName] = useState('');
    const [section, setSection] = useState('');
    const [semester, setSemester] = useState('');
    useEffect(()=>{
        const fetchData = async () => {
        const course = await api.getCourseById(id)
        setCourseCode(course.data.data.courseCode);
        setCourseName(course.data.data.courseName);
        setSection(course.data.data.section);
        setSemester(course.data.data.semester);
        };
       fetchData(); 
    },[id]);
    
    const handleUpdateCourse = async (event) =>{
        const payload = { courseCode, courseName, section, semester }
        await api.updateCourseById(id, payload).then(res => {
            window.alert(`Course updated successfully`)
            setCourseCode('');
            setCourseName('');
            setSection('');
            setSemester('');
            window.location.href = `/courses/list`;
            
        })


    };

    return (
        <Wrapper>
            <Title>Create Course</Title>

            <Label>Course Code: </Label>
            <InputText
                type="text"
                value={courseCode}
                onChange={e => setCourseCode(e.target.value)}
            />

            <Label>Course Name: </Label>
            <InputText
                type="text"
                value={courseName}
                onChange={e => setCourseName(e.target.value)}
            />
            
            
            <Label>Section: </Label>
            <InputText
                type="text"
                value={section}
                onChange={e => setSection(e.target.value)}
            />

            <Label>Semester: </Label>
            <InputText
                type="text"
                value={semester}
                onChange={e => setSemester(e.target.value)}
            />

            <Button onClick={handleUpdateCourse}>Update Course</Button>
            <CancelButton href={'/courses/list'}>Cancel</CancelButton>
        </Wrapper>
    );  
}


export default CoursesUpdate
