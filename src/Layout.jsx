import { Link, useLocation } from "react-router-dom";
import {
  AiFillHome,
  AiFillFolder,
  AiFillTrophy,
  AiFillCamera,
  AiFillPicture,
} from "react-icons/ai";

export default function Layout({ title, children }) {
  const location = useLocation();

  const items = [
    { path: "/", icon: <AiFillHome /> },
    { path: "/projects", icon: <AiFillFolder /> },
    { path: "/extra", icon: <AiFillTrophy /> },
    { path: "/photography", icon: <AiFillCamera /> },
    { path: "/graphics", icon: <AiFillPicture /> },
  ];

  return (
    <div style={styles.wrapper}>

      {/* SIDEBAR */}
      <aside style={styles.sidebar}>
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            style={{
              ...styles.icon,
              color:
                location.pathname === item.path ? "#ec4899" : "#a1a1aa",
            }}
          >
            {item.icon}
          </Link>
        ))}
      </aside>

      {/* CONTENT */}
      <main style={styles.main}>
        <h1 style={styles.title}>{title}</h1>
        <div style={styles.content}>{children}</div>
      </main>

    </div>
  );
}

const styles = {
  wrapper: {
    display: "flex",
    minHeight: "100vh",
    width: "100%",
    background: "#0f0f12",
    color: "white",
  },

  sidebar: {
    width: "80px",
    minWidth: "80px",
    background: "#18181b",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "20px",
    gap: "24px",
    borderRight: "1px solid #27272a",
  },

  icon: {
    fontSize: "24px",
    textDecoration: "none",
    transition: "0.2s",
  },

  main: {
    flex: 1,
    padding: "30px",
  },

  title: {
    fontSize: "32px",
    marginBottom: "20px",
  },

  content: {
    color: "#a1a1aa",
    lineHeight: "1.6",
    maxWidth: "700px",
  },
};