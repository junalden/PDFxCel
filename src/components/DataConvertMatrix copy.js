import React, { useEffect, useState } from "react";

// Function to save matrix data to the backend
const saveMatrixData = async (matrixData) => {
  try {
    const token = localStorage.getItem("jwtToken"); // Retrieve JWT token

    const response = await fetch(
      "https://pdfxcel-api.onrender.com/api/save-matrix",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include JWT token in header
        },
        body: JSON.stringify({ matrixData }), // Send JSON string as the request body
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Failed to save matrix data. Status:", response.status);
      console.error("Response Text:", errorText);
      throw new Error("Failed to save matrix data");
    }

    const result = await response.json();
    console.log("Save Matrix Response:", result);
    return result;
  } catch (error) {
    console.error("Error saving matrix data:", error);
  }
};

// // Function to load matrix data
// const loadMatrixData = async (matrixId) => {
//   try {
//     const token = localStorage.getItem("jwtToken"); // Retrieve JWT token

//     const response = await fetch(
//       `https://pdfxcel-api.onrender.com/api/get-matrix/${matrixId}`,
//       {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`, // Include JWT token in header
//         },
//       }
//     );

//     if (!response.ok) {
//       throw new Error("Failed to load matrix data");
//     }
//     return await response.json();
//   } catch (error) {
//     console.error("Error loading matrix data:", error);
//   }
// };

// Function to get list of available matrices
const loadAvailableMatrices = async () => {
  try {
    const token = localStorage.getItem("jwtToken"); // Retrieve JWT token

    const response = await fetch(
      "https://pdfxcel-api.onrender.com/api/get-matrix-list",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Include token in header
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to load matrix list");
    }
    return await response.json();
  } catch (error) {
    console.error("Error loading matrix list:", error);
  }
};

export const DataConvertMatrix = () => {
  const [rows, setRows] = useState([{ id: Date.now() }]);
  const [selectedMatrix, setSelectedMatrix] = useState("");
  const [availableMatrices, setAvailableMatrices] = useState([]);
  const [error, setError] = useState("");

  // Load available matrices
  useEffect(() => {
    const fetchAvailableMatrices = async () => {
      try {
        const matrices = await loadAvailableMatrices();
        setAvailableMatrices(matrices);
      } catch (error) {
        setError("Error fetching matrix list");
      }
    };

    fetchAvailableMatrices();
  }, []);

  // Load matrix data when selectedMatrix changes
  useEffect(() => {
    const fetchMatrixData = async () => {
      if (selectedMatrix) {
        try {
          const data = await loadAvailableMatrices.Data(selectedMatrix);
          const matrixRows = data?.rows || [];
          setRows(
            matrixRows.map((item, index) => ({
              id: Date.now() + index,
              columnName: item.column_name,
              transformation: item.transformation,
            }))
          );
        } catch (error) {
          setError("Error loading matrix data");
        }
      }
    };

    fetchMatrixData();
  }, [selectedMatrix]);

  const addRow = () => {
    setRows([...rows, { id: Date.now() }]);
  };

  const deleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleSave = async () => {
    const matrixData = rows.map((row) => ({
      columnName: row.columnName,
      transformation: row.transformation,
    }));
    await saveMatrixData(matrixData);
  };

  return (
    <div className="flex items-center justify-center">
      <div className="p-4 bg-white shadow-md rounded-md w-full max-w-4xl">
        <h2 className="text-xl font-bold mb-4 pl-10">Map and Transform</h2>
        <form className="space-y-4 ps-10">
          <div className="mb-4">
            <label
              htmlFor="matrix-select"
              className="block mb-2 text-sm font-medium text-gray-700"
            >
              Select Matrix
            </label>
            <select
              id="matrix-select"
              value={selectedMatrix}
              onChange={(e) => setSelectedMatrix(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md shadow-sm"
            >
              <option value="">-- Select Matrix --</option>
              {availableMatrices.map((matrix) => (
                <option key={matrix.matrix_id} value={matrix.matrix_id}>
                  Matrix {matrix.matrix_id}
                </option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-5 gap-4 items-center mb-4">
            {rows.length > 0 && (
              <>
                <div className="font-medium text-gray-700 col-span-2">
                  Column Name
                  <div className="text-sm font-light text-gray-700 col-span-2">
                    Select the data from your PDF that will have columns.
                  </div>
                </div>
                <div className="font-medium text-gray-700 col-span-2">
                  Transformation
                  <div className="text-sm font-light text-gray-700 col-span-2">
                    Type in required transformation. Ex: Remove text, all
                    capital letters.
                  </div>
                </div>
                <div></div> {/* Empty cell for the Delete button column */}
              </>
            )}
          </div>

          {rows.map((row, index) => (
            <div key={row.id} className="grid grid-cols-5 gap-4 items-center">
              <div className="flex-1 col-span-2">
                <input
                  type="text"
                  value={row.columnName || ""}
                  onChange={(e) => {
                    const newRows = [...rows];
                    newRows[index].columnName = e.target.value;
                    setRows(newRows);
                  }}
                  placeholder="Column Name"
                  className="pl-3 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12"
                />
              </div>
              <div className="flex-1 col-span-2">
                <input
                  type="text"
                  value={row.transformation || ""}
                  onChange={(e) => {
                    const newRows = [...rows];
                    newRows[index].transformation = e.target.value;
                    setRows(newRows);
                  }}
                  placeholder="Optional"
                  className="pl-3 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12"
                />
              </div>
              <button
                type="button"
                onClick={() => deleteRow(row.id)}
                className="bg-red-500 text-white p-2 rounded-md h-12 w-24 flex items-center justify-center"
              >
                Delete
              </button>
            </div>
          ))}

          <button
            type="button"
            onClick={addRow}
            className="bg-blue-500 text-white p-2 rounded-md h-12 w-24 flex items-center justify-center"
          >
            Add Row
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="bg-green-500 text-white p-2 rounded-md h-12 w-24 flex items-center justify-center mt-4"
          >
            Save Matrix
          </button>

          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      </div>
    </div>
  );
};
