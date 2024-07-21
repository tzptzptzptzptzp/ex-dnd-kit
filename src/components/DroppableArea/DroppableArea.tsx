import {
  closestCenter,
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  useDroppable,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

export const DroppableArea = ({
  items,
  children,
  setItems,
}: {
  items: number[];
  children: React.ReactNode;
  setItems: (items: number[]) => void;
}) => {
  const { setNodeRef } = useDroppable({
    id: "droppable",
  });
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    console.log(event);
    if (over) {
      console.log(active, over);
      const oldIndex = items.findIndex((id) => id === active.id);
      const newIndex = items.findIndex((id) => id === over.id);

      const updatedItems = [...items];
      const [removed] = updatedItems.splice(oldIndex, 1);
      updatedItems.splice(newIndex, 0, removed);

      setItems(updatedItems);
    }
  };
  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        <div ref={setNodeRef}>{children}</div>
      </SortableContext>
    </DndContext>
  );
};
