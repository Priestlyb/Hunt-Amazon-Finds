import React, { useState } from "react";

const ReadMore = ({ content }) => {
    const [showFull, setShowFull] = useState(false);

    const words = content.split(" ");
    const limitedWords = words.slice(0, showFull ? words.length : 8).join(" ");

    return (
        <div>
            <p>{limitedWords}</p>

            {/* <p onClick={() => setShowFull(!showFull)}>
                {showFull ? "Show Less" : "Read More"}
            </p> */}

            <button className="cta Go_back_icon" onClick={() => setShowFull(!showFull)}>
                <span className="hover-underline-animation">
                    <a href='/#portfolios'>
                        {showFull ? "Show Less" : "Read More"}
                    </a>
                </span>
            </button>
        </div>
    );
};

export default ReadMore;
