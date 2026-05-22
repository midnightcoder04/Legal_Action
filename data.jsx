// Data for Chaudhary & Associates

const PRACTICE_AREAS = [
  {
    num: "01",
    name: "Banking & Financial Services",
    desc: "Representing nationalised banks, private banks and NBFCs across recovery, securitisation, and regulatory matters before DRT, DRAT, NCLT and the High Court.",
    tags: ["DRT / DRAT", "SARFAESI", "IBC", "RBI Compliance"],
  },
  {
    num: "02",
    name: "Cyber Crime & Digital Fraud",
    desc: "End-to-end counsel for victims of online financial fraud, identity theft, phishing and data breaches — from FIR registration to recovery and prosecution.",
    tags: ["IT Act", "Phishing & UPI Fraud", "Data Breach", "Section 65–67"],
  },
  {
    num: "03",
    name: "Civil & Commercial Litigation",
    desc: "Trial and appellate practice in contract disputes, property matters, injunctions and commercial suits before Delhi District Courts and High Court.",
    tags: ["Contract", "Property", "Injunctions", "Appeals"],
  },
  {
    num: "04",
    name: "Criminal Law",
    desc: "Defence and prosecution in white-collar matters, economic offences and regulatory crimes, including bail, anticipatory bail and quashing petitions.",
    tags: ["White Collar", "Bail", "Quashing", "Economic Offences"],
  },
  {
    num: "05",
    name: "Corporate & Compliance",
    desc: "Advisory on company law, contracts, due diligence, secretarial compliance and dispute resolution for mid-market enterprises.",
    tags: ["Companies Act", "Contracts", "Due Diligence", "Compliance"],
  },
  {
    num: "06",
    name: "Arbitration & ADR",
    desc: "Domestic and institutional arbitration, mediation and conciliation under the Arbitration & Conciliation Act, with experience under DIAC and ICA rules.",
    tags: ["DIAC", "Mediation", "Section 9 / 11 / 34", "Enforcement"],
  },
];

const ATTORNEYS = [
  {
    id: "rajeev",
    name: "Rajeev Chaudhary",
    initials: "RC",
    photo: "assets/rjv.png",
    role: "Founding Partner",
    badge: "Adv. — Delhi High Court",
    short: "Two decades of courtroom experience advising banks, NBFCs and private clients on recovery, banking litigation and complex commercial disputes.",
    bio: "Rajeev Chaudhary is the founding partner of Chaudhary & Associates. His practice is anchored in banking and financial services litigation, with deep experience appearing for nationalised banks, private banks and non-banking financial companies before the Debt Recovery Tribunals, NCLT and the Delhi High Court. He is known for a meticulous, evidence-first approach and for shepherding high-stakes recovery and SARFAESI matters from origination through enforcement. Rajeev also leads the firm's cyber-crime victim representation practice, working closely with investigating agencies to secure timely relief for clients defrauded online.",
    creds: [
      { k: "Bar", v: "Bar Council of Delhi" },
      { k: "Forums", v: "Delhi High Court · DRT · DRAT · NCLT" },
      { k: "Focus", v: "Banking, Recovery, Cyber Crime, Commercial" },
      { k: "Languages", v: "English · Hindi · Punjabi" },
    ],
  },
  {
    id: "gaurav",
    name: "Gaurav Bisht",
    initials: "GB",
    photo: "assets/gb.png",
    role: "Partner",
    badge: "Adv. — Delhi High Court",
    short: "Litigator and advisor focused on cyber fraud recovery, IT Act prosecutions and corporate compliance for emerging financial institutions.",
    bio: "Gaurav Bisht leads the firm's cyber-crime and digital-fraud practice. His work spans the entire arc of an online-fraud matter — coordinating with cyber cells across jurisdictions, drafting Section 65/66 complaints, recovering frozen funds, and prosecuting offenders. On the corporate side, he advises NBFCs and fintech operators on RBI-aligned policies, vendor contracts and grievance-redressal frameworks. Clients value his quick turnaround on time-sensitive matters and his ability to translate dense regulatory text into clear operational guidance.",
    creds: [
      { k: "Bar", v: "Bar Council of Delhi" },
      { k: "Forums", v: "Delhi High Court · District Courts · Cyber Cells" },
      { k: "Focus", v: "Cyber Crime, NBFC Advisory, Corporate" },
      { k: "Languages", v: "English · Hindi" },
    ],
  },
];

const CLIENTELE = [
  {
    icon: "bank",
    title: "Banks",
    body: "Counsel to scheduled commercial banks on recovery actions, SARFAESI proceedings, securitisation and litigation strategy across Delhi NCR.",
    meta: "Public & Private Sector",
  },
  {
    icon: "vault",
    title: "NBFCs",
    body: "Retainer and matter-based representation for non-banking financial companies — from contract drafting to enforcement and regulatory defence.",
    meta: "Retail & Corporate Lending",
  },
  {
    icon: "shield",
    title: "Cyber Crime Victims",
    body: "Dedicated representation for individuals and businesses defrauded online — recovering funds, pursuing perpetrators and restoring digital footprints.",
    meta: "Individuals & Enterprises",
  },
];

const GALLERY = [
  { src: "assets/gallery-01.jpg", caption: "Delhi High Court — Main Entrance", span: "wide" },
  { src: "assets/gallery-02.jpg", caption: "Chambers — Block III" },
  { src: "assets/gallery-03.jpg", caption: "Consultation Room" },
  { src: "assets/gallery-04.jpg", caption: "Library & Research Wing" },
  { src: "assets/gallery-05.jpg", caption: "Courtroom — DRT New Delhi", span: "wide" },
  { src: "assets/gallery-06.jpg", caption: "Partner Meeting" },
  { src: "assets/gallery-07.jpg", caption: "Case Review Session" },
  { src: "assets/gallery-08.jpg", caption: "Firm Signage — Ch No. 605" },
  { src: "assets/gallery-09.jpg", caption: "Client Briefing Room" },
];

window.PRACTICE_AREAS = PRACTICE_AREAS;
window.ATTORNEYS = ATTORNEYS;
window.CLIENTELE = CLIENTELE;
window.GALLERY = GALLERY;
