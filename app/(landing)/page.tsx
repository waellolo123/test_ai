import { Button } from "@/components/ui/button";
import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";


const LandingPage = () => {
 const {user} = auth();
 console.log(user);
 

  return (
    <div>
      LandingPage
      {user ? (
       <>
       {/* <p>Hi, {user}</p> */}
       <Link href="/dashboard"><Button>Go to dahshboard</Button></Link>
       </>
      ) : (
        <>
        <Link href="/sign-up"><Button>Sign Up</Button></Link>
        <Link href="/sign-in"><Button>Sign In</Button></Link>
        </>   
      )}
    </div>
  )
}

export default LandingPage;

