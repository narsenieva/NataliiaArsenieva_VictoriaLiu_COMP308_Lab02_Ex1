import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { StudentsList, StudentInsert, StudentUpdate } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/students/list" exact component={StudentsList} />
                <Route path="/students/create" exact component={StudentInsert} />
                <Route
                    path="/students/update/:id"
                    exact
                    component={StudentUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App
