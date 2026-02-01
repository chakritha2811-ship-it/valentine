"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const [noStyle, setNoStyle] = useState({});

  const yesBase = 16;
  const yesFontSizePx = Math.min(yesBase + noCount * 4, 44);

  const handleNoClick = () => {
    setNoCount((c) => c + 1);

    // random movement for No button
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 200 - 100;

    setNoStyle({
      transform: `translate(${x}px, ${y}px)`,
    });
  };

  const getNoButtonText = () => {
    const phrases = [
      "No 😐",
      "Wait… what? 🤨",
      "Are you sure? 🥺",
      "Think again 🙃",
      "Pls reconsider 😭",
      "Heyyy 😳",
      "That hurt 💔",
      "I’m gonna cry 🐻",
      "Last chance 😵‍💫",
      "Okay wow 😔",
    ];
    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16 overflow-hidden">
      {yesPressed ? (
        <>
          <img
            src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
            alt="Bear giving a kiss"
            className="max-h-[300px] rounded animate-bounce"
          />
          <div className="text-4xl font-bold my-4 text-pink-600">
            Yayyyy!! 💖🐻
          </div>
        </>
      ) : (
        <>
          <img
            className="h-[200px] object-contain"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
            alt="Cute bear with roses"
          />

          <h1 className="text-4xl my-4 text-center">
            Will you be my Valentine? 💘
          </h1>

          <div className="relative mt-4">
            <button
              aria-label="Accept — Yes"
              onClick={() => setYesPressed(true)}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded mr-6 transition-all duration-200 ease-out animate-[wiggle_0.3s_ease-in-out_infinite]"
              style={{ fontSize: `${yesFontSizePx}px` }}
            >
              Yes 💕
            </button>

            <button
              aria-label="Decline — No"
              onClick={handleNoClick}
              style={noStyle}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-transform duration-200"
            >
              {getNoButtonText()}
            </button>
          </div>
        </>
      )}

      {/* Wiggle animation */}
      <style jsx>{`
        @keyframes wiggle {
          0% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
          100% { transform: rotate(-2deg); }
        }
      `}</style>
    </div>
  );
}
