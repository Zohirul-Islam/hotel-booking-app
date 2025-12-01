
import Link from "next/link"
import Image from "next/image"
import { auth } from '@/auth'
import Logout from '@/components/auth/Logout'
const Navbar = async({ sideMenu }) => {
  const session = await auth();
  return (
    <nav className="max-w-7xl flex mx-auto justify-between px-4 py-4 absolute top-0 w-full left-0 right-0 z-50;">
    <Link href="/">
        <Image
          className="h-[35px] md:h-[40px] lg:h-[50px]"
        src="/stayswift.svg" 
        alt="Stay Swift Logo" 
        width={200}
        height={200} />
    </Link>
    
      {
        sideMenu && (
              <ul className="hidden md:flex items-center gap-6">
      <li>
        <Link href="#">Recommended Places</Link>
      </li>

      <li>
        <Link href="#">About Us</Link>
      </li>

      <li>
        <Link href="#">Contact us</Link>
      </li>

      <li>
        <Link href="/bookings">Bookings</Link>
      </li>

            <li>
              {
                session?.user ? (<div>
                  <span className="mx-1">{session?.user?.name}</span>
                  <span> | </span>
                  <Logout/>
                </div>):(<Link href="/login" className="bg-primary px-6 py-3 text-white font-bold rounded-md">Login</Link>)
              }
        
      </li>
    </ul>
        )
    }

  </nav>
  )
}

export default Navbar