import {
  DragDropContext,
  DragDropContextProps,
  Droppable,
} from "react-beautiful-dnd";

interface DragDropProps extends DragDropContextProps {
  droppableId: string;
}

const DragDrop: React.FC<DragDropProps> = (props) => {
  const { onDragEnd, children, droppableId } = props;
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId={droppableId}>
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {children}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default DragDrop;
