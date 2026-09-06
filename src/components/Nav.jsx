export default function Nav() {
  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["Experience", "#experience"],
    ["Project", "#project"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="nav__mark">
          NN<span>HAU</span>
        </a>
        <nav className="nav__links">
          {links.map(([label, href]) => (
            <a key={href} href={href}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
