export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer__top">
          <h2>Have an Android Automotive or system-integration problem worth solving?</h2>
          <div className="footer__links">
            <a className="btn btn--primary" href="mailto:haunguyenngoc442001@gmail.com">
              Email me
            </a>
            <a
              className="btn btn--ghost"
              href="https://www.linkedin.com/in/nguyenhau442001/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="footer__grid">
          <div>
            <div className="footer__grid-label">Email</div>
            <div className="footer__grid-value">
              <a href="mailto:haunguyenngoc442001@gmail.com">
                haunguyenngoc442001@gmail.com
              </a>
            </div>
          </div>
          <div>
            <div className="footer__grid-label">Phone</div>
            <div className="footer__grid-value">083-627-1715</div>
          </div>
          <div>
            <div className="footer__grid-label">Location</div>
            <div className="footer__grid-value">Ho Chi Minh City, Vietnam</div>
          </div>
          <div>
            <div className="footer__grid-label">LinkedIn</div>
            <div className="footer__grid-value">
              <a
                href="https://www.linkedin.com/in/nguyenhau442001/"
                target="_blank"
                rel="noreferrer"
              >
                /in/nguyenhau442001
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <span>© {year} Nguyen Ngoc Hau</span>
          <span>Built with React + Vite · Deployed on GitHub Pages</span>
        </div>
      </div>
    </footer>
  );
}
