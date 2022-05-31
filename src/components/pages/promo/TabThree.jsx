import tab_three_btn1 from "@/assets/images/promo/tab_three_btn1.jpg";
import tab_three_btn2 from "@/assets/images/promo/tab_three_btn2.jpg";
import tab_three_btn3 from "@/assets/images/promo/tab_three_btn3.png";
const TabThree = () => {
  return (
    <div>
      <div className="bg-white my-5 rounded-lg p-3 shadow-lg">
        <img src={tab_three_btn1} alt="" />
      </div>

      <div className="bg-white my-5 rounded-lg p-3 shadow-lg">
        <img src={tab_three_btn2} alt="" />
        <img src={tab_three_btn3} className="w-1/2 mx-auto my-5" alt="" />
      </div>
    </div>
  );
};

export default TabThree;
