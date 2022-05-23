const PrivilegeSection2 = () => {
  const features = [
    { title: "100.00", subtitle: "最低转账" },
    { title: "30.00%", subtitle: "红利比例" },
    { title: "888.00", subtitle: "最高奖金" },
    { title: "12.00倍", subtitle: "流水倍数" },
    { title: "每月1次", subtitle: "次数限制" },
    { title: "指定场馆", subtitle: "游戏场馆" },
  ];
  return (
    <div className="px-4 bg-white py-4 my-3">
      <div>
        <div className="border-l-[3px] text-sm border-primary pl-3">
          VIP4晋级优惠
        </div>
        <div className="grid grid-cols-3 gap-5 items-center justify-between px-4 pt-4">
          {features.map((feature, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center space-y-1.5"
            >
              <div className="font-medium text-primary">{feature.title}</div>
              <div className="text-light text-xs">{feature.subtitle}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between text-xs px-3 mx-3 rounded py-5 mt-3 bg-common-bg">
        <div className="flex items-center space-x-2">
          <div>选择场馆</div>
          <div className="px-5 py-1 text-primary border border-primary rounded">
            -请选择-
          </div>
        </div>
        <div>
          <div className="bg-primary text-white px-4 py-1 rounded bg-opacity-60">
            等级不符
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivilegeSection2;
