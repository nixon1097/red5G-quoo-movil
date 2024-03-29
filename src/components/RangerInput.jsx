import React, { useState } from "react";

function RangerInput() {
  const [value, setValue] = useState(50);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="range"
        min={0}
        max={100}
        value={value}
        onChange={handleChange}
        className="w-280 h-16 bg-gray-200 rounded-full appearance-none focus:outline-none px-8"
        style={{ height: "6px" }}
      />
      {/* Punto azul */}
      <div
        className="absolute top-0 left-[calc(280 * (value / 100) - 10px)] -mt-2"
        style={{
          width: "20px",
          height: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          borderRadius: "50%",
          border: "4px solid #fff",
          backgroundImage: "url('https://via.placeholder.com/16')",
        }}
      />
      <p className="mt-2">Valor seleccionado: {value}</p>
    </div>
  );
}

export default RangerInput;
