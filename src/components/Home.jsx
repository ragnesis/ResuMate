import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function Home() {
  const navigate = useNavigate();

  useEffect(() => {
    const hash = window.location.hash;
    if (hash === "#about") {
      const el = document.getElementById("about-section");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 min-h-[calc(66vh-64px)] flex flex-col justify-center items-center text-center px-4">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          Build Your Resume in Minutes
        </h2>
        <p className="text-gray-600 max-w-xl mb-6 text-lg">
          A fast, free, and easy-to-use resume builder for students and
          professionals.
        </p>
        <button
          onClick={() => navigate("/builder")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-700 transition-all">
          Start Building
        </button>
      </section>

      {/* About Section */}
      <section id="about-section" className="bg-white py-12 px-6 text-center">
        <h3 className="text-2xl font-bold text-blue-700 mb-4">
          About ResuMate
        </h3>
        <p className="text-gray-700 max-w-2xl mx-auto mb-2">
          ResuMate is a lightweight and free resume generator created by{" "}
          <strong className="text-blue-600">Ragnesis</strong>. Designed for
          speed and simplicity, it helps you create professional resumes using
          modern templates.
        </p>
        <p className="text-sm text-gray-500">
          Built using React, TailwindCSS, and html2pdf.js.
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-4 text-center text-sm text-gray-500">
        Made with ❤️ by{" "}
        <span className="font-semibold text-blue-600">Ragnesis</span>
      </footer>
    </>
  );
}

export default Home;
