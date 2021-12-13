import React from "react";
import { Draggable } from "react-beautiful-dnd";
import './DragStyle.css'

function withDraggable(Component) {
  return function WithDraggable(props) {
    return (
      <Draggable draggableId={props.draggableId} index={props.index}>
        {(provided, snapshot) => (
          <div
            className="dragStyle"
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <Component {...props} />
          </div>
        )}
      </Draggable>
    );
  };
}

export default withDraggable;
