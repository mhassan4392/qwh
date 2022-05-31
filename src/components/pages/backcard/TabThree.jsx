import { useState } from "react";

import nodata from "@/assets/images/bankcard/nodata.webp";

const TabThree = () => {
  const [cards, setCards] = useState([]);

  return (
    <div>
      {cards.length == 0 && (
        <div className="px-6 mt-20">
          <img src={nodata} className="w-full" alt="" />
        </div>
      )}

      {cards.map((card, i) => (
        <div key={i} className="bg-white rounded-lg my-4 p-3 space-y-3">
          <div className="flex items-center justify-between">
            <div>{card.AccountName}</div>
            <div>{card.BankName}</div>
          </div>
          <div>{card.AccountNo}</div>
        </div>
      ))}
    </div>
  );
};

export default TabThree;
