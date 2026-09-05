import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import Select from "../../components/Select";
import { Plus, X } from "lucide-react";

function AddDoctor() {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    faculty: "",
    bio: "",
    experience: "",
    clinic: "",
    address: "",
    image: "",
    licenseNumber: "",
    phone: "",
    email: "",
    location: "",
    dob: "",
    bloodGroup: "",
    gender: "",
    startFee: "",
    availability: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value, name } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDoctor = {
      id: Date.now(),
      name: formData.name,
      specialization: formData.specialty,
      faculty: formData.faculty,
      bio: formData.bio,
      experience: formData.experience,
      clinic: formData.clinic,
      address: formData.address,
      image: formData.image,
      startFee: formData.startFee,
      availability: formData.availability,
    //   gender: formData.gender,

      about: {
        licenseNumber: formData.licenseNumber,
        phone: formData.phone,
        email: formData.email,
        location: formData.location,
        dob: formData.dob,
        bloodGroup: formData.bloodGroup,
        gender: formData.gender,
      },
    };

    const existingDoctors = JSON.parse(localStorage.getItem("doctors")) || [];

    existingDoctors.push(newDoctor);

    localStorage.setItem("doctors", JSON.stringify(existingDoctors));

    navigate("/grid_doctors");
  };

  return (
    <div className="p-6">
      <h1 className="mb-2 text-2xl font-semibold">Add Doctor</h1>

      <p className="mb-6 text-gray-500">
        Add a new doctor to the hospital system.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Basic Information */}
        <section>
          <h2 className="mb-4 text-lg font-semibold">Basic Information</h2>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <Input
              name="name"
              placeholder="Doctor name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <Select
              name="specialty"
              placeholder="Specialty"
              value={formData.specialty}
              onChange={handleChange}
              children={[
                "Cardiology",
                "Neurology",
                "Pediatrics",
                "Orthopedic",
                "Dermatology",
                "General Medicine",
                "Gynecology",
                "Urology",
                "General",
                "Radiology",
                "ENT",
                "General Surgery",
                "Plastic Surgery",
                "Family Medicine",
              ]}
              required
            />

            <Select
              name="faculty"
              placeholder="Faculty / Degree"
              value={formData.faculty}
              onChange={handleChange}
              children={["MD", "MBBS"]}
            />

            <Select
              name="experience"
              placeholder="Experience e.g. 9 Years"
              value={formData.experience}
              onChange={handleChange}
              children={[
                "1",
                "2",
                "3",
                "4",
                "5",
                "6",
                "7",
                "8",
                "9",
                "10",
                "11",
                "12",
                "13",
                "14",
                "15",
              ]}
            />

            <Input
              name="clinic"
              placeholder="Clinic"
              value={formData.clinic}
              onChange={handleChange}
            />

            <Input
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
            <Select
              name="startFee"
              placeholder="Start Fee"
              value={formData.startFee}
              onChange={handleChange}
              children={["150", "200", "300", "400", "500"]}
            />
            <Select
              name="availability"
              placeholder="Availability"
              value={formData.availability}
              onChange={handleChange}
              children={["Busy", "Available", "On Leave"]}
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
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />

            <Input
              name="location"
              placeholder="Location"
              value={formData.location}
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
            <Input
              name="licenseNumber"
              placeholder="Medical license number"
              value={`AF-MED-${Math.floor(Math.random() * 200 + 1)}-${Math.floor(Math.random() * 10 + 1)}`}
              onChange={handleChange}
            />

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
              children={['Male', 'Female', 'Prefer not to sya']}
            />

            <Input
              name="dob"
              type="date"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>
        </section>

        {/* Bio */}
        <section>
          <h2 className="mb-4 text-lg font-semibold">About Doctor</h2>

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
            <p className="text-[15px]">Add Doctor</p>
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddDoctor;
