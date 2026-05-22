// App entrypoint

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "counsel",
  "practiceLayout": "accordion",
  "creamBand": false,
  "goldHue": 80,
  "navyHue": 220
}/*EDITMODE-END*/;

function applyHues({ goldHue, navyHue }) {
  const root = document.documentElement;
  // Gold: medium chroma, varying hue
  root.style.setProperty("--gold", `oklch(0.74 0.13 ${goldHue})`);
  root.style.setProperty("--gold-hi", `oklch(0.86 0.12 ${goldHue})`);
  root.style.setProperty("--gold-lo", `oklch(0.55 0.11 ${goldHue})`);
  root.style.setProperty("--navy", `oklch(0.32 0.08 ${navyHue})`);
  root.style.setProperty("--navy-hi", `oklch(0.42 0.09 ${navyHue})`);
  root.style.setProperty("--rule", `oklch(0.74 0.13 ${goldHue} / 0.22)`);
  root.style.setProperty("--rule-strong", `oklch(0.74 0.13 ${goldHue} / 0.5)`);
}

function App() {
  const [tweaks, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [openAttorney, setOpenAttorney] = React.useState(null);
  const [disclaimerOpen, setDisclaimerOpen] = React.useState(true);

  useReveal();

  React.useEffect(() => {
    applyHues(tweaks);
  }, [tweaks.goldHue, tweaks.navyHue]);

  const closeAttorney = React.useCallback(() => setOpenAttorney(null), []);
  const agreeDisclaimer = React.useCallback(() => {
    setDisclaimerOpen(false);
  }, []);

  return (
    <>
      <Nav
        onConsult={() => { document.getElementById("contact").scrollIntoView({ behavior: "smooth" }); }}
        onMenu={() => setMenuOpen((v) => !v)}
        menuOpen={menuOpen}
      />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onConsult={() => { document.getElementById("contact").scrollIntoView({ behavior: "smooth" }); }} />

      <Hero heroVariant={tweaks.heroVariant} />
      <Strip />
      <About creamBand={tweaks.creamBand} />
      <Practice layout={tweaks.practiceLayout} />
      <Clientele />
      <Attorneys onOpen={setOpenAttorney} />
      <Contact />
      <Footer />

      <AttorneyModal attorney={openAttorney} onClose={closeAttorney} />
      <DisclaimerModal open={disclaimerOpen} onAgree={agreeDisclaimer} />

      <TweaksPanel>
        <TweakSection label="Hero" />
        <TweakRadio
          label="Headline"
          value={tweaks.heroVariant}
          options={[
            { value: "counsel", label: "Counsel" },
            { value: "trust", label: "Trust" },
            { value: "modern", label: "Modern" },
          ]}
          onChange={(v) => setTweak("heroVariant", v)}
        />
        <TweakSection label="Practice section" />
        <TweakRadio
          label="Layout"
          value={tweaks.practiceLayout}
          options={[
            { value: "accordion", label: "Accordion" },
            { value: "grid", label: "Grid" },
          ]}
          onChange={(v) => setTweak("practiceLayout", v)}
        />
        <TweakSection label="Atmosphere" />
        <TweakToggle
          label="Cream About band"
          value={tweaks.creamBand}
          onChange={(v) => setTweak("creamBand", v)}
        />
        <TweakSlider
          label="Gold hue"
          min={40} max={120} step={1}
          value={tweaks.goldHue}
          onChange={(v) => setTweak("goldHue", v)}
        />
        <TweakSlider
          label="Navy hue"
          min={200} max={280} step={1}
          value={tweaks.navyHue}
          onChange={(v) => setTweak("navyHue", v)}
        />
      </TweaksPanel>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
