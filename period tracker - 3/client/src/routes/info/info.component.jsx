import "./info.styles.scss";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Info = () => {
  const [date, setDate] = useState("");
  const [cycle_length, setLength] = useState("");
  const [symptoms, setSymptoms] = useState([]);
  const [severity, setSeverity] = useState("");
  const periodHistory = {
    startDate: date,
    cycleLength: cycle_length,
  };
  const symptomTracking = {
    date: date,
    symptom: symptoms,
    severity: severity,
  };

  const date_object = new Date(date);
  const next_date = new Date(
    date_object.getTime() + cycle_length * 24 * 60 * 60 * 1000
  );

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();

    const id = localStorage.getItem("userId");

    if (!id) {
      navigate("/auth");
    } else {
      try {
        await axios.post("http://localhost:3000/main/info", {
          user_id: id,
          date: date,
          cycle_length,
          periodHistory,
          symptomTracking,
          next_date,
        });
        navigate("/dashboard");
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <div>
      <Form
        date={date}
        setDate={setDate}
        cycle_length={cycle_length}
        setLength={setLength}
        symptoms={symptoms}
        setSymptoms={setSymptoms}
        severity={severity}
        setSeverity={setSeverity}
        onSubmit={onSubmit}
        id_u="start_date"
        id_p="length"
        id_sym="symptoms"
        id_sev="severity"
      />
    </div>
  );
};

const Form = ({
  date,
  setDate,
  cycle_length,
  setLength,
  symptoms,
  setSymptoms,
  severity,
  setSeverity,
  onSubmit,
  id_u,
  id_p,
  id_sym,
  id_sev,
}) => {
  return (
    <div className="auth-container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="date">Start date:</label>
          <input
            type="date"
            id={id_u}
            value={date}
            onChange={(event) => {
              setDate(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Cycle length:</label>
          <input
            type="number"
            id={id_p}
            value={cycle_length}
            onChange={(event) => {
              setLength(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="symptom">Symptoms:</label>
          <input
            type="text"
            id={id_sym}
            value={symptoms}
            onChange={(event) => {
              setSymptoms(event.target.value);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="severity">severity:</label>

          <input
            type="range"
            name="severity"
            min="1"
            max="10"
            step="1"
            value={severity}
            onChange={(event) => {
              setSeverity(event.target.value);
            }}
          />
          <span>{severity}</span>
        </div>

        <button type="submit" id="button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Info;
