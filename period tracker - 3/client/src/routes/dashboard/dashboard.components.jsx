import "./dashboard.styles.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [periodHistory, setPeriodHistory] = useState([]);

  const [symptomTracking, setSymptomTracking] = useState([]);

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const id = localStorage.getItem("userId");

      const response = await axios.get(
        `http://localhost:3000/main/dashboard?user_id=${id}`
      );

      setPeriodHistory(response.data.periodHistory);

      setSymptomTracking(response.data.symptomTracking);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="dashboard-container">
      <h1>Welcome to Your Dashboard!</h1>

      <h2>Period History</h2>
      {periodHistory.length > 0 ? (
        <ul>
          {periodHistory.map((period) => (
            <li key={period._id}>
              {new Date(period.startDate).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-data-message">No period history available.</p>
      )}

      <h2>Symptom Tracking</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Symptom</th>
            <th>Severity</th>
          </tr>
        </thead>
        <tbody>
          {symptomTracking.map((symptom) => (
            <tr key={symptom._id}>
              <td> {new Date(symptom.date).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}</td>
              <td>{symptom.symptom}</td>
              <td>{symptom.severity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
