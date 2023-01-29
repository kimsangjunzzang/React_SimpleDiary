import React, { useState, useRef } from "react";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import "./App.css";

/*const dummyList = [
  {
    id: 1,
    author: "김상준",
    content: "하이 1",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "김상준",
    content: "하이 2",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "김상준",
    content: "하이 3",
    emotion: 5,
    created_date: new Date().getTime(),
  },
];
*/ function App() {
  const [data, setDate] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setDate([newItem, ...data]);
  };
  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setDate(newDiaryList);
  };
  const onEdit = (targetId, newContent) => {
    setDate(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };
  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
