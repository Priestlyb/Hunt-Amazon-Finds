import React, { useState } from "react";

const Titlereadmore = ({ content }) => {
    const [showFull, setShowFull] = useState(false);

    const words = content.split(" ");
    const limitedWords = words.slice(0, showFull ? words.length : 4).join(" ");

    return (
        <div>
            <p>{limitedWords}</p>
        </div>
    );
};

export default Titlereadmore;
