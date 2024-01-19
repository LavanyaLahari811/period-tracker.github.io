import "./dashboard.styles.scss";
import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [periodHistory, setPeriodHistory] = useState([]);
  const [username, setUsername] = useState("");
  const [next_date, setNextDate] = useState("");
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

      setPeriodHistory(response.data[0].periodHistory);
      setNextDate(response.data[0].next_date);
      setSymptomTracking(response.data[0].symptomTracking);
      setUsername(response.data[1].username);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="dashboard-container">
      <h1>
        <b>
          <i><b>{username}</b></i>
        </b>
        , Welcome to Your Dashboard!
      </h1>

      <h2>Next period is on:</h2>
      {next_date ? (
        <p>
          {new Date(next_date).toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })}
        </p>
      ) : (
        <p className="no-data-message">No information as of now</p>
      )}

      <h2>Period History</h2>
      {periodHistory && periodHistory.length > 0 ? (
        <div className="period-history-container">
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
        </div>
      ) : (
        <p className="no-data-message">No period history available.</p>
      )}

      <h2>Symptom Tracking</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Symptom</th>
              <th>Severity</th>
            </tr>
          </thead>
          <tbody>
            {symptomTracking && symptomTracking.length > 0 ? (
              symptomTracking.map((symptom) => (
                <tr key={symptom._id}>
                  <td>
                    {" "}
                    {new Date(symptom.date).toLocaleDateString("en-US", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </td>
                  <td>{symptom.symptom}</td>
                  <td>{symptom.severity}</td>
                </tr>
              ))
            ) : (
              <p className="no-data-message" id="symptom">
                No history available.
              </p>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
