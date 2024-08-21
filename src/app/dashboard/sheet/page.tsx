import { Button } from "@/components/ui/button"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
;
 


 

export default function SheetPage({children}: {children: React.ReactNode}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>LOGO</SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <SheetClose asChild>
            {children}
        </SheetClose>
        

        
        <SheetFooter>
          
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
