import tab_one_main from "@/assets/images/promo/tab_one_main.jpg";

import tab_one_logo from "@/assets/images/promo/tab_one_logo.png";

import tab_one_table from "@/assets/images/promo/tab_one_table.png";

const TabOne = () => {
  return (
    <div>
      <div className="bg-white my-3 rounded-lg p-3 shadow-lg">
        <img src={tab_one_main} alt="" />
      </div>

      <div className="bg-white my-3 rounded-lg p-3 shadow-lg">
        <div>
          <span className="font-semibold">活动对象： </span> 全站会员
        </div>
        <div>
          <span className="font-semibold">活动时间： </span> 长期活动
        </div>
        <div>
          <span className="font-semibold">活动内容： </span>{" "}
          活动期间，会员使用EBpay进行存款，每笔存款都可享受最高1%的返利，当天最高可返利1000元。仅需1倍流水即可出款！！！
        </div>

        <div>
          <img src={tab_one_table} className="my-2" alt="" />
        </div>

        <div>
          <img src={tab_one_logo} className="my-2" alt="" />
        </div>

        <div>
          <p>
            1.活动无需申请，满足条件的会员系统将会实时派发至中心钱包，仅需一倍流水即可取款。
          </p>
          <p>&nbsp;</p>
          <p>
            2.活动期内可多次参加，活动期内每一笔存款都将获得最高1%的彩金返利，单个用户单日上限金额为1000元；
          </p>
          <p>&nbsp;</p>
          <p>
            3.同一手机号、姓名、邮箱地址、银行卡号等信息的游戏账号，仅可参与一次，若有违规者，将不享受此红利；
          </p>
          <p>&nbsp;</p>
          <p>
            4.任何用户或团体以不正常的方式进行套取活动优惠，平台方保留在不通知的情况下冻结或关闭相关账户的权利，并不退还款项，且用户会被列入黑名单；
          </p>
        </div>
      </div>
    </div>
  );
};

export default TabOne;
