import { DndContext, useDroppable } from "@dnd-kit/core";

export const DroppableArea = ({ children }: { children: React.ReactNode }) => {
  const { setNodeRef } = useDroppable({
    id: "droppable",
  });
  return (
    <DndContext>
      <div ref={setNodeRef}>{children}</div>
    </DndContext>
  );
};
