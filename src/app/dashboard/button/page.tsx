"use client"
import { Button} from "@/components/ui/button"
import { LogoButton} from "@/components/ui/button-logo"

import { EnvelopeOpenIcon, GitHubLogoIcon, ReloadIcon } from "@radix-ui/react-icons"
import { useState } from "react"



function GoogleIcon() {
  return (
    <svg
    xmlSpace="preserve"
    style={{ background: "new 0 0 512 512", marginRight: "10px" }}
    viewBox="0 0 512 512"
    y="0px"
    x="0px"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlns="http://www.w3.org/2000/svg"
    id="Layer_1"
    width={20}
    version="1.1"
  >
    <path
      d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256
	c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456
	C103.821,274.792,107.225,292.797,113.47,309.408z"
      style={{ fill: "#FBBB00" }}
    />
    <path
      d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451
	c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535
	c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
      style={{ fill: "#518EF8" }}
    />
    <path
      d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512
	c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771
	c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
      style={{ fill: "#28B446" }}
    />
    <path
      d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012
	c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0
	C318.115,0,375.068,22.126,419.404,58.936z"
      style={{ fill: "#F14336" }}
    />
  </svg>
  )
}







export default function ButtonPage() {
  const [send, setSend] = useState(false)
  return (
    <div className="grid gap-3 w-6">
    <Button variant="outline">Outline</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="default">Default</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
    <Button disabled>disabled</Button>
    <Button variant="green">Green</Button>
    <Button variant="blue">Blue</Button>
    <Button>
      <EnvelopeOpenIcon className="mr-2 h-4 w-4" /> Login with Email
    </Button>
    <Button variant="outline">
      <GitHubLogoIcon  className="mr-2 h-5 w-5" /> Login with Github
    </Button>
    <Button  variant="outline">
      <GoogleIcon /> Login with Google
    </Button>

    <Button disabled>
      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
      Please wait
    </Button>

    <Button variant="outline" onClick={() => setSend(!send)}>
      {send 
      ? (<><ReloadIcon className="mr-2 h-4 w-4 animate-spin" /> <p>Sending...</p></>)
      : ( <p>Send!</p>) }
    </Button>

    <LogoButton variant="outline" logo="github"> Login with Github</LogoButton>
    <LogoButton variant="outline" logo="google"> Login with Google</LogoButton>

    

    </div>
    

  )
}
