import React, { useState } from "react";
import axios from "axios";

const PassengerForm = () => {
  const [passengers, setPassengers] = useState([{ name: "", age: "", gender: "", contact: "", email: "", photo: null, idCard: null }]);

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newPassengers = [...passengers];
    newPassengers[index][name] = value;
    setPassengers(newPassengers);
  };

  const handleFileChange = (index, event) => {
    const { name, files } = event.target;
    const newPassengers = [...passengers];
    newPassengers[index][name] = files[0];
    setPassengers(newPassengers);
  };

  const addPassenger = () => {
    setPassengers([...passengers, { name: "", age: "", gender: "", contact: "", email: "", photo: null, idCard: null }]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    passengers.forEach((passenger, index) => {
      formData.append(`passengers[${index}][name]`, passenger.name);
      formData.append(`passengers[${index}][age]`, passenger.age);
      formData.append(`passengers[${index}][gender]`, passenger.gender);
      formData.append(`passengers[${index}][contact]`, passenger.contact);
      formData.append(`passengers[${index}][email]`, passenger.email);
      formData.append(`passengers[${index}][photo]`, passenger.photo);
      formData.append(`passengers[${index}][idCard]`, passenger.idCard);
    });

    try {
      const response = await axios.post("http://localhost:5000/api/passengers", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Data submitted:", response.data);
    } catch (error) {
      console.error("Error submitting data:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {passengers.map((passenger, index) => (
        <div key={index}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={passenger.name}
            onChange={(e) => handleInputChange(index, e)}
            required
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={passenger.age}
            onChange={(e) => handleInputChange(index, e)}
            required
          />
          <select
            name="gender"
            value={passenger.gender}
            onChange={(e) => handleInputChange(index, e)}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <input
            type="text"
            name="contact"
            placeholder="Contact"
            value={passenger.contact}
            onChange={(e) => handleInputChange(index, e)}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={passenger.email}
            onChange={(e) => handleInputChange(index, e)}
          />
          <input
            type="file"
            name="photo"
            accept="image/png"
            onChange={(e) => handleFileChange(index, e)}
          />
          <input
            type="file"
            name="idCard"
            accept="application/pdf"
            onChange={(e) => handleFileChange(index, e)}
          />
        </div>
      ))}
      <button type="button" onClick={addPassenger}>
        Add Passenger
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default PassengerForm;