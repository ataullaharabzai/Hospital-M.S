import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { X, Plus } from "lucide-react";
import { getDoctors, getPatients } from "../../api";

function AddPatient() {
  const [doctors, setDoctors] = useState([]);
  const [patients, setPatients] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    bloodGroup: "",
    disease: "",
    doctor: "",
    admitted: "",
    room: "",
    phone: "",
    address: "",
    image: "",
    bloodPressure: "",
    heartRate: "",
    temperature: "",
    oxygenSaturation: "",
    weight: "",
    bmi: "",
    respiratoryRate: "",
    lastVisit: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPatient = {
      id: Date.now(),
      name: formData.name,
      age: formData.age,
      gender: formData.gender,
      bloodGroup: formData.bloodGroup,
      disease: formData.disease,
      doctor: formData.doctor,
      admitted: formData.admitted,
      room: formData.room,
      phone: formData.phone,
      address: formData.address,
      image: formData.image,

      vitals: {
        bloodPressure: formData.bloodPressure,
        heartRate: formData.heartRate,
        temperature: formData.temperature,
        oxygenSaturation: formData.oxygenSaturation,
        weight: formData.weight,
        bmi: formData.bmi,
        respiratoryRate: formData.respiratoryRate,
      },

      lastVisit: formData.lastVisit,
    };

    const existingPatients = JSON.parse(localStorage.getItem("patients")) || [];

    existingPatients.push(newPatient);

    localStorage.setItem("patients", JSON.stringify(existingPatients));

    navigate("/grid_patients");
  };

  useEffect(() => {
    getDoctors().then(setDoctors);
  }, []);

  useEffect(() => {
    getPatients().then(setPatients);
  }, []);

  return (
    <div className="p-6">
      <h1 className="mb-2 text-2xl font-semibold">Add Patient</h1>

      <p className="mb-6 text-gray-500">
        Add a new patient to the hospital system.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <section>
          <h2 className="mb-4 text-lg font-semibold">Basic Information</h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              name="name"
              placeholder="Patient name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <Input
              name="age"
              placeholder="Age"
              value={formData.age}
              onChange={handleChange}
              required
            />

            <Select
              name="doctor"
              placeholder="Doctor"
              value={formData.doctor}
              onChange={handleChange}
              children={doctors.map((doctor) => (
                <option key={doctor.id} value={doctor.name}>
                  {doctor.name}
                </option>
              ))}
            />

            <Select
              name="room"
              placeholder="Room"
              value={formData.room}
              onChange={handleChange}
              children={patients.map((patient) => (
                <option key={patient.id} value={patient.room}>
                  {patient.room}
                </option>
              ))}
            />

            <Input
              name="lastVisit"
              type="date"
              placeholder="Last Visit"
              value={formData.lastVisit}
              onChange={handleChange}
            />
          </div>
        </section>

        {/* Contact Information */}
        <section>
          <h2 className="mb-4 text-lg font-semibold">Contact Information</h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleChange}
            />

            <Input
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </section>

        {/* Professional Information */}
        <section>
          <h2 className="mb-4 text-lg font-semibold">
            Professional Information
          </h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Select
              name="bloodGroup"
              placeholder="Blood group"
              value={formData.bloodGroup}
              onChange={handleChange}
              children={["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"]}
            />

            <Select
              name="gender"
              placeholder="Gender"
              value={formData.gender}
              onChange={handleChange}
              children={["Male", "Female", "Prefer not to sya"]}
            />
          </div>
        </section>

        {/* Vitals */}

        <section>
          <h2 className="mb-4 text-lg font-semibold">Vitals</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            
            <Input
              name="disease"
              placeholder="Disease"
              value={formData.disease}
              onChange={handleChange}
            />

            <Select
              name="bloodPressure"
              placeholder="Blood Pressure"
              value={formData.bloodPressure}
              onChange={handleChange}
              children={[
                "90/60 mmHg",
                "100/70 mmHg",
                "110/70 mmHg",
                "120/80 mmHg",
                "125/80 mmHg",
                "130/85 mmHg",
                "140/90 mmHg",
                "150/95 mmHg",
                "160/100 mmHg",
                "180/110 mmHg",
              ]}
            />

            <Select
              name="heartRate"
              placeholder="Heart Rate"
              value={formData.heartRate}
              onChange={handleChange}
              children={[
                "55 BPM",
                "60 BPM",
                "65 BPM",
                "70 BPM",
                "75 BPM",
                "80 BPM",
                "85 BPM",
                "90 BPM",
                "95 BPM",
                "100 BPM",
                "110 BPM",
                "120 BPM",
              ]}
            />

            <Select
              name="temperature"
              placeholder="Temperature"
              value={formData.temperature}
              onChange={handleChange}
              children={[
                "36.0 °C",
                "36.5 °C",
                "36.8 °C",
                "37.0 °C",
                "37.2 °C",
                "37.5 °C",
                "38.0 °C",
                "38.5 °C",
                "39.0 °C",
                "39.5 °C",
                "40.0 °C",
              ]}
            />

            <Select
              name="oxygenSaturation"
              placeholder="Oxygen Saturation"
              value={formData.oxygenSaturation}
              onChange={handleChange}
              children={[
                "90%",
                "92%",
                "94%",
                "95%",
                "96%",
                "97%",
                "98%",
                "99%",
                "100%",
              ]}
            />

            <Select
              name="weight"
              placeholder="Weight"
              value={formData.weight}
              onChange={handleChange}
              children={[
                "50 kg",
                "55 kg",
                "60 kg",
                "65 kg",
                "70 kg",
                "75 kg",
                "80 kg",
                "85 kg",
                "90 kg",
                "95 kg",
                "100 kg",
                "110 kg",
              ]}
            />

            <Select
              name="bmi"
              placeholder="BMI"
              value={formData.bmi}
              onChange={handleChange}
              children={[
                "17.5",
                "18.5",
                "19.5",
                "20.5",
                "21.5",
                "22.5",
                "23.5",
                "24.5",
                "25.5",
                "27.5",
                "30.0",
                "32.5",
                "35.0",
              ]}
            />

            <Select
              name="respiratoryRate"
              placeholder="Respiratory Rate"
              value={formData.respiratoryRate}
              onChange={handleChange}
              children={[
                "10 breaths/min",
                "12 breaths/min",
                "14 breaths/min",
                "16 breaths/min",
                "18 breaths/min",
                "20 breaths/min",
                "22 breaths/min",
                "24 breaths/min",
                "26 breaths/min",
                "28 breaths/min",
                "30 breaths/min",
              ]}
            />
          </div>
        </section>

        {/* Bio */}
        <section>
          <h2 className="mb-4 text-lg font-semibold">About Patient</h2>

          <textarea
            name="bio"
            rows="5"
            placeholder="Write a short biography..."
            value={formData.bio}
            onChange={handleChange}
            className="w-full rounded-lg border p-3"
          />
        </section>

        {/* Actions */}
        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={() => navigate("/doctors")}
            className="rounded-lg border p-2 flex items-center gap-2 bg-rose-50 text-rose-500 hover:bg-rose-100 transition-all cursor-pointer hover:ring-2 ring-rose-300/50"
          >
            <X size={`17`} />
            <p className="text-[15px]">Cancel</p>
          </button>

          <button
            type="submit"
            className="rounded-lg bg-blue-50 hover:bg-blue-100 border border-blue-600 text-blue-800 px-3 py-2 hover:text-blue-600 transition-all flex items-center gap-2 cursor-pointer hover:ring-2 ring-blue-300/50"
          >
            <Plus size={`17`} />
            <p className="text-[15px]">Add Patient</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddPatient;
