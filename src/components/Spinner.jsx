import React from "react";
import { Loader2 } from "lucide-react";

function Spinner() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Loader2 className="animate-spin w-10 h-10 md:w-12 md:h-12 text-gray-500" />
    </div>
  );
}

export default Spinner;
