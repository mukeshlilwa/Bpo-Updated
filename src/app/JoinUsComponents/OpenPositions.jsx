"use client";

const colors = {
  primary: "#C93C3C",       // Red
  secondary: "#1E293B",     // Navy base
  accent: "#E74C3C",
  lightBg: "#FFF5F5",       // Light red background
  lightText: "#FFFFFF",
};

export default function OpenPositions() {
  const jobs = [
    {
      title: "Customer Support Executive",
      location: "Remote - Night Shift",
      type: "Full Time",
    },
    {
      title: "Technical Support Agent",
      location: "On-Site - Pune",
      type: "Full Time",
    },
    {
      title: "Data Entry Specialist",
      location: "Remote",
      type: "Part Time",
    },
  ];

  return (
    <section className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 xl:mx-10 2xl:mx-12 py-20">
      <div className="mb-12">
        <h2 className="text-3xl font-bold" style={{ color: colors.primary }}>
          We’re Hiring!
        </h2>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
        {jobs.map((job, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden px-6 pt-10 pb-8 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl rounded-xl"
            style={{ backgroundColor: colors.secondary }}
          >
            {/* Hover Circle */}
            <span
              className="absolute top-10 left-1/2 -translate-x-1/2 z-0 h-20 w-20 rounded-full transition-all duration-300 group-hover:scale-[10]"
              style={{ backgroundColor: colors.primary }}
            ></span>

            {/* Job Icon or Placeholder Circle */}
            <div
              className="relative z-10 flex items-center justify-center w-20 h-20 mx-auto rounded-full transition-all duration-300 group-hover:brightness-110"
              style={{ backgroundColor: colors.primary }}
            >
              <span className="text-white text-xl font-bold">
                {job.title.split(" ")[0][0]}
              </span>
            </div>

            {/* Card Content */}
            <div className="relative z-10 pt-6 space-y-2 text-center">
              <h3
                className="text-xl font-semibold transition"
                style={{ color: colors.lightText }}
              >
                {job.title}
              </h3>
              <p className="text-sm" style={{ color: "#e0e0e0" }}>
                📍 {job.location}
              </p>
              <p className="text-sm" style={{ color: "#ccc" }}>
                🕒 {job.type}
              </p>

              <button
                className="mt-4 px-5 py-2 font-semibold rounded-full transition"
                style={{
                  backgroundColor: colors.accent,
                  color: "white",
                }}
              >
                Apply Now
              </button>
            </div>

            {/* Hover Gradient Overlay */}
            <div
              className="absolute inset-0 z-0 transition-all duration-300 opacity-0 group-hover:opacity-100 rounded-xl"
              style={{
                background: "linear-gradient(135deg, #C93C3C, #2C3E50)",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
