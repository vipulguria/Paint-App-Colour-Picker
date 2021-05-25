import React, { useState } from "react";

function Selection(props) {
  const { applyColor } = props;
  let [selectionStyle, updateSelectionStyle] = useState({
    backgroundColor: ""
  });
  return (
    <div
      className="fix-box"
      style={selectionStyle}
      onClick={() => {
        applyColor(updateSelectionStyle);
      }}
    >
      <h2 className="subHeading">Selection</h2>
    </div>
  );
}

export default Selection;

