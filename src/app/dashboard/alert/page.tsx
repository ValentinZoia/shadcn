import { Terminal } from "lucide-react"
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert"


export default function AlertPage() {
  return (
    <div className='grid gap-3'>
      <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>

    <Alert variant="destructive">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Error!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>

    <Alert variant="success">
      <Terminal className="h-4 w-4" />
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
    </div>
  )
}
