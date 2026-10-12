import type { Lang } from "@/lib/site";
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
    product: string;
    contact: string;
    demo: string;
    menu: string;
    close: string;
    language: string;
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
    highlightKicker: string;
    highlightTitle: string;
    highlightBody: string;
    highlightLink: string;
    ctaTitle: string;
    ctaBody: string;
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

export const dictionary: Record<Lang, Copy> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      product: "Project Alpha",
      contact: "Contact",
      demo: "Talk with us",
      menu: "Menu",
      close: "Close",
      language: "Language",
    },
    skip: "Skip to content",
    footer: {
      line: "Workflow automation and consulting.",
    },
    status: { pass: "Pass", warning: "Warning", fail: "Fail" },
    home: {
      kicker: "Bridgenine",
      title: "Workflow automation and consulting.",
      lede: "We help teams simplify how work gets done.",
      primary: "Talk with us",
      secondary: "See Project Alpha",
      whatTitle: "What Bridgenine does",
      what: [
        {
          title: "Workflow automation",
          body: "Repeated steps, handled in software.",
        },
        {
          title: "Consulting",
          body: "Hands-on help to put the work in place.",
        },
        {
          title: "Project Alpha",
          body: "One product: on-site invoice review.",
        },
      ],
      highlightKicker: "One product",
      highlightTitle: "Project Alpha reviews invoices.",
      highlightBody: "Offline checks against Indonesian tax rules and KBLI 2020. Pass, warning, or fail.",
      highlightLink: "Explore Project Alpha",
      ctaTitle: "Tell us about the work.",
      ctaBody: "Automation, consulting, or a Project Alpha demo.",
    },
    about: {
      kicker: "About",
      title: "Workflow automation and consulting.",
      lede: "Two services for how work gets done. Project Alpha is one product.",
      points: [
        { title: "Automation", body: "Software for the steps a team repeats." },
        { title: "Consulting", body: "Practical help from mapping to rollout." },
        { title: "Project Alpha", body: "On-site invoice review, when that is the job." },
      ],
      placeholderLabel: "Placeholder",
      placeholderTitle: "Company profile",
      placeholderBody: "Add registration, office, and team details here.",
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
        title: "Bridgenine — Workflow automation and consulting",
        description:
          "Bridgenine provides workflow automation and consulting services. Project Alpha is a product for on-site invoice review.",
      },
      about: {
        title: "About",
        description:
          "Bridgenine offers workflow automation and consulting. Project Alpha is one product.",
      },
      product: {
        title: "Project Alpha",
        description:
          "Project Alpha is a self-hosted, fully offline AI compliance review system for Indonesian invoices, tax rules, and KBLI 2020 codes.",
      },
      contact: {
        title: "Contact",
        description: "Talk with Bridgenine about workflow automation, consulting, or Project Alpha.",
      },
    },
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      product: "Project Alpha",
      contact: "Kontak",
      demo: "Hubungi kami",
      menu: "Menu",
      close: "Tutup",
      language: "Bahasa",
    },
    skip: "Loncat ke isi",
    footer: {
      line: "Otomatisasi alur kerja dan konsultasi.",
    },
    status: { pass: "Lulus", warning: "Peringatan", fail: "Gagal" },
    home: {
      kicker: "Bridgenine",
      title: "Otomatisasi alur kerja dan konsultasi.",
      lede: "Kami membantu tim menyederhanakan cara kerja.",
      primary: "Hubungi kami",
      secondary: "Lihat Project Alpha",
      whatTitle: "Yang Bridgenine kerjakan",
      what: [
        { title: "Otomatisasi alur kerja", body: "Langkah berulang dikerjakan oleh perangkat lunak." },
        { title: "Konsultasi", body: "Bantuan langsung untuk menjalankannya." },
        { title: "Project Alpha", body: "Satu produk: tinjauan faktur di tempat." },
      ],
      highlightKicker: "Satu produk",
      highlightTitle: "Project Alpha meninjau faktur.",
      highlightBody: "Pemeriksaan offline terhadap aturan pajak Indonesia dan KBLI 2020. Lulus, peringatan, atau gagal.",
      highlightLink: "Jelajahi Project Alpha",
      ctaTitle: "Ceritakan pekerjaannya.",
      ctaBody: "Otomatisasi, konsultasi, atau demo Project Alpha.",
    },
    about: {
      kicker: "Tentang",
      title: "Otomatisasi alur kerja dan konsultasi.",
      lede: "Dua layanan untuk cara kerja. Project Alpha adalah satu produk.",
      points: [
        { title: "Otomatisasi", body: "Perangkat lunak untuk langkah yang berulang." },
        { title: "Konsultasi", body: "Bantuan praktis, dari pemetaan sampai penerapan." },
        { title: "Project Alpha", body: "Tinjauan faktur di tempat, bila itu pekerjaannya." },
      ],
      placeholderLabel: "Placeholder",
      placeholderTitle: "Profil perusahaan",
      placeholderBody: "Tambahkan legalitas, kantor, dan tim di sini.",
    },
    product: {
      kicker: "Project Alpha",
      title: "Tinjauan kepatuhan AI. Sepenuhnya offline.",
      lede: "Produk Bridgenine untuk faktur Indonesia. Data tetap di server klien.",
      problemTitle: "Masalahnya",
      problems: [
        { title: "Cek manual lambat", body: "Faktur menumpuk. Aturan pajak mudah terlewat." },
        { title: "AI cloud berisiko", body: "Data faktur dan pajak keluar dari gedung." },
      ],
      howTitle: "Cara kerjanya",
      steps: [
        { title: "Unggah", body: "PDF, pindaian, atau foto." },
        { title: "Baca", body: "OCR lokal dan model open-source lokal." },
        { title: "Periksa", body: "Aturan pajak Indonesia dan kode KBLI 2020 yang terdaftar." },
        { title: "Laporkan", body: "Lulus, peringatan, atau gagal. Dasbor, PDF, dan Excel." },
      ],
      featuresTitle: "Yang diperiksa",
      features: [
        "PPN, termasuk 12% dan DPP nilai lain",
        "PPh 23, PPh 4(2), dan PPh 22",
        "Kolom NPWP dan e-Faktur",
        "Total faktur",
        "Faktur duplikat",
        "Kode usaha KBLI 2020",
        "Penjelasan bahasa sederhana",
        "Dasbor",
        "Laporan PDF dan Excel",
      ],
      privacyTitle: "Data tetap di tempat",
      privacyBody: "Dihosting sendiri. Sepenuhnya offline.",
      privacy: [
        "Dipasang di server klien",
        "Tanpa perjalanan ke cloud",
        "Data faktur dan pajak tidak pernah keluar dari lokasi",
      ],
      audienceTitle: "Untuk siapa",
      audiences: [
        { title: "Tim keuangan", body: "Penerimaan dan tinjauan faktur." },
        { title: "Tim pajak", body: "Kolom PPN, PPh, NPWP, dan e-Faktur." },
        { title: "Perusahaan on-prem", body: "Tim yang tidak boleh mengirim data faktur ke luar." },
      ],
      ctaTitle: "Minta demo",
      ctaBody: "Kami tunjukkan Project Alpha di lingkungan Anda.",
    },
    illustration: {
      label: "Ilustrasi",
      caption: "Contoh layar. Bukan hasil pelanggan.",
      invoice: "INV-SAMPLE",
      rows: [
        { label: "PPN 12%", status: "pass", note: "Tarif sesuai" },
        { label: "DPP nilai lain", status: "pass", note: "Kolom ada" },
        { label: "PPh 23", status: "warning", note: "Tarif beda" },
        { label: "NPWP", status: "fail", note: "Format belum lengkap" },
        { label: "Duplikat", status: "warning", note: "Kemungkinan ganda" },
        { label: "KBLI 2020", status: "pass", note: "Kode sesuai" },
      ],
    },
    contact: {
      kicker: "Kontak",
      title: "Hubungi kami",
      lede: "Otomatisasi, konsultasi, atau demo Project Alpha.",
      name: "Nama",
      company: "Perusahaan",
      email: "Email",
      phone: "Telepon / WhatsApp",
      message: "Pesan",
      namePlaceholder: "Nama Anda",
      companyPlaceholder: "Nama perusahaan",
      emailPlaceholder: "nama@perusahaan.com",
      phonePlaceholder: "+62…",
      messagePlaceholder: "Ada yang bisa kami bantu?",
      submit: "Kirim permintaan",
      sending: "Mengirim…",
      sent: "Terkirim. Kami akan membalas.",
      mailto: "Aplikasi email Anda akan terbuka dengan permintaan ini.",
      unconfigured: "Formulir ini belum terhubung ke kotak masuk. Pesan tidak terkirim.",
      failed: "Pengiriman gagal. Coba lagi.",
      errors: {
        required: "Wajib diisi.",
        email: "Masukkan email yang valid.",
        phone: "Masukkan nomor telepon atau WhatsApp.",
        short: "Tulis pesan singkat.",
      },
      nextTitle: "Berikutnya",
      next: [
        "Anda mengirim catatan",
        "Kami membalas",
        "Kami susun ruang lingkupnya bersama",
      ],
    },
    meta: {
      home: {
        title: "Bridgenine — Otomatisasi alur kerja dan konsultasi",
        description:
          "Bridgenine menyediakan otomatisasi alur kerja dan layanan konsultasi. Project Alpha adalah produk untuk tinjauan faktur di tempat.",
      },
      about: {
        title: "Tentang",
        description:
          "Bridgenine menawarkan otomatisasi alur kerja dan konsultasi. Project Alpha adalah satu produk.",
      },
      product: {
        title: "Project Alpha",
        description:
          "Project Alpha adalah sistem tinjauan kepatuhan AI yang dihosting sendiri dan sepenuhnya offline untuk faktur, aturan pajak, dan kode KBLI 2020.",
      },
      contact: {
        title: "Kontak",
        description: "Hubungi Bridgenine untuk otomatisasi alur kerja, konsultasi, atau Project Alpha.",
      },
    },
  },
};

export function copyFor(lang: Lang) {
  return dictionary[lang];
}
