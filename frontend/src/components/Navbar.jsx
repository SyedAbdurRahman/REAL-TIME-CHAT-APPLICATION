import { Link } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";
import { LogOut, Bird, Settings, User } from "lucide-react";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();

  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="container mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-all">
              <div className="size-9 rounded-lg flex items-center justify-center">
                <Bird className="w-5 h-5 text-primary animate-bounce" />
              </div>
              <h1 className="text-lg font-bold">Telo</h1>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to="/settings"
              className="btn btn-sm gap-2 transition-colors group">
              <Settings className="w-4 h-4 group-hover:animate-spinSlow" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2 group`}>
                  <User className="size-5 group-hover:animate-wiggle" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center group" onClick={logout}>
                  <LogOut className="size-5 group-hover:animate-pulseFast" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
