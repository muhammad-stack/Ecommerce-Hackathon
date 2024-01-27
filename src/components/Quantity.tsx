"use client";
import { MinusCircle, PlusCircle } from "lucide-react";
import { useState } from "react";
const Quantity = () => {
  const [num, UseNum] = useState(1);

  return (
    <div className="center gap-x-2">
      {/* Minus */}
      <div>
        {" "}
        <button>
          <MinusCircle
            size={32}
            color="gray"
            onClick={() => {
              UseNum(num <= 1 ? 1 : num - 1);
            }}
          />
        </button>
      </div>
      {/* Number */}
      <span className="text-lg">{num}</span>
      {/* Addition */}
      <div>
        {" "}
        <button>
          <PlusCircle
            size={32}
            color="gray"
            onClick={() => {
              UseNum(num + 1);
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default Quantity;
