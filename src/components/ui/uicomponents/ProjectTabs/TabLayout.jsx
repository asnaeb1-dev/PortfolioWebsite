const TabLayout = ({tabList = [], currentTopic, handleClick}) => {
  return (
    <div className={`flex flex-col gap-1 w-fit items-center justify-center sticky top-0`}>
      <div className={`flex flex-row gap-2 border-2 p-1 rounded-3xl border-indigo-500`}>
        {
          tabList?.map((tabItem, index) => {
            return (
              <div
                onClick={() => handleClick(index)}
                key={index}
                className={`font-semibold transition-colors duration-500 cursor-pointer rounded-3xl border-transparent border-2 px-3 py-1 ${currentTopic === index ? "bg-indigo-500 text-white border-indigo-500": ""}`}
              >
                {tabItem}
              </div>
            )
          })
        }
      </div>

    </div>
  );
};

export default TabLayout;