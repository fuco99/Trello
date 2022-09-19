import React, { useState, useEffect, useRef, useCallback } from "react";
import { Container, Draggable } from "react-smooth-dnd";
import Column from "../Column/Column";
import { isEmpty } from "lodash";
import { initialData } from "actions/initialData";
import { mapOrder } from "ultilities/Sorts";
import { applyDrag } from "ultilities/dragDrop";
import "./BoardContent.scss";
import {
  Row,
  Col,
  Container as BootContainer,
  Form,
  Button,
} from "react-bootstrap";
function BoardContent() {
  const [board, setBoard] = useState({});
  const [columns, setColumns] = useState([]);
  const [newColumnTitle, setNewColumnTitle] = useState("");
  const [openNewColumn, setOpenNewColumn] = useState(false);
  const newColumnInputRef = useRef(null);
  const onNewColumnTitleChange = useCallback(
    (e) => setNewColumnTitle(e.target.value),
    []
  );
  useEffect(() => {
    const boardFromDb = initialData.boards.find(
      (board) => board.id === "board-1"
    );
    if (boardFromDb) {
      setBoard(boardFromDb);
      setColumns(mapOrder(boardFromDb.columns, boardFromDb.columnOrder, "id"));
    }
  }, []);

  useEffect(() => {
    if (newColumnInputRef && newColumnInputRef.current) {
      newColumnInputRef.current.focus();
      newColumnInputRef.current.select();
    }
  }, [openNewColumn]);

  if (isEmpty(board)) {
    return (
      <div className="not-found" style={{ padding: "10px", color: "white" }}>
        Board not found
      </div>
    );
  }
  const onColumnDrop = (dropResult) => {
    let newColumns = [...columns];
    newColumns = applyDrag(newColumns, dropResult);
    let newBoard = { ...board };
    newBoard.columnOrder = newColumns.map((column) => column.id);
    newBoard.columns = newColumns;
    setBoard(newBoard);
    setColumns(newColumns);
  };
  const onCardDrop = (columnId, dropResult) => {
    if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {
      let newColumns = [...columns];
      let currentColumn = newColumns.find((c) => c.id === columnId);
      currentColumn.cards = applyDrag(currentColumn.cards, dropResult);
      currentColumn.cardOrder = currentColumn.cards.map((item) => item.id);
      setColumns(newColumns);
    }
  };
  const toggleNewColumn = () => setOpenNewColumn(!openNewColumn);

  const addNewColumn = () => {
    if (!newColumnTitle) {
      newColumnInputRef.current.focus();
      return;
    }
    const newColumnToAdd = {
      id: Math.random().toString(36).substr(2, 5),
      boardId: board.id,
      title: newColumnTitle.trim(),
      cardOrder: [],
      cards: [],
    };
    let newColumns = [...columns];
    newColumns.push(newColumnToAdd);
    let newBoard = { ...board };
    newBoard.columnOrder = newColumns.map((column) => column.id);
    newBoard.columns = newColumns;
    setColumns(newColumns);
    setBoard(newBoard);
    setNewColumnTitle("");
    toggleNewColumn();
  };
  const onUpdateColumn = (newColumnUpdate) => {
    const columnIdToUpdate = newColumnUpdate.id;
    let newColumns = [...columns];
    const columnIndexToUpdate = newColumns.findIndex(
      (i) => i.id === columnIdToUpdate
    );
    if (newColumnUpdate._destroy) {
      // remove column
      newColumns.splice(columnIndexToUpdate, 1);
    } else {
      // update column info
      newColumns.splice(columnIndexToUpdate, 1, newColumnUpdate);
    }
    let newBoard = { ...board };
    newBoard.columnOrder = newColumns.map((column) => column.id);
    newBoard.columns = newColumns;
    setColumns(newColumns);
    setBoard(newBoard);
  };
  return (
    <div className="board-content" style={{ display: "flex" }}>
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
            <Column
              column={column}
              onCardDrop={onCardDrop}
              onUpdateColumn={onUpdateColumn}
            />
          </Draggable>
        ))}
      </Container>
      <BootContainer className="trello-container-bootstrap">
        {!openNewColumn && (
          <Row>
            <Col className="add-new-column" onClick={toggleNewColumn}>
              <i className="fa fa-plus" style={{ paddingRight: "3px" }} />
              Add another list
            </Col>
          </Row>
        )}
        {openNewColumn && (
          <Col className="enter-new-column">
            <Form.Control
              size="sm"
              type="text"
              placeholder="Enter column title ..."
              className="input-enter-new-column"
              ref={newColumnInputRef}
              value={newColumnTitle}
              onChange={onNewColumnTitleChange}
              onKeyDown={(e) => e.key === "Enter" && addNewColumn()}
            />
            <Button variant="success" size="sm" onClick={addNewColumn}>
              Add column
            </Button>
            <span className="cancel-new-column" onClick={toggleNewColumn}>
              <i className="fa fa-trash icon" />
            </span>
          </Col>
        )}
      </BootContainer>
    </div>
  );
}

export default BoardContent;
