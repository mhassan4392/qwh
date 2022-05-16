import MineAccount from "../components/pages/mine/Account";
import MineNavbar from "../components/pages/mine/Navbar";
import Wallet from "../components/pages/mine/Wallet";

const Mine = () => {
  return (
    <div className="">
      <header>
        <MineNavbar />
      </header>
      <Wallet />
      <MineAccount />
    </div>
  );
};

export default Mine;
