import { cn } from "@/lib/utils.ts";
import { Button, buttonVariants } from "./ui/button.tsx";
import { IElementTree } from "@/utils/utils.ts";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";

export function TreeView(props: IElementTree) {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  return (
    <>
      <Button
        variant="ghost"
        className="flex w-full mb-1 justify-between px-4 bg-muted hover:bg-muted"
      >
        <div className="flex gap-2 items-center">{props.name}</div>
        <div>{isOpen ? <ChevronDown /> : <ChevronRight />}</div>
      </Button>
      {isOpen && props.children && (
        <div className="pl-4">
          {props.children.map((child, index) => (
            <TreeView key={index} name={child.name} children={child.children} />
          ))}
        </div>
      )}

      {/* <Link
        //   key={item.href}
          className={cn(
            buttonVariants({ variant: "ghost" }),
            pathname === item.href
              ? "bg-muted hover:bg-muted"
              : "hover:bg-transparent hover:underline",
            "justify-start"
          )}
        >
          {item.title}
        </Link> */}
    </>
  );
}
