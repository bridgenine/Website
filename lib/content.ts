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
      demo: "Request a demo",
      menu: "Menu",
      close: "Close",
      language: "Language",
    },
    skip: "Skip to content",
    footer: {
      line: "On-prem software for Indonesian businesses.",
    },
    status: { pass: "Pass", warning: "Warning", fail: "Fail" },
    home: {
      kicker: "On your server",
      title: "Software that stays in the building.",
      lede: "Bridgenine builds on-premises software for Indonesian businesses.",
      primary: "Request a demo",
      secondary: "See Project Alpha",
      whatTitle: "What Bridgenine does",
      what: [
        {
          title: "On your server",
          body: "Installed at the client premises.",
        },
        {
          title: "Offline by design",
          body: "Work runs on the client machine.",
        },
        {
          title: "Project Alpha",
          body: "The product Bridgenine ships today.",
        },
      ],
      highlightKicker: "One product",
      highlightTitle: "Project Alpha reviews invoices.",
      highlightBody: "Offline checks against Indonesian tax rules and KBLI 2020. Pass, warning, or fail.",
      highlightLink: "Explore Project Alpha",
      ctaTitle: "See it on your server.",
      ctaBody: "Ask for a demo of Project Alpha.",
    },
    about: {
      kicker: "About",
      title: "On-prem software for Indonesian businesses.",
      lede: "Bridgenine builds software that runs on the client server.",
      points: [
        { title: "On-premises", body: "Software runs on the client server." },
        { title: "Offline", body: "Client data is not sent to a cloud AI." },
        { title: "Project Alpha", body: "The current product. It reviews invoices on-site." },
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
      title: "Request a demo",
      lede: "Tell us a little about your team.",
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
      sent: "Sent. We will reply about a demo.",
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
        "You send a request",
        "We reply to arrange a demo",
        "Project Alpha is installed on your server",
      ],
    },
    meta: {
      home: {
        title: "Bridgenine — On-prem software for Indonesian businesses",
        description:
          "Bridgenine builds on-premises software that runs on the client server. Project Alpha is the current product.",
      },
      about: {
        title: "About",
        description:
          "Bridgenine builds self-hosted software for Indonesian businesses. Project Alpha is the product.",
      },
      product: {
        title: "Project Alpha",
        description:
          "Project Alpha is a self-hosted, fully offline AI compliance review system for Indonesian invoices, tax rules, and KBLI 2020 codes.",
      },
      contact: {
        title: "Contact",
        description: "Request a demo from Bridgenine.",
      },
    },
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      product: "Project Alpha",
      contact: "Kontak",
      demo: "Minta demo",
      menu: "Menu",
      close: "Tutup",
      language: "Bahasa",
    },
    skip: "Loncat ke isi",
    footer: {
      line: "Perangkat lunak on-prem untuk bisnis Indonesia.",
    },
    status: { pass: "Lulus", warning: "Peringatan", fail: "Gagal" },
    home: {
      kicker: "Di server Anda",
      title: "Perangkat lunak yang tetap di gedung.",
      lede: "Bridgenine membuat perangkat lunak on-prem untuk bisnis Indonesia.",
      primary: "Minta demo",
      secondary: "Lihat Project Alpha",
      whatTitle: "Yang Bridgenine kerjakan",
      what: [
        { title: "Di server Anda", body: "Dipasang di lokasi klien." },
        { title: "Offline sejak awal", body: "Pekerjaan berjalan di mesin klien." },
        { title: "Project Alpha", body: "Produk yang Bridgenine buat saat ini." },
      ],
      highlightKicker: "Satu produk",
      highlightTitle: "Project Alpha meninjau faktur.",
      highlightBody: "Pemeriksaan offline terhadap aturan pajak Indonesia dan KBLI 2020. Lulus, peringatan, atau gagal.",
      highlightLink: "Jelajahi Project Alpha",
      ctaTitle: "Lihat di server Anda.",
      ctaBody: "Minta demo Project Alpha.",
    },
    about: {
      kicker: "Tentang",
      title: "Perangkat lunak on-prem untuk bisnis Indonesia.",
      lede: "Bridgenine membuat perangkat lunak yang berjalan di server klien.",
      points: [
        { title: "On-premises", body: "Perangkat lunak berjalan di server klien." },
        { title: "Offline", body: "Data klien tidak dikirim ke AI cloud." },
        { title: "Project Alpha", body: "Produk saat ini. Meninjau faktur di tempat." },
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
      title: "Minta demo",
      lede: "Ceritakan sedikit tentang tim Anda.",
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
      sent: "Terkirim. Kami akan membalas untuk demo.",
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
        "Anda mengirim permintaan",
        "Kami membalas untuk jadwal demo",
        "Project Alpha dipasang di server Anda",
      ],
    },
    meta: {
      home: {
        title: "Bridgenine — Perangkat lunak on-prem untuk bisnis Indonesia",
        description:
          "Bridgenine membuat perangkat lunak on-prem yang berjalan di server klien. Project Alpha adalah produk saat ini.",
      },
      about: {
        title: "Tentang",
        description:
          "Bridgenine membuat perangkat lunak yang dihosting sendiri untuk bisnis Indonesia. Produknya adalah Project Alpha.",
      },
      product: {
        title: "Project Alpha",
        description:
          "Project Alpha adalah sistem tinjauan kepatuhan AI yang dihosting sendiri dan sepenuhnya offline untuk faktur, aturan pajak, dan kode KBLI 2020.",
      },
      contact: {
        title: "Kontak",
        description: "Minta demo dari Bridgenine.",
      },
    },
  },
};

export function copyFor(lang: Lang) {
  return dictionary[lang];
}
