import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Pie } from "react-chartjs-2";
import { AuthContext } from "../../context/AuthProvider";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const EmployeeDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [userData] = useContext(AuthContext);

  const employee = userData[id];
  if (!employee) return <div>Employee not found!</div>;

  const chartData = {
    labels: ["New Task", "Active Task", "Completed", "Failed"],
    datasets: [
      {
        data: [
          employee.taskCounts.newTask,
          employee.taskCounts.active,
          employee.taskCounts.completed,
          employee.taskCounts.failed,
        ],
        backgroundColor: ["#4A90E2", "#F5A623", "#7ED321", "#D0021B"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-[#1c1c1c] min-h-screen p-5 text-white">
      <button
        className="bg-red-500 px-4 py-2 rounded hover:bg-red-600"
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
      <div className="mt-5">
        <h2 className="text-2xl font-bold">{employee.firstName}'s Task Details</h2>
        <div className="mt-6 flex justify-center">
          <div className="w-1/4"> 
            <Pie
              data={chartData}
              options={{
                responsive: true,
                plugins: {
                  legend: {
                    display: true,
                    position: "bottom",
                    labels: {
                      color: "white",
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetails;
