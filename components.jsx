// Reusable presentational pieces

const Icon = ({ name, size = 18, stroke = 1.5 }) => {
  const s = { width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: stroke, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "arrow":
      return <svg viewBox="0 0 24 24" {...s}><path d="M5 12h14M13 5l7 7-7 7" /></svg>;
    case "plus":
      return <svg viewBox="0 0 24 24" {...s}><path d="M12 5v14M5 12h14" /></svg>;
    case "close":
      return <svg viewBox="0 0 24 24" {...s}><path d="M6 6l12 12M18 6L6 18" /></svg>;
    case "check":
      return <svg viewBox="0 0 24 24" {...s}><path d="M5 12l5 5L20 7" /></svg>;
    case "phone":
      return <svg viewBox="0 0 24 24" {...s}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" /></svg>;
    case "mail":
      return <svg viewBox="0 0 24 24" {...s}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path d="M22 6l-10 7L2 6" /></svg>;
    case "pin":
      return <svg viewBox="0 0 24 24" {...s}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>;
    case "clock":
      return <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>;
    case "bank":
      return <svg viewBox="0 0 24 24" {...s}><path d="M3 10l9-6 9 6" /><path d="M5 10v8M9 10v8M15 10v8M19 10v8" /><path d="M3 20h18" /></svg>;
    case "vault":
      return <svg viewBox="0 0 24 24" {...s}><rect x="3" y="4" width="18" height="16" rx="1" /><circle cx="14" cy="12" r="3" /><path d="M14 9v6M11 12h6M7 8v8" /></svg>;
    case "shield":
      return <svg viewBox="0 0 24 24" {...s}><path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" /><path d="M9 12l2 2 4-4" /></svg>;
    case "scale":
      return <svg viewBox="0 0 24 24" {...s}><path d="M12 3v18M5 21h14M6 7l-3 7h6l-3-7zM18 7l-3 7h6l-3-7z" /></svg>;
    case "image":
      return <svg viewBox="0 0 24 24" {...s}><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>;
    default:
      return null;
  }
};

// hook: reveal on scroll via IntersectionObserver
function useReveal() {
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// hook: scroll-spy active section
function useScrollSpy(ids, offset = 120) {
  const [active, setActive] = React.useState(ids[0]);
  React.useEffect(() => {
    const onScroll = () => {
      let curr = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top - offset <= 0) curr = id;
      }
      setActive(curr);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ids.join("|"), offset]);
  return active;
}

window.Icon = Icon;
window.useReveal = useReveal;
window.useScrollSpy = useScrollSpy;
