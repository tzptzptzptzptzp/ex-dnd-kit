"use client";
import { DroppableArea } from "@/components/DroppableArea/DroppableArea";
import { DraggableItem } from "@/components/DraggableItem/DraggableItem";

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <DroppableArea>
          {array.map((id, i) => (
            <DraggableItem key={i} itemId={id} />
          ))}
        </DroppableArea>
      </div>
    </main>
  );
}
