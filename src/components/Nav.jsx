export default function Nav() {
  const links = [
    ["About", "#about"],
    ["Spec Sheet", "#skills"],
    ["Mission Log", "#experience"],
    ["Flagship Build", "#project"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="nav__mark">
          NN<span>HAU</span> · v1.0
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
