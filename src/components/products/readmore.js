import React, { useState } from "react";

const ReadMore = ({ content }) => {
    const [showFull, setShowFull] = useState(false);

    const words = content.split(" ");
    const limitedWords = words.slice(0, showFull ? words.length : 8).join(" ");

    return (
        <div>
            <p>{limitedWords}</p>

            <p onClick={() => setShowFull(!showFull)}>
                {showFull ? "Show Less" : "Read More"}
            </p>
        </div>
    );
};

export default ReadMore;
