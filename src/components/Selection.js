import React, { useState } from "react";

function Selection(props) {
  const { applyColor, itemNumber } = props;
  let [selectionStyle, updateSelectionStyle] = useState({
    backgroundColor: ""
  });
  return (
    <div
      id={itemNumber}
      className="fix-box"
      style={selectionStyle}
      onClick={() => {
        applyColor(updateSelectionStyle);
      }}
    >
      Selection
    </div>
  );
}

export default Selection;
