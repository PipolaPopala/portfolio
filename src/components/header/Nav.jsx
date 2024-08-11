const links = [
  {
    name: "start",
    path: "#start",
  },
  {
    name: "resume",
    path: "#resume",
  },
  {
    name: "work",
    path: "#work",
  },
  {
    name: "contact",
    path: "#contact",
  },
];

const Nav = () => {
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <a
            href={link.path}
            key={index}
            className="capitalize font-medium hover:text-accent transition-all"
          >
            {link.name}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
