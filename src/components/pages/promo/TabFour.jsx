import tab_four_btn1 from "@/assets/images/promo/tab_four_btn1.jpg";
import tab_four_btn2 from "@/assets/images/promo/tab_four_btn2.jpg";
import tab_four_btn3 from "@/assets/images/promo/tab_four_btn3.png";
const TabFour = () => {
  return (
    <div>
      <div className="bg-white my-5 rounded-lg p-3 shadow-lg">
        <img src={tab_four_btn1} alt="" />
      </div>

      <div className="bg-white my-5 rounded-lg p-3 shadow-lg">
        <img src={tab_four_btn2} alt="" />
        <img src={tab_four_btn3} className="w-1/2 mx-auto my-5" alt="" />
      </div>
    </div>
  );
};

export default TabFour;
