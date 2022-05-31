import tab_two_btn1 from "@/assets/images/promo/tab_two_btn1.jpg";
import tab_two_btn2 from "@/assets/images/promo/tab_two_btn2.jpg";
import tab_two_btn3 from "@/assets/images/promo/tab_two_btn3.png";
const TabTwo = () => {
  return (
    <div>
      <div className="bg-white my-5 rounded-lg p-3 shadow-lg">
        <img src={tab_two_btn1} alt="" />
      </div>

      <div className="bg-white my-5 rounded-lg p-3 shadow-lg">
        <img src={tab_two_btn2} alt="" />
      </div>
      <div className="bg-white my-5">
        <img src={tab_two_btn3} className="w-1/2 mx-auto" alt="" />
      </div>
    </div>
  );
};

export default TabTwo;
