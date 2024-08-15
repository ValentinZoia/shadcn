"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function AlertPage() {
    const [dialagoOpen, setDialagoOpen] = useState(false)
    
    
  return (
    <AlertDialog open={dialagoOpen} onOpenChange={setDialagoOpen}>


      <AlertDialogTrigger asChild>
        <Button variant="outline">Show Dialog</Button>
      </AlertDialogTrigger>



      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => console.log("cancel")}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => console.log("continue")}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>


    </AlertDialog>
  )
}
