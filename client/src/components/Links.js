import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``
function Links(props){
    return (
        <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Student management
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/students/list" className="nav-link">
                                List Students
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/students/create" className="nav-link">
                                Create Student
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
    );
}


export default Links
