import { useState } from "react";

const colors = {
  primary: "#C93C3C", // red
  text: "#FFFFFF",    // white
};

export default function ApplicationForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
    resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "resume") {
      setForm({ ...form, resume: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Application submitted!");
  };

  return (
    <section className="py-16 px-4"> {/* Dark background to contrast white text */}
      <h2 className="text-3xl font-bold text-center mb-6 text-white">Apply Now</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto grid gap-4"
        encType="multipart/form-data"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="border border-gray-400 bg-transparent text-white p-3 rounded w-full
            focus:outline-none focus:border-[#C93C3C] placeholder:text-gray-400"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="border border-gray-400 bg-transparent text-white p-3 rounded w-full
            focus:outline-none focus:border-[#C93C3C] placeholder:text-gray-400"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="border border-gray-400 bg-transparent text-white p-3 rounded w-full
            focus:outline-none focus:border-[#C93C3C] placeholder:text-gray-400"
          value={form.phone}
          onChange={handleChange}
        />
        <select
          name="position"
          className="border border-gray-400 bg-transparent text-white p-3 rounded w-full
            focus:outline-none focus:border-[#C93C3C]"
          value={form.position}
          onChange={handleChange}
          required
        >
          <option value="" className="text-gray-400">Select Position</option>
          <option value="customer-support">Customer Support</option>
          <option value="data-entry">Data Entry</option>
          <option value="technical-support">Technical Support</option>
        </select>
        <textarea
          name="coverLetter"
          placeholder="Cover Letter"
          rows="4"
          className="border border-gray-400 bg-transparent text-white p-3 rounded w-full
            focus:outline-none focus:border-[#C93C3C] placeholder:text-gray-400"
          value={form.coverLetter}
          onChange={handleChange}
        />
        <input
          type="file"
          name="resume"
          className="border border-gray-400 bg-transparent text-white p-3 rounded w-full
            focus:outline-none focus:border-[#C93C3C]"
          onChange={handleChange}
          accept=".pdf,.doc,.docx"
          required
        />
        <button
          type="submit"
          className="bg-[#C93C3C] text-white py-3 rounded hover:bg-[#a63232] transition"
        >
          Submit Application
        </button>
      </form>
    </section>
  );
}
