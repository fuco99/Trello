import React, { useState, useEffect } from "react";
import { Container, Draggable } from "react-smooth-dnd";
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
  const onColumnDrop = (dropResult) => {
    console.log(dropResult);
  };
  return (
    <div className="board-content">
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        getChildPayload={(index) => {
          return columns[index];
        }}
        dragHandleSelector=".column-drag-handle"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: "columns-drop-preview",
        }}
      >
        {columns.map((column, index) => (
          <Draggable key={index}>
            <Column column={column} />
          </Draggable>
        ))}
      </Container>
    </div>
  );
}

export default BoardContent;
