import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = async () => {
  const { userId }: { userId: string | null } = await auth();
  const isAuth = userId;
  return (
    <div>
      <ul className="flex justify-between m-10 items-center">
        <div>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/project">
            <li>Project</li>
          </Link>
        </div>
        <div className="flex gap-10">
          {!isAuth ? (
            <>
              <Link href="/signin">
                <li>Login</li>
              </Link>
              <Link href="/signup">
                <li>Sign Up</li>
              </Link>
            </>
          ) : (
            <>
              <Link href="/upload">
                <li>Upload</li>
              </Link>
              <Link href="/profile">
                <li>Profile</li>
              </Link>
              <li>
                <UserButton afterSignOutUrl="/" />
              </li>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
