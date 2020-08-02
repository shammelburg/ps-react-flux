import React from 'react'
import { Link } from "react-router-dom";

const NotFoundPage = () => (
    <div>
        <h2>Not Found</h2>
        <p>
            <Link to="/">Back to Home Page</Link>
        </p>
    </div>
)

export default NotFoundPage