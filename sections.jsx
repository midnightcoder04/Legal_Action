// Page sections

const NAV_ITEMS = [
  { id: "about", label: "About" },
  { id: "practice", label: "Practice" },
  { id: "clientele", label: "Clientele" },
  { id: "people", label: "People" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" },
];

function Nav({ onConsult, onMenu, menuOpen }) {
  const [scrolled, setScrolled] = React.useState(false);
  const active = useScrollSpy(NAV_ITEMS.map((n) => n.id));
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
      <div className="shell nav-inner">
        <a href="#top" className="brand">
          <div className="brand-mark" />
          <div className="brand-text">
            <div className="brand-name">Chaudhary &amp; Associates</div>
            <div className="brand-tag">Attorneys at Law · Est. 2022</div>
          </div>
        </a>
        <div className="nav-links">
          {NAV_ITEMS.map((n) => (
            <a key={n.id} href={`#${n.id}`} className={`nav-link ${active === n.id ? "active" : ""}`}>{n.label}</a>
          ))}
        </div>
        <button className="nav-cta" onClick={onConsult}>
          Request Consultation <Icon name="arrow" size={14} />
        </button>
        <button className={`hamburger ${menuOpen ? "open" : ""}`} onClick={onMenu} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
    </nav>
  );
}

function MobileMenu({ open, onClose, onConsult }) {
  return (
    <div className={`mobile-menu ${open ? "open" : ""}`}>
      {NAV_ITEMS.map((n) => (
        <a key={n.id} href={`#${n.id}`} onClick={onClose}>{n.label}</a>
      ))}
      <a href="#contact" onClick={() => { onClose(); onConsult(); }} style={{ color: "var(--gold-hi)" }}>
        Request Consultation →
      </a>
    </div>
  );
}

function Hero({ heroVariant }) {
  const headlines = {
    counsel: ["Considered counsel.", <>Decisive <span className="it">representation.</span></>, "For India's financial frontier."],
    trust: [<>Trusted at the bar,</>, <>relentless in <span className="it">recovery.</span></>, "From Delhi High Court."],
    modern: ["A new chambers", <>built for the <span className="it">digital era</span> of</>, "banking & cyber law."],
  };
  const lines = headlines[heroVariant] || headlines.counsel;
  return (
    <section id="top" className="hero grain">
      <div className="hero-watermark" />
      <div className="shell hero-grid">
        <div className="hero-meta">
          <span><i className="dot" /> Est. 2022</span>
          <span><i className="dot" /> Delhi High Court</span>
          <span><i className="dot" /> Banking · NBFC · Cyber</span>
        </div>
        <h1 className="display" style={{ maxWidth: 1100 }}>
          <span className="blk"><span>{lines[0]}</span></span>
          <span className="blk"><span>{lines[1]}</span></span>
          <span className="blk"><span>{lines[2]}</span></span>
        </h1>
        <p className="body-lg hero-lede">
          Chaudhary &amp; Associates is a Delhi-based litigation chambers serving banks, NBFCs and victims of cyber crime. We pair courtroom rigour with operational fluency in modern financial regulation.
        </p>
        <div className="hero-actions">
          <a href="#practice" className="btn btn-gold">Our Practice <Icon name="arrow" size={14} /></a>
          <a href="#contact" className="btn btn-ghost">Book a Consultation</a>
        </div>
      </div>
      <div className="scroll-hint">
        <div>Scroll</div>
        <div className="line" />
      </div>
    </section>
  );
}

function Strip() {
  const items = ["Banking Litigation", "SARFAESI & DRT", "NBFC Advisory", "Cyber Crime Recovery", "Commercial Disputes", "Arbitration", "Criminal Defence"];
  const all = [...items, ...items];
  return (
    <div className="strip">
      <div className="strip-track">
        {all.map((t, i) => (
          <span key={i}>{t}<span className="sep">✦</span></span>
        ))}
      </div>
    </div>
  );
}

function About({ creamBand }) {
  return (
    <section id="about" className={`section ${creamBand ? "cream" : "darker"}`}>
      <div className="shell">
        <div className="section-head reveal">
          <div className="label"><span className="eyebrow">Chambers · 01</span></div>
          <div>
            <h2 className="display">A young firm with <span className="it">deep roots</span> in Delhi's financial bar.</h2>
          </div>
        </div>
        <div className="about-grid">
          <div className="reveal">
            <p className="body-lg">
              Founded in 2022 in Lawyer's Block III at the Delhi High Court, Chaudhary &amp; Associates was built around a focused thesis — that the next decade of Indian litigation will be defined by the intersection of finance, technology and fraud.
            </p>
            <p className="body-lg" style={{ marginTop: 18 }}>
              We act for banks and non-banking financial companies on the strategic edge of recovery and compliance, and for individuals and enterprises navigating the aftermath of cyber crime. Our practice is small by design: every matter is partner-led, every brief is read.
            </p>
          </div>
          <div className="reveal delay-2">
            <div className="about-stats">
              <div className="stat"><div className="num">2022<span className="plus"></span></div><div className="lbl">Year Founded</div></div>
              <div className="stat"><div className="num">10<span className="plus">+</span></div><div className="lbl">Years at the Bar</div></div>
              <div className="stat"><div className="num">06</div><div className="lbl">Practice Areas</div></div>
              <div className="stat"><div className="num">100<span className="plus">%</span></div><div className="lbl">Partner-led Matters</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PracticeAccordion() {
  const [open, setOpen] = React.useState(0);
  return (
    <div className="practice-list">
      {PRACTICE_AREAS.map((p, i) => {
        const isOpen = open === i;
        return (
          <React.Fragment key={p.num}>
            <div className={`practice-row ${isOpen ? "open" : ""}`} onClick={() => setOpen(isOpen ? -1 : i)}>
              <div className="num">{p.num}</div>
              <div className="name">{p.name}</div>
              <div className="toggle"><Icon name="plus" size={14} stroke={1.6} /></div>
            </div>
            <div className={`practice-detail ${isOpen ? "open" : ""}`}>
              <div></div>
              <p className="body-lg">{p.desc}</p>
              <div></div>
              <div className="tags">
                {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

function PracticeGrid() {
  return (
    <div className="practice-grid">
      {PRACTICE_AREAS.map((p) => (
        <div key={p.num} className="practice-card">
          <div className="num">{p.num}</div>
          <div className="name">{p.name}</div>
          <div className="desc">{p.desc}</div>
        </div>
      ))}
    </div>
  );
}

function PracticeCards() {
  return (
    <div className="practice-cards">
      {PRACTICE_AREAS.map((p, i) => (
        <div key={p.num} className={`pcard reveal delay-${(i % 3) + 1}`}>
          <div className="pcard-img">
            <img src={p.img} alt={p.name} loading="lazy" onLoad={(e) => e.target.classList.add("loaded")} />
            <div className="pcard-img-placeholder">
              <Icon name={p.icon} size={40} stroke={1.1} />
            </div>
          </div>
          <div className="pcard-body">
            <div className="pcard-num">{p.num}</div>
            <div className="pcard-name">{p.name}</div>
            <p className="pcard-desc">{p.desc}</p>
            <div className="pcard-tags">
              {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Practice({ layout }) {
  return (
    <section id="practice" className="section dark">
      <div className="shell">
        <div className="section-head reveal">
          <div className="label"><span className="eyebrow">Practice · 02</span></div>
          <div>
            <h2 className="display">What we <span className="it">handle.</span></h2>
          </div>
        </div>
        <div className="reveal">
          {layout === "grid" ? <PracticeGrid /> : layout === "cards" ? <PracticeCards /> : <PracticeAccordion />}
        </div>
      </div>
    </section>
  );
}

function Clientele() {
  return (
    <section id="clientele" className="section darker">
      <div className="shell">
        <div className="section-head reveal">
          <div className="label"><span className="eyebrow">Clientele · 03</span></div>
          <div>
            <h2 className="display">Who we represent.</h2>
            <p className="body-lg muted" style={{ marginTop: 18, maxWidth: 560 }}>
              Three constituencies sit at the centre of the firm's work — and each demands a different cadence of counsel.
            </p>
          </div>
        </div>
        <div className="client-grid">
          {CLIENTELE.map((c, i) => (
            <div key={c.title} className={`client-card reveal delay-${i + 1}`}>
              <div className="icon"><Icon name={c.icon} size={26} stroke={1.4} /></div>
              <h3>{c.title}</h3>
              <p>{c.body}</p>
              <div className="meta">{c.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Attorneys({ onOpen }) {
  return (
    <section id="people" className="section dark">
      <div className="shell">
        <div className="section-head reveal">
          <div className="label"><span className="eyebrow">People · 04</span></div>
          <div>
            <h2 className="display">The chambers is <span className="it">partner-led.</span></h2>
          </div>
        </div>
        <div className="attorneys-grid">
          {ATTORNEYS.map((a, i) => (
            <div key={a.id} className={`attorney reveal delay-${i + 1}`} onClick={() => onOpen(a)}>
              <div className="attorney-portrait">
                {a.photo
                  ? <img src={a.photo} alt={a.name} className="attorney-photo" />
                  : <div className="initials">{a.initials}</div>
                }
                <div className="badge">{a.badge}</div>
              </div>
              <div className="attorney-info">
                <div>
                  <div className="name">{a.name}</div>
                  <div className="role">{a.role}</div>
                </div>
                <div className="read">Read Bio <Icon name="arrow" size={12} /></div>
              </div>
              <p className="body-lg muted" style={{ marginTop: 22, maxWidth: 460, fontSize: 15 }}>{a.short}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AttorneyModal({ attorney, onClose }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    if (attorney) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [attorney, onClose]);
  return (
    <div className={`modal-bg ${attorney ? "open" : ""}`} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><Icon name="close" size={14} /></button>
        {attorney && (
          <div className="attorney-modal">
            <div className="left">
              <div className="initials">{attorney.initials}</div>
            </div>
            <div className="right">
              <div className="role">{attorney.role}</div>
              <div className="name">{attorney.name}</div>
              <p className="bio">{attorney.bio}</p>
              <div className="creds">
                {attorney.creds.map((c) => (
                  <div key={c.k} className="cred">
                    <div className="k">{c.k}</div>
                    <div className="v">{c.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ContactForm() {
  const [form, setForm] = React.useState({ name: "", email: "", phone: "", matter: "Banking & Financial Services", message: "" });
  const [errors, setErrors] = React.useState({});
  const [sent, setSent] = React.useState(false);

  const update = (k, v) => setForm({ ...form, [k]: v });

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = "Required";
    if (!form.email.trim()) errs.email = "Required";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = "Invalid email";
    if (!form.message.trim()) errs.message = "Briefly describe the matter";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      const subject = `[Enquiry] ${form.matter} — ${form.name}`;
      const body = [
        `Name: ${form.name}`,
        `Email: ${form.email}`,
        form.phone ? `Phone: ${form.phone}` : null,
        `Matter: ${form.matter}`,
        ``,
        form.message,
      ].filter(l => l !== null).join("\n");
      window.open(`mailto:rajeevchaudharyadv12@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
      setSent(true);
    }
  };

  if (sent) {
    return (
      <div className="form-success">
        <div className="check"><Icon name="check" size={26} stroke={1.6} /></div>
        <h4>Thank you, {form.name.split(" ")[0]}.</h4>
        <p>Your enquiry has been received. Our chambers will respond within one business day.</p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      <h3>Request a consultation</h3>
      <p className="sub">Confidential intake. Partner review within 24 hours.</p>
      <div className="form-row">
        <div className={`field ${errors.name ? "error" : ""}`}>
          <label>Full Name</label>
          <input type="text" value={form.name} onChange={(e) => update("name", e.target.value)} placeholder="As on record" />
          {errors.name && <div className="err">{errors.name}</div>}
        </div>
        <div className={`field ${errors.email ? "error" : ""}`}>
          <label>Email</label>
          <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} placeholder="you@firm.com" />
          {errors.email && <div className="err">{errors.email}</div>}
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label>Phone (optional)</label>
          <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} placeholder="+91" />
        </div>
        <div className="field">
          <label>Matter Type</label>
          <select value={form.matter} onChange={(e) => update("matter", e.target.value)}>
            {PRACTICE_AREAS.map((p) => <option key={p.num}>{p.name}</option>)}
            <option>Other</option>
          </select>
        </div>
      </div>
      <div className={`field ${errors.message ? "error" : ""}`}>
        <label>Brief Description</label>
        <textarea rows={4} value={form.message} onChange={(e) => update("message", e.target.value)} placeholder="A few sentences about the matter, timeline, and parties involved." />
        {errors.message && <div className="err">{errors.message}</div>}
      </div>
      <button type="submit" className="btn btn-gold" style={{ marginTop: 8 }}>
        Submit Enquiry <Icon name="arrow" size={14} />
      </button>
    </form>
  );
}

function Gallery() {
  const [active, setActive] = React.useState(null);

  React.useEffect(() => {
    if (active !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [active]);

  const prev = () => setActive((active - 1 + GALLERY.length) % GALLERY.length);
  const next = () => setActive((active + 1) % GALLERY.length);

  React.useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="gallery" className="section darker">
      <div className="shell">
        <div className="section-head reveal">
          <div className="label"><span className="eyebrow">Gallery · 05</span></div>
          <div>
            <h2 className="display">Inside the <span className="it">chambers.</span></h2>
          </div>
        </div>
        <div className="gallery-grid">
          {GALLERY.map((item, i) => (
            <button
              key={i}
              className={`gallery-item reveal${item.span ? " " + item.span : ""}`}
              onClick={() => setActive(i)}
              aria-label={item.caption}
            >
              <div className="gallery-img-wrap">
                <img src={item.src} alt={item.caption} loading="lazy" />
                <div className="gallery-placeholder">
                  <Icon name="image" size={28} />
                  <span>Photo coming soon</span>
                </div>
              </div>
              <div className="gallery-caption">{item.caption}</div>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <div className="gallery-lightbox" onClick={() => setActive(null)}>
          <button className="gallery-lb-close" onClick={() => setActive(null)} aria-label="Close">
            <Icon name="close" size={16} />
          </button>
          <button className="gallery-lb-nav prev" onClick={(e) => { e.stopPropagation(); prev(); }} aria-label="Previous">&#8249;</button>
          <div className="gallery-lb-stage" onClick={(e) => e.stopPropagation()}>
            <img src={GALLERY[active].src} alt={GALLERY[active].caption} />
            <div className="gallery-lb-caption">{GALLERY[active].caption}</div>
          </div>
          <button className="gallery-lb-nav next" onClick={(e) => { e.stopPropagation(); next(); }} aria-label="Next">&#8250;</button>
        </div>
      )}
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="section darker">
      <div className="shell">
        <div className="section-head reveal">
          <div className="label"><span className="eyebrow">Contact · 06</span></div>
          <div>
            <h2 className="display">Visit the chambers.</h2>
          </div>
        </div>
        <div className="contact-grid">
          <div className="reveal">
            <p className="body-lg" style={{ maxWidth: 460 }}>
              Walk-in consultations are by appointment only. For urgent cyber-fraud matters, please call directly — the first 24 hours are critical to recovery.
            </p>
            <div className="contact-meta">
              <div className="contact-row">
                <div className="k"><Icon name="pin" size={12} /> &nbsp; Chambers</div>
                <div className="v">Ch No. 605, Lawyer's Block III<br/>Delhi High Court, New Delhi 110003</div>
              </div>
              <div className="contact-row">
                <div className="k"><Icon name="phone" size={12} /> &nbsp; Direct</div>
                <div className="v">
                  Rajeev Chaudhary &nbsp;·&nbsp; <a href="tel:+919716231530">+91 97162 31530</a>
                </div>
              </div>
              <div className="contact-row">
                <div className="k"><Icon name="clock" size={12} /> &nbsp; Hours</div>
                <div className="v">Monday – Saturday<br/>10:00 – 18:00 IST</div>
              </div>
              <div className="contact-row">
                <div className="k"><Icon name="mail" size={12} /> &nbsp; Email</div>
                <div className="v"><a href="mailto:rajeevchaudharyadv12@gmail.com">rajeevchaudharyadv12@gmail.com</a></div>
              </div>
            </div>
          </div>
          <div className="reveal delay-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot">
      <div className="shell">
        <div className="foot-grid">
          <div>
            <div className="brand" style={{ marginBottom: 18 }}>
              <div className="brand-mark" />
              <div className="brand-text">
                <div className="brand-name">Chaudhary &amp; Associates</div>
                <div className="brand-tag">Attorneys at Law · Est. 2022</div>
              </div>
            </div>
            <p className="body" style={{ color: "var(--fg-mute)", maxWidth: 360, fontSize: 14 }}>
              A litigation chambers focused on banking, NBFC and cyber-crime mandates, practising before the Delhi High Court and tribunals across India.
            </p>
          </div>
          <div>
            <h5>Practice</h5>
            <ul>
              {PRACTICE_AREAS.slice(0, 5).map((p) => <li key={p.num}><a href="#practice">{p.name}</a></li>)}
            </ul>
          </div>
          <div>
            <h5>Chambers</h5>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#people">People</a></li>
              <li><a href="#clientele">Clientele</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h5>Reach Us</h5>
            <ul>
              <li><a href="tel:+919716231530">+91 97162 31530</a></li>
              <li><a href="mailto:rajeevchaudharyadv12@gmail.com">rajeevchaudharyadv12@gmail.com</a></li>
              <li style={{ color: "var(--parchment)", fontSize: 14, lineHeight: 1.5 }}>Ch No. 605, Block III<br/>Delhi High Court</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <div>© 2025 Chaudhary &amp; Associates. All rights reserved.</div>
          <div className="disclaimer">
            As per Bar Council of India rules, advocates are not permitted to solicit work or advertise. By accessing this site, the visitor acknowledges that the content is for informational purposes only and does not constitute legal advice or an advocate-client relationship.
          </div>
        </div>
      </div>
    </footer>
  );
}

function DisclaimerModal({ open, onAgree }) {
  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <div className={`disclaimer-overlay ${open ? "open" : ""}`}>
      <div className="disclaimer-box">
        <div className="disclaimer-box-rule" />
        <div className="disclaimer-box-inner">
          <div className="disclaimer-eyebrow">Notice</div>
          <h2 className="disclaimer-title">Disclaimer</h2>
          <div className="disclaimer-gold-rule" />
          <p className="disclaimer-text">
            The regulations set forth by the Bar Council of India explicitly prohibit lawyers and law firms from engaging in advertising or solicitation through public communication channels. This website strictly refrains from serving as a platform for such promotional activities. Chaudhary &amp; Associates affirms that it harbors no intention to advertise or solicit clients via this website. By clicking <em>'I Agree,'</em> you acknowledge that the content on this website does not constitute advertising or solicitation and is intended solely for informational purposes.
          </p>
          <button className="disclaimer-agree-btn" onClick={onAgree}>I Agree</button>
        </div>
      </div>
    </div>
  );
}

window.Nav = Nav;
window.MobileMenu = MobileMenu;
window.Hero = Hero;
window.Strip = Strip;
window.About = About;
window.Practice = Practice;
window.Clientele = Clientele;
window.Attorneys = Attorneys;
window.AttorneyModal = AttorneyModal;
window.Gallery = Gallery;
window.Contact = Contact;
window.Footer = Footer;
window.DisclaimerModal = DisclaimerModal;
