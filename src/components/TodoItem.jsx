import React, { memo, useContext } from "react";
import "./TodoItem.css";
import { TodoDispatchContext } from "../App";

const TodoItem = ({ id, isDone, content, date }) => {
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

  const onChangeCheckbox = () => {
    onUpdate(id);
  };

  const onClickDeleteButton = () => {
    if (confirm("정말 삭제하시겠습니까?")) onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDeleteButton}>삭제</button>
    </div>
  );
};

// export default memo(TodoItem, (prevProps, nextProps) => {
//   // 반환값에 따라 Props가 바뀌었는지 안 바뀌었는지 판단
//   // T -> Props가 바뀌지 않았다고 판단 -> re-render 진행
//   // F -> Props가 바뀌었다고 판단 -> re-render X

//   if (prevProps.id !== nextProps.id) return false;
//   if (prevProps.isDone !== nextProps.isDone) return false;
//   if (prevProps.content !== nextProps.content) return false;
//   if (prevProps.date !== nextProps.date) return false;
//   return true;
// });

export default memo(TodoItem);
