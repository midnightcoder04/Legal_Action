// Data for Chaudhary & Associates

const PRACTICE_AREAS = [
  {
    num: "01",
    name: "Negotiable Instruments & Payment Systems",
    icon: "scale",
    img: "assets/practice-01.jpg",
    desc: "Representation in cheque dishonour and payment system disputes under the Negotiable Instruments Act 1881 and the Payment and Settlement Systems Act, 2007 — from demand notices through trial and appeal.",
    tags: ["NI Act 1881", "Cheque Bounce", "PSS Act 2007", "Payment Disputes"],
  },
  {
    num: "02",
    name: "Cyber Crime & Account Freeze Matters",
    icon: "cyber",
    img: "assets/practice-02.jpg",
    desc: "End-to-end counsel for victims of cyber fraud — from emergency account unfreezing and lien removal to litigating cyber lien and debit freeze disputes before competent authorities.",
    tags: ["Account Unfreezing", "Lien Removal", "Cyber Lien", "Debit Freeze", "Transaction Disputes"],
  },
  {
    num: "03",
    name: "Representations, Filings & Documentation",
    icon: "document",
    img: "assets/practice-03.jpg",
    desc: "Precise drafting of representations before banks and cyber cells, legal replies to notices issued by cyber police, preparation of affidavits and undertakings, and filing of legal applications before competent authorities.",
    tags: ["Bank Representations", "Cyber Cell Filings", "Legal Replies", "Affidavits & Undertakings"],
  },
  {
    num: "04",
    name: "RBI & Banking Compliance Advisory",
    icon: "bank",
    img: "assets/practice-04.jpg",
    desc: "Strategic advisory to banks and financial institutions on RBI directives, Fair Practice Code requirements, recovery compliance frameworks, and guidance on evolving banking compliance norms.",
    tags: ["RBI Advisory", "Fair Practice Code", "Recovery Compliance", "Banking Norms"],
  },
  {
    num: "05",
    name: "NBFC & Fintech Advisory",
    icon: "building",
    img: "assets/practice-05.jpg",
    desc: "Retainer and matter-based advisory for non-banking financial companies and fintech operators — covering digital lending compliance, legal vetting of loan documents, and regulatory positioning.",
    tags: ["NBFC Advisory", "Fintech", "Digital Lending", "Loan Document Vetting"],
  },
  {
    num: "06",
    name: "Recovery Litigation & Court Representation",
    icon: "gavel",
    img: "assets/practice-06.jpg",
    desc: "Full-spectrum litigation for lenders and defrauded clients — loan recovery suits, civil recovery cases, banking fraud matters, DRT and appellate proceedings, and consumer complaints involving banking services.",
    tags: ["DRT & Appellate", "Recovery Litigation", "Banking Fraud", "Consumer Complaints", "Civil Recovery"],
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
