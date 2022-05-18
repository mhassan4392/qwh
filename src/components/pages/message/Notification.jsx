import sound from "@/assets/images/message/sound.png";

const Notification = () => {
  return (
    <div className="flex items-center w-screen">
      <div className="shrink-0 pl-2">
        <img src={sound} className="w-6" alt="" />
      </div>
      <div className="grow overflow-hidden px-2 border-b py-4">
        <div className="flex items-center justify-between mb-2">
          <div className="basis-1/2 truncate text-xs">
            【Flygram重要通知！】
          </div>
          <div className="basis-1/2 flex justify-end text-light text-xs">
            2022-05-18
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="basis-3/4 overflow-hidden">
            <p className="truncate text-light text-xs">
              尊敬的球王会会员： Flygram 此次更新会强制重置用户名
              注意事项：设置用户名不能为纯数字，请按照提示设置用户名（用户名设置请6位以上数字和字母组合，不包含符号）
              如验证密码错误 请联系您的专属客服为您处理
              如未添加上专属客服请联系在线客服获取专员其他方式协助您
              Flygram下载链接：http://fb-xz.com
            </p>
          </div>
          <div className="basis-1/4 flex justify-end items-center">
            <div className="w-2 h-2 rounded-full bg-primary"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
