"use client";
import { AiFillHome, AiFillGithub } from "react-icons/ai";
import { FiMusic, FiUsers, FiHeart } from "react-icons/fi";
import { TbBrandDeezer } from "react-icons/tb";
import NavLink from "./NavLink";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const Sidebar = () => {
  const { logout } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push("/login"); // Redirect to login after logout
  };

  return (
    <div className="sidebar">
      <Link className="app-logo" href="/">
      <TbBrandDeezer />
        <span>Freezer</span>
      </Link>

      <div>
        <h2>DISCOVER</h2>
        <ul>
          <li>
            <NavLink slug="">
              <AiFillHome />
              <span>Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink slug="top_tracks">
              <FiMusic />
              <span>Songs</span>
            </NavLink>
          </li>
          <li>
            <NavLink slug="top_artists">
              <FiUsers />
              <span>Artists</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div>
        <h2>LIBRARY</h2>
        <ul>
          <li>
            <NavLink slug="favorites">
              <FiHeart />
              <span>Favorites</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <a href="https://github.com/Roryeeee" target="_blank">
        <AiFillGithub />
        <span>Github</span>
      </a>

      {/* Logout Button */}
      <a onClick={handleLogout} className="logout-btn">
        Logout
      </a>
    </div>
  );
};

export default Sidebar;
