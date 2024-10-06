import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [roles, setRoles] = useState({
        realEstate: false,
        stocks: false,
        mutualFunds: false,
    });

    const navigate = useNavigate();

    // Handle checkbox changes
    const handleRoleChange = (e) => {
        setRoles({
            ...roles,
            [e.target.name]: e.target.checked,
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const selectedRoles = Object.keys(roles).filter(role => roles[role]);
        navigate('/dashboard', { state: { selectedRoles } });
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" required />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" required />
                </div>
                <div>
                    <label>Password:</label>
                    <input type="password" name="password" required />
                </div>
                <div>
                    <label>Select Roles:</label>
                    <div>
                        <input
                            type="checkbox"
                            name="realEstate"
                            checked={roles.realEstate}
                            onChange={handleRoleChange}
                        />
                        <label>Real Estate</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="stocks"
                            checked={roles.stocks}
                            onChange={handleRoleChange}
                        />
                        <label>Stocks</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            name="mutualFunds"
                            checked={roles.mutualFunds}
                            onChange={handleRoleChange}
                        />
                        <label>Mutual Funds</label>
                    </div>
                </div>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
