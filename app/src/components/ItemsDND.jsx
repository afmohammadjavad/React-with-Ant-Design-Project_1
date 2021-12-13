import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ItemDND from "./ItemDND";
import './DropStyle.css'

function ItemsDND({ items, setItems }) {
  const handleDragEnd = (result) => {
    console.log(result);
    if (!result.destination) return;

    const orderedItems = [...items];
    const [newItem] = orderedItems.splice(result.source.index, 1);
    orderedItems.splice(result.destination.index, 0, newItem);

    setItems(orderedItems);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="12345678">
        {(provided, snapshot) => (
          <div
            className="dropStyle"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {items.map((item, index) => (
              <ItemDND
                key={index}
                item={item}
                index={index}
                draggableId={`drag-${index}`}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default ItemsDND;
