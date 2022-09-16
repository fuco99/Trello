import React from "react";
import { Container, Draggable } from "react-smooth-dnd";
import { mapOrder } from "ultilities/Sorts";
import Card from "../Card/Card";
import "./Column.scss";

function Column(props) {
  const { column } = props;
  const onCardDrop = (dropResult) => {
    console.log(dropResult);
  };
  const cards = mapOrder(column.cards, column.cardOrder, "id");
  return (
    <div className="column">
      <header className="column-drag-handle">{column.title}</header>
      <div className="card-list">
        <Container
          {...column.props}
          groupName="col"
          onDrop={onCardDrop}
          getChildPayload={(index) => cards[index]}
          dragClass="card-ghost"
          dropClass="card-ghost-drop"
          dropPlaceholder={{
            animationDuration: 150,
            showOnTop: true,
            className: "cards-drop-preview",
          }}
          dropPlaceholderAnimationDuration={200}
        >
          {cards.map((card, index) => {
            return (
              <Draggable key={index}>
                <Card card={card} />
              </Draggable>
            );
          })}
        </Container>
      </div>
      <footer>Add another card</footer>
    </div>
  );
}

export default Column;
