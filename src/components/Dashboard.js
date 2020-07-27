import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
    return (
        <div>
            <h1>dashboard</h1>
            <button><Link to="/posts">view all posts</Link></button>
        </div>
    )
}

export default Dashboard
