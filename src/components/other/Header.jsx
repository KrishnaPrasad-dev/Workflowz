import React, { useState, useEffect } from 'react';

const Header = (props) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (storedUser) {
      setUsername(storedUser.firstName || 'Admin');
    } else {
      setUsername('Admin');
    }
  }, []);

  const logOutUser = () => {
    localStorage.removeItem('loggedInUser');
    props.changeUser('');
    setUsername('');
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br /> <span className="text-3xl font-semibold"> {props.data?.firstName || username} 👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-red-600 text-base font-medium text-white px-5 py-2 rounded-sm"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
