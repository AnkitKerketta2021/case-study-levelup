import React from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'
import './ErrorBoundary.css'


function ErrorBoundary() {
    return (
        <div className="errorPage">
            <h1>ERROR</h1>
            <p> Oops!.... This Page is Not Valid...!</p>
            <Link to="/"><button >Go Back</button></Link>
        </div>
    )
}

export default withRouter(ErrorBoundary)
