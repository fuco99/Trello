import React, { useState, useEffect } from "react";
import Column from "../Column/Column";
import { isEmpty } from "lodash";
import { initialData } from "actions/initialData";
import { mapOrder } from "ultilities/Sorts";
import "./BoardContent.scss";
function BoardContent() {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);
  useEffect(() => {
    const boardFromDb = initialData.boards.find(
      (board) => board.id === "board-1"
    );
    if (boardFromDb) {
      setBoard(boardFromDb);
      setColumns(mapOrder(boardFromDb.columns, boardFromDb.columnOrder, "id"));
    }
  }, []);

  if (isEmpty(board)) {
    return (
      <div className="not-found" style={{ padding: "10px", color: "white" }}>
        Board not found
      </div>
    );
  }
  return (
    <div className="board-content">
      {columns.map((column, index) => {
        return <Column key={index} column={column} />;
      })}
    </div>
  );
}

export default BoardContent;
