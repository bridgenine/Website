import type { PageId } from "@/lib/paths";

export const regulationTags = [
  "PPN 12%",
  "DPP nilai lain",
  "PPh 23",
  "PPh 4(2)",
  "PPh 22",
  "NPWP",
  "e-Faktur",
  "KBLI 2020",
] as const;

export type ReviewStatus = "pass" | "warning" | "fail";

type Card = { title: string; body: string };

type Copy = {
  nav: {
    home: string;
    about: string;
    services: string;
    solutions: string;
    product: string;
    contact: string;
    demo: string;
    menu: string;
    close: string;
  };
  skip: string;
  footer: { line: string };
  status: Record<ReviewStatus, string>;
  home: {
    kicker: string;
    title: string;
    lede: string;
    primary: string;
    secondary: string;
    whatTitle: string;
    what: [Card, Card, Card];
    servicesLink: string;
    solutionsKicker: string;
    solutionsTitle: string;
    solutionsBody: string;
    solutionsLink: string;
    ctaTitle: string;
    ctaBody: string;
  };
  services: {
    kicker: string;
    title: string;
    lede: string;
    items: [Card, Card, Card];
    placeholderLabel: string;
    placeholderTitle: string;
    placeholderBody: string;
  };
  solutions: {
    kicker: string;
    title: string;
    lede: string;
    productTitle: string;
    productBody: string;
    productLink: string;
    placeholderLabel: string;
    placeholderTitle: string;
    placeholderBody: string;
  };
  about: {
    kicker: string;
    title: string;
    lede: string;
    points: [Card, Card, Card];
    placeholderLabel: string;
    placeholderTitle: string;
    placeholderBody: string;
  };
  product: {
    kicker: string;
    title: string;
    lede: string;
    problemTitle: string;
    problems: [Card, Card];
    howTitle: string;
    steps: [Card, Card, Card, Card];
    featuresTitle: string;
    features: string[];
    privacyTitle: string;
    privacyBody: string;
    privacy: [string, string, string];
    audienceTitle: string;
    audiences: [Card, Card, Card];
    ctaTitle: string;
    ctaBody: string;
  };
  illustration: {
    label: string;
    caption: string;
    invoice: string;
    rows: { label: string; status: ReviewStatus; note: string }[];
  };
  contact: {
    kicker: string;
    title: string;
    lede: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    message: string;
    namePlaceholder: string;
    companyPlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    sent: string;
    mailto: string;
    unconfigured: string;
    failed: string;
    errors: {
      required: string;
      email: string;
      phone: string;
      short: string;
    };
    nextTitle: string;
    next: [string, string, string];
  };
  meta: Record<PageId, { title: string; description: string }>;
};

export const copy: Copy = {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      solutions: "Solutions",
      product: "Project Alpha",
      contact: "Contact",
      demo: "Talk with us",
      menu: "Menu",
      close: "Close",
    },
    skip: "Skip to content",
    footer: {
      line: "Consulting and workflow automation.",
    },
    status: { pass: "Pass", warning: "Warning", fail: "Fail" },
    home: {
      kicker: "Consulting firm",
      title: "Consulting, and a lot of workflow automation.",
      lede: "Business and process advice, automation, and implementation.",
      primary: "Talk with us",
      secondary: "See services",
      whatTitle: "What Bridgenine does",
      what: [
        {
          title: "Consulting",
          body: "Business and process consulting.",
        },
        {
          title: "Workflow automation",
          body: "Including AI-assisted automation.",
        },
        {
          title: "Implementation",
          body: "We stay through rollout.",
        },
      ],
      servicesLink: "All services",
      solutionsKicker: "Solutions",
      solutionsTitle: "Project Alpha is one solution.",
      solutionsBody: "On-site invoice review. Other offerings can sit beside it.",
      solutionsLink: "See solutions",
      ctaTitle: "Tell us about the work.",
      ctaBody: "Consulting, automation, implementation, or a Project Alpha demo.",
    },
    about: {
      kicker: "About",
      title: "A consulting firm that automates the work.",
      lede: "Advice on the business and the process, then the workflows, including AI-assisted automation, and implementation.",
      points: [
        { title: "Consulting", body: "Business and process consulting." },
        { title: "Workflow automation", body: "Repeated work, including AI-assisted automation." },
        { title: "Implementation", body: "The change, carried into daily operations." },
      ],
      placeholderLabel: "Placeholder",
      placeholderTitle: "Company profile",
      placeholderBody: "Add registration, office, and team details here.",
    },
    services: {
      kicker: "Services",
      title: "Consulting and workflow automation.",
      lede: "How Bridgenine works with a team.",
      items: [
        { title: "Consulting", body: "Business and process consulting." },
        { title: "Workflow automation", body: "Automate repeated work, including with AI." },
        { title: "Implementation", body: "Put the new way of working into practice." },
      ],
      placeholderLabel: "Placeholder",
      placeholderTitle: "Engagement examples",
      placeholderBody: "Add real projects here. No sample clients yet.",
    },
    solutions: {
      kicker: "Solutions",
      title: "Products and solutions.",
      lede: "Project Alpha is one Bridgenine solution.",
      productTitle: "Project Alpha",
      productBody: "Self-hosted, fully offline invoice review.",
      productLink: "Open Project Alpha",
      placeholderLabel: "Placeholder",
      placeholderTitle: "More solutions",
      placeholderBody: "Add the next offering here.",
    },
    product: {
      kicker: "Project Alpha",
      title: "AI compliance review. Fully offline.",
      lede: "A Bridgenine product for Indonesian invoices. Data stays on the client server.",
      problemTitle: "The problem",
      problems: [
        {
          title: "Manual checks drag",
          body: "Invoices pile up. Tax rules get missed.",
        },
        {
          title: "Cloud AI leaks context",
          body: "Invoice and tax data leave the building.",
        },
      ],
      howTitle: "How it works",
      steps: [
        { title: "Upload", body: "PDF, scan, or photo." },
        { title: "Read", body: "Local OCR and a local open-source model." },
        { title: "Check", body: "Indonesian tax rules and registered KBLI 2020 codes." },
        { title: "Report", body: "Pass, warning, or fail. Dashboards, PDF, and Excel." },
      ],
      featuresTitle: "What it checks",
      features: [
        "PPN, including 12% and DPP nilai lain",
        "PPh 23, PPh 4(2), and PPh 22",
        "NPWP and e-Faktur fields",
        "Invoice totals",
        "Duplicate invoices",
        "KBLI 2020 business codes",
        "Plain-language explanations",
        "Dashboards",
        "PDF and Excel reports",
      ],
      privacyTitle: "Data stays home",
      privacyBody: "Self-hosted. Fully offline.",
      privacy: [
        "Installed on the client server",
        "No cloud round trip",
        "Invoice and tax data never leave the premises",
      ],
      audienceTitle: "Who it is for",
      audiences: [
        { title: "Finance teams", body: "Invoice intake and review." },
        { title: "Tax teams", body: "PPN, PPh, NPWP, and e-Faktur fields." },
        { title: "On-prem companies", body: "Teams that cannot send invoice data off-site." },
      ],
      ctaTitle: "Request a demo",
      ctaBody: "We will show Project Alpha in your environment.",
    },
    illustration: {
      label: "Illustration",
      caption: "Sample screen. Not a customer result.",
      invoice: "INV-SAMPLE",
      rows: [
        { label: "PPN 12%", status: "pass", note: "Rate matches" },
        { label: "DPP nilai lain", status: "pass", note: "Field present" },
        { label: "PPh 23", status: "warning", note: "Rate differs" },
        { label: "NPWP", status: "fail", note: "Format incomplete" },
        { label: "Duplicate", status: "warning", note: "Possible repeat" },
        { label: "KBLI 2020", status: "pass", note: "Code matches" },
      ],
    },
    contact: {
      kicker: "Contact",
      title: "Talk with us",
      lede: "Automation, consulting, or a Project Alpha demo.",
      name: "Name",
      company: "Company",
      email: "Email",
      phone: "Phone / WhatsApp",
      message: "Message",
      namePlaceholder: "Your name",
      companyPlaceholder: "Company name",
      emailPlaceholder: "name@company.com",
      phonePlaceholder: "+62…",
      messagePlaceholder: "How can we help?",
      submit: "Send request",
      sending: "Sending…",
      sent: "Sent. We will reply.",
      mailto: "Your email app should open with this request.",
      unconfigured: "This form is not connected to an inbox yet. The message was not sent.",
      failed: "Sending failed. Try again.",
      errors: {
        required: "Required.",
        email: "Enter a valid email.",
        phone: "Enter a phone or WhatsApp number.",
        short: "Add a short message.",
      },
      nextTitle: "What happens next",
      next: [
        "You send a note",
        "We reply",
        "We scope the work together",
      ],
    },
    meta: {
      home: {
        title: "Bridgenine — Consulting and workflow automation",
        description:
          "Bridgenine is a consulting firm for business and process work, workflow automation, AI-assisted automation, and implementation. Project Alpha is one solution.",
      },
      about: {
        title: "About",
        description:
          "Bridgenine consults on how work gets done, automates workflows, and stays for implementation. Project Alpha is one solution.",
      },
      services: {
        title: "Services",
        description:
          "Bridgenine services: business and process consulting, workflow automation including AI-assisted automation, and implementation.",
      },
      solutions: {
        title: "Solutions",
        description:
          "Bridgenine solutions. Project Alpha is one of them: self-hosted, offline invoice review.",
      },
      product: {
        title: "Project Alpha",
        description:
          "Project Alpha is a self-hosted, fully offline AI compliance review system for Indonesian invoices, tax rules, and KBLI 2020 codes.",
      },
      contact: {
        title: "Contact",
        description: "Talk with Bridgenine about consulting, workflow automation, or Project Alpha.",
      },
    },
};

export function copyFor() {
  return copy;
}
