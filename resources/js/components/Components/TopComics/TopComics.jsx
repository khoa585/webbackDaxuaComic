import React from "react";
import TopDays from "../Home/components/TopComics/TopDays";
import TopMonth from "../Home/components/TopComics/TopMonth";
import TopWeek from "../Home/components/TopComics/TopWeek";


export default React.memo(function TopComics() {
  const [tab, setTab] = React.useState(1);

  const setTabNav = (task) => {
    setTab(task);
  };
  return (
    <>
      <div className="tab_Nav">
        <li
          className={`nav_Item ${tab === 1 ? "active" : ""}`}
          onClick={() => setTabNav(1)}
        >
          <span>Top Tháng</span>
        </li>
        <li
          className={`nav_Item ${tab === 2 ? "active" : ""}`}
          onClick={() => setTabNav(2)}
        >
          <span>Top Tuần</span>
        </li>
        <li
          className={`nav_Item ${tab === 3 ? "active" : ""}`}
          onClick={() => setTabNav(3)}
        >
          <span>Top Ngày</span>
        </li>
      </div>
      <div className="tab-pane">
        <div id="topMonth">{tab === 1 && <TopMonth />}</div>
        <div id="topWeek">{tab === 2 && <TopWeek />}</div>
        <div id="topDay">{tab === 3 && <TopDays />}</div>
      </div>
    </>
  );
})
