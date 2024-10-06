import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './SelectedRoles.css'; // Import the custom CSS

const Dashboard = () => {
    const location = useLocation();
    const { selectedRoles } = location.state || { selectedRoles: [] };

    return (
        <div className="selected-roles-container"> {/* Updated class name */}
            <h2>Welcome to selected roles</h2>
            <ul>
                {selectedRoles.length > 0 ? (
                    selectedRoles.map((role, index) => (
                        <li key={index}>
                            <Link to={`/${role}`}>
                                {role.charAt(0).toUpperCase() + role.slice(1)}
                            </Link>
                        </li>
                    ))
                ) : (
                    <li>No roles selected</li>
                )}
            </ul>
        </div>
    );
};

export default Dashboard;
