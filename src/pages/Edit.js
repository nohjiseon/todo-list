import { useState } from "react";
import Cheerup from "../images/Cheerup.png";

const Edit = () => {
  const TodoBasic = [
    {
      id: 1,
      list: "아침 8시 기상"
    },
    {
      id: 2,
      list: "하루 10분 이상 운동하기"
    },
    {
      id: 3,
      list: "방 청소하기"
    },
    {
      id: 4,
      list: "깃허브 잔디심기"
    },
    {
      id: 5,
      list: "하루 수업 내용 복습하기"
    }
  ];

  const [checkedItems, setCheckedItems] = useState({});

  const chkHandler = id => {
    setCheckedItems(prevCheckedItems => ({
      // 이전에 저장된 항목들의 상태를 유지하기 위해 작성
      ...prevCheckedItems,

      [id]: !prevCheckedItems[id]
    }));
  };

  return (
    <main>
      <img src={Cheerup} />
      <ul className="todo_list">
        {TodoBasic.map(it => (
          <li key={it.id} className={checkedItems[it.id] ? "active" : ""}>
            <input type="checkbox" id={it.id} className="hide list_chk" onChange={() => chkHandler(it.id)} />
            <label htmlFor={it.id}>{it.list}</label>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Edit;
