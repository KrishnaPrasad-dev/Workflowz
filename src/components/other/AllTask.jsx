import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData] = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5">New Task</h3>
        <h5 className="text-lg font-medium w-1/5">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5">Completed</h5>
        <h5 className="text-lg font-medium w-1/5">Failed</h5>
      </div>
      <div>
        {userData.map((elem, idx) => (
          <div
            key={idx}
            className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between items-center rounded"
          >
            <div
              className="flex items-center gap-3 w-1/5 cursor-pointer"
              onClick={() => navigate(`/employee/${idx}`)}
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-emerald-500 text-white font-bold uppercase">
                {elem.firstName.charAt(0)}
              </div>
              <h2 className="text-lg font-medium">{elem.firstName}</h2>
            </div>
            <h3 className="text-lg font-medium w-1/5 text-blue-400">
              {elem.taskCounts.newTask}
            </h3>
            <h5 className="text-lg font-medium w-1/5 text-yellow-400">
              {elem.taskCounts.active}
            </h5>
            <h5 className="text-lg font-medium w-1/5 text-white">
              {elem.taskCounts.completed}
            </h5>
            <h5 className="text-lg font-medium w-1/5 text-red-600">
              {elem.taskCounts.failed}
            </h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTask;
