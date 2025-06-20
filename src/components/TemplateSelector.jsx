// src/components/TemplateSelector.jsx
function TemplateSelector({ selectedTemplate, onChange }) {
  const templates = [
    { id: "classic", label: "Classic" },
    { id: "minimal", label: "Minimal" },
    { id: "modern", label: "Modern" },
  ];

  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-3 text-blue-600">
        Choose Template
      </h3>
      <div className="flex gap-3">
        {templates.map((tpl) => (
          <button
            key={tpl.id}
            onClick={() => onChange(tpl.id)}
            className={`px-4 py-2 border rounded-md transition font-medium
              ${
                selectedTemplate === tpl.id
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-blue-50"
              }
            `}>
            {tpl.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TemplateSelector;
