import React from "react";

import CustomButton from "./CustomButton";

const AIPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask Ai.."
        rows={5}
        className="aipicker-textarea"
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
      />
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            customStyles="text-xs"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleSubmit={() => handleSubmit('logo')}
              customStyles="text-xs"
            ></CustomButton>
            <CustomButton
              type="filled"
              title="AI Full"
              handleSubmit={() => handleSubmit('full')}
              customStyles="text-xs"
            ></CustomButton>
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
