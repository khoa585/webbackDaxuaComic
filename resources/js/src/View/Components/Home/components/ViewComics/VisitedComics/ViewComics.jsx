import React from "react";
import Item from "./Item";
const DATA = [
  {
    "id": "1",
    "image": "http://st.truyenchon.com/data/comics/143/thong-linh-phi.jpg",
    "views": "116956702",
    "description": "Sư phụ nói vận mệnh không phải do trời định, vận mệnh là do tự mình nỗ lực mà thay đổi. Cho nên ta không tin vận mệnh là do trời định ~ Ta chỉ tin vào bản thân, ta là ngời mà không ai có thể kiểm soát. Chuyện cô ấy và (các) vương gia =))...",
    "author": "Đang cập nhật",
    "name": "Thông Linh Phi",
    "namecategory": ["Action", "Drama", "Mystery", "Truyện Màu"]
  },
  {
    "id": "2",
    "image": "http://st.truyenchon.com/data/comics/84/bach-luyen-thanh-than.jpg",
    "views": "110730121",
    "description": "Cảnh giới: Luyện nhục cảnh, Luyện cốt cảnh, Luyện tạng cảnh....\nLa Chính vì gái mà bị đày làm nô bộc. La Bái Nhiên tham vọng đầy mình :))\nLa Chính lại vì gái mà đâm đầu tu luyện :))\nLa Gia trong phủ nước sôi lửa bỏng, tranh giành kịch liệt... thôi thì đọc tiếp sẽ biết :)\n1 thanh niên dại gái tu luyện võ công =))", "image": "http://st.truyenchon.com/data/comics/84/bach-luyen-thanh-than.jpg",
    "author": "Đang cập nhật",
    "name": "Bách Luyện Thành Thần",
    "namecategory": ["Comedy", "Historical", "Manhua", "Mystery", "Ngôn Tình", "Romance", "Shoujo", "Truyện Màu"]
  }
]

export default function ViewComics() {
 
 
  return (
    <div className="visited-comics">
      <div className="visited_History">
        <h6>Lịch sử đọc truyện</h6>
        <span className="view-all">Xem tất cả</span>
      </div>
      <div className="list-History-Store">
        {DATA.map((item, index) => {
          return <Item item={item} key={item.id}></Item>
        })}
      </div>
    </div>
  );
}
