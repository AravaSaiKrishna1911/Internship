import React from 'react';

const Logout = () => {
    return (
        <div className="logout">
            <p>You have been logged out.</p>
            <button onClick={() => alert("Logging out...")}>Confirm Logout</button>
        </div>
    );
};

export default Logout;
