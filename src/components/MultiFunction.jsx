import React, { useState } from "react";

const OptionBox = ({ options, onSelect }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        padding: "10px",
        maxHeight: "150px",
        overflowY: "auto",
      }}
    >
      {options.map((option) => (
        <div
          key={option.value}
          style={{
            cursor: "pointer",
            padding: "8px",
            borderBottom: "1px solid #eee",
            backgroundColor: option.selected ? "#e0e0e0" : "transparent", // Highlight selected options
          }}
          onClick={() => onSelect(option)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

const MultiSelect = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [allOptions, setAllOptions] = useState([
    { value: "option1", label: "Option 1", selected: false },
    { value: "option2", label: "Option 2", selected: false },
    // Add more options as needed
  ]);

  const handleMoveToSelected = () => {
    // Move selected options from allOptions to selectedOptions
    const newlySelectedOptions = allOptions.filter((option) => option.selected);
    setSelectedOptions([...selectedOptions, ...newlySelectedOptions]);
    // Remove selected options from allOptions
    const updatedOptions = allOptions.filter((option) => !option.selected);
    setAllOptions(updatedOptions);
  };

  const handleMoveToAll = () => {
    // Move selected options from selectedOptions to allOptions
    const newlySelectedOptions = selectedOptions
      .filter((option) => option.selected)
      .map((option) => ({ ...option, selected: false }));
    const updatedOptions = [...allOptions, ...newlySelectedOptions];
    // Clear selected options in selectedOptions
    setSelectedOptions([]);
    // Update the selected state for options in allOptions
    setAllOptions(updatedOptions);
  };

  const handleSelectOption = (selectedOption) => {
    // Toggle the selected state of the clicked option
    const updatedOptions = allOptions.map((option) =>
      option.value === selectedOption.value
        ? { ...option, selected: !option.selected }
        : option
    );
    setAllOptions(updatedOptions);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "400px",
        margin: "20px",
      }}
    >
      <OptionBox options={allOptions} onSelect={handleSelectOption} />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "10px",
        }}
      >
        <button
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "5px 10px",
            cursor: "pointer",
          }}
          onClick={handleMoveToSelected}
        >
          &lt;&lt;
        </button>
        <button
          style={{
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "5px 10px",
            cursor: "pointer",
            marginTop: "10px",
          }}
          onClick={handleMoveToAll}
        >
          &gt;&gt;
        </button>
      </div>

      <OptionBox options={selectedOptions} onSelect={handleSelectOption} />
    </div>
  );
};

export default MultiSelect;
