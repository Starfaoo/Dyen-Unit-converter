import React from "react";


export const Text=(props) => {
    const {type, children,  } = props;

    const inputLabelStyle = {
        textAlign: "center",
        padding: "10px 0",
      };

    if (type==="h1") {
        return <h1 style={{...props}}>{children}</h1>
}

if (type==="h3") {
    return <h3 style={{ padding: "20px 0", textAlign: "center" }}>{children}</h3>
}

if (type==="p") {
    return <p  style={inputLabelStyle} >{children}</p>
}

return(
    <>
    <span style={{ padding: "50px 0" }}>{children}</span>

    </>
);
}