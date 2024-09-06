import React, { useState, useEffect } from "react";

// Function to save matrix data to the backend
const saveMatrixData = async (matrixData) => {
  try {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      throw new Error("No authentication token found.");
    }

    const response = await fetch(
      "https://pdfxcel-api.onrender.com/api/save-matrix",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ matrixData }),
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

// Function to load matrix data
const loadMatrixData = async (matrixId) => {
  try {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      throw new Error("No authentication token found.");
    }

    const response = await fetch(
      `https://pdfxcel-api.onrender.com/api/get-matrix/${matrixId}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to load matrix data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error loading matrix data:", error);
  }
};

// Function to load available matrices
const loadAvailableMatrices = async () => {
  try {
    const token = localStorage.getItem("jwtToken");

    if (!token) {
      throw new Error("No authentication token found.");
    }

    const response = await fetch(
      "https://pdfxcel-api.onrender.com/api/get-matrix-list",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
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

export const DataConvertMatrix = ({ onDataChange }) => {
  const [rows, setRows] = useState([{ columnName: "", transformation: "" }]);
  const [selectedMatrix, setSelectedMatrix] = useState("");
  const [availableMatrices, setAvailableMatrices] = useState([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Function to refresh the matrix dropdown
  const refreshMatrixDropdown = async () => {
    try {
      const matrices = await loadAvailableMatrices();
      setAvailableMatrices(matrices || []);
    } catch (error) {
      setError("Error fetching matrix list");
    }
  };

  // Load available matrices on component mount
  useEffect(() => {
    refreshMatrixDropdown();
  }, []);

  useEffect(() => {
    const fetchMatrixData = async () => {
      if (selectedMatrix) {
        try {
          // Load new matrix data
          const data = await loadMatrixData(selectedMatrix);
          if (data && Array.isArray(data)) {
            const matrixRows = data.map((item, index) => ({
              id: Date.now() + index,
              columnName: item.column_name || "",
              transformation: item.transformation || "",
            }));
            setRows(matrixRows);

            console.log("Loaded Matrix Data:", matrixRows); // Debugging log

            // Notify parent component of the data change
            onDataChange(matrixRows);
          } else {
            console.warn("No data found for the selected matrix.");
          }
        } catch (error) {
          setError("Error loading matrix data");
        }
      } else {
        // Clear rows if no matrix is selected
        setRows([{ columnName: "", transformation: "" }]);
        onDataChange([]); // Notify parent component of the data change
      }
    };

    fetchMatrixData();
  }, [selectedMatrix]); // eslint-disable-line react-hooks/exhaustive-deps

  //https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
  //https://overreacted.io/a-complete-guide-to-useeffect/
  //https://www.robinwieruch.de/react-hooks-fetch-data/

  const addRow = () => {
    setRows([...rows, { id: Date.now(), columnName: "", transformation: "" }]);
  };

  const clearRows = () => {
    setRows([{ id: Date.now(), columnName: "", transformation: "" }]);
    onDataChange([]); // Notify parent component of the data change
  };

  const deleteRow = (id) => {
    if (rows.length > 1) {
      setRows(rows.filter((row) => row.id !== id));
      onDataChange(rows.filter((row) => row.id !== id)); // Notify parent component of the data change
    }
  };

  const handleInputChange = (index, event) => {
    const { name, value } = event.target;
    const newRows = [...rows];
    newRows[index][name] = value;
    setRows(newRows);

    console.log("Updated Rows in DataConvertMatrix:", newRows); // Debugging log

    // Notify parent component of the data change
    onDataChange(newRows);
  };

  const handleSave = async () => {
    const matrixData = rows.map((row) => ({
      columnName: row.columnName,
      transformation: row.transformation,
    }));

    try {
      await saveMatrixData(matrixData);
      setSuccessMessage("Matrix saved successfully!");
      refreshMatrixDropdown(); // Refresh the dropdown list
    } catch (error) {
      setError("Error saving matrix data");
    }

    setTimeout(() => {
      setSuccessMessage("");
    }, 2000); // Hide the message after 2 seconds
  };

  const token = localStorage.getItem("jwtToken");

  return (
    <div className="flex items-center justify-center">
      <div className="p-4 bg-white shadow-md rounded-md w-full max-w-4xl">
        <h2 className="text-xl font-bold mb-4 pl-10">Map and Transform</h2>
        <form className="space-y-4 ps-10">
          {token && (
            <>
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
                  {Array.isArray(availableMatrices) &&
                    availableMatrices.map((matrix) => (
                      <option key={matrix.matrix_id} value={matrix.matrix_id}>
                        Matrix {matrix.matrix_id}
                      </option>
                    ))}
                </select>
              </div>
            </>
          )}

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
                  name="columnName"
                  value={row.columnName || ""}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="Column Name"
                  className="pl-3 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12"
                />
              </div>
              <div className="flex-1 col-span-2">
                <input
                  type="text"
                  name="transformation"
                  value={row.transformation || ""}
                  onChange={(e) => handleInputChange(index, e)}
                  placeholder="Optional"
                  className="pl-3 block w-full border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm h-12"
                />
              </div>
              <button
                type="button"
                onClick={() => deleteRow(row.id)}
                className={`bg-red-500 text-white p-2 rounded-md h-12 w-24 flex items-center justify-center ${
                  rows.length === 1 ? "cursor-not-allowed opacity-50" : ""
                }`}
                disabled={rows.length === 1}
              >
                Delete
              </button>
            </div>
          ))}

          <div className="flex space-x-4">
            <button
              type="button"
              onClick={addRow}
              className="bg-blue-500 text-white p-2 rounded-md h-12 w-24 flex items-center justify-center"
            >
              Add Row
            </button>
            <button
              type="button"
              onClick={clearRows}
              className="bg-gray-500 text-white p-2 rounded-md h-12 w-24 flex items-center justify-center"
            >
              Clear
            </button>
            {token && (
              <button
                type="button"
                onClick={handleSave}
                className="bg-green-500 text-white p-2 rounded-md h-12 w-24 flex items-center justify-center"
              >
                Save Matrix
              </button>
            )}
          </div>

          {successMessage && (
            <p className="text-green-500 text-sm mt-4">{successMessage}</p>
          )}
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      </div>
    </div>
  );
};
