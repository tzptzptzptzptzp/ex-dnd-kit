import { useId } from "react";
import { useDraggable } from "@dnd-kit/core";

export const DraggableItem = ({ itemId }: { itemId: number }) => {
  const id = useId();

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: `draggable-${id}`,
  });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      DraggableItem {itemId} {id}
    </div>
  );
};
