import React, { useEffect, useState } from "react";
import axios from "axios";

const PassengerTable = () => {
  const [passengers, setPassengers] = useState([]);

  useEffect(() => {
    const fetchPassengers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/passengers");
        setPassengers(response.data);
      } catch (error) {
        console.error("Error fetching passengers:", error);
      }
    };
    fetchPassengers();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Photo</th>
          <th>ID Card</th>
        </tr>
      </thead>
      <tbody>
        {passengers.map((passenger, index) => (
          <tr key={index}>
            <td>{passenger.name}</td>
            <td>{passenger.age}</td>
            <td>{passenger.gender}</td>
            <td>{passenger.contact}</td>
            <td>{passenger.email}</td>
            <td>
              <img src={`http://localhost:5000/uploads/${passenger.photo}`} alt="Passenger" width="50" />
            </td>
            <td>
              <a href={`http://localhost:5000/uploads/${passenger.idCard}`} download>
                Download
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PassengerTable;