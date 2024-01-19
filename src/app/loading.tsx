import React from "react";

function Loading() {
  return (
    <div className="fixed  w-full h-full flex items-center justify-center bg-opacity-75  z-50">
      <div className="animate-spin rounded-full h-16 w-16 border-t-8 border-primary"></div>
    </div>
  );
}

export default Loading;
