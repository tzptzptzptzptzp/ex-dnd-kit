import { DndContext, DragEndEvent, useDroppable } from "@dnd-kit/core";

export const DroppableArea = ({ children }: { children: React.ReactNode }) => {
  const { setNodeRef } = useDroppable({
    id: "droppable",
  });

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    console.log(active, over);
  };
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <div ref={setNodeRef}>{children}</div>
    </DndContext>
  );
};
