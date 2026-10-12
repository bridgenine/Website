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
      line: "On-prem compliance software for Indonesian businesses.",
    },
    status: { pass: "Pass", warning: "Warning", fail: "Fail" },
    home: {
      kicker: "Fully offline",
      title: "Indonesian invoices. Checked on-site.",
      lede: "Project Alpha runs on your server.",
      primary: "Request a demo",
      secondary: "See the product",
      whatTitle: "What Bridgenine does",
      what: [
        {
          title: "On your server",
          body: "Installed at the client premises.",
        },
        {
          title: "Read locally",
          body: "PDF, scan, or photo.",
        },
        {
          title: "Check locally",
          body: "Tax rules and KBLI 2020 codes.",
        },
      ],
      highlightKicker: "Project Alpha",
      highlightTitle: "Pass, warning, or fail.",
      highlightBody: "Plain explanations, dashboards, and reports.",
      highlightLink: "Explore Project Alpha",
      ctaTitle: "See it on your server.",
      ctaBody: "Ask for a demo of Project Alpha.",
    },
    about: {
      kicker: "About",
      title: "A bridge between invoices and the rules.",
      lede: "Self-hosted compliance software for Indonesian businesses.",
      points: [
        { title: "On-premises", body: "Software runs on the client server." },
        { title: "Offline", body: "Invoice data is not sent to a cloud AI." },
        { title: "Project Alpha", body: "The product Bridgenine ships today." },
      ],
      placeholderLabel: "Placeholder",
      placeholderTitle: "Company profile",
      placeholderBody: "Add registration, office, and team details here.",
    },
    product: {
      kicker: "Project Alpha",
      title: "AI compliance review. Fully offline.",
      lede: "For Indonesian invoices. Data stays on the client server.",
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
      messagePlaceholder: "What should we review?",
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
        title: "Bridgenine — On-prem AI compliance for Indonesia",
        description:
          "Bridgenine builds Project Alpha, a self-hosted offline system that reviews Indonesian invoices against tax rules and KBLI codes. Data stays on your server.",
      },
      about: {
        title: "About",
        description:
          "Bridgenine builds self-hosted compliance software for Indonesian businesses. The product is Project Alpha.",
      },
      product: {
        title: "Project Alpha",
        description:
          "Project Alpha is a self-hosted, fully offline AI compliance review system for Indonesian invoices, tax rules, and KBLI 2020 codes.",
      },
      contact: {
        title: "Contact",
        description:
          "Request a demo of Project Alpha, Bridgenine’s on-prem invoice compliance system.",
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
      line: "Perangkat lunak kepatuhan on-prem untuk bisnis Indonesia.",
    },
    status: { pass: "Lulus", warning: "Peringatan", fail: "Gagal" },
    home: {
      kicker: "Sepenuhnya offline",
      title: "Faktur Indonesia. Diperiksa di tempat.",
      lede: "Project Alpha berjalan di server Anda.",
      primary: "Minta demo",
      secondary: "Lihat produk",
      whatTitle: "Yang Bridgenine kerjakan",
      what: [
        { title: "Di server Anda", body: "Dipasang di lokasi klien." },
        { title: "Dibaca secara lokal", body: "PDF, pindaian, atau foto." },
        { title: "Dicek secara lokal", body: "Aturan pajak dan kode KBLI 2020." },
      ],
      highlightKicker: "Project Alpha",
      highlightTitle: "Lulus, peringatan, atau gagal.",
      highlightBody: "Penjelasan yang mudah, dasbor, dan laporan.",
      highlightLink: "Jelajahi Project Alpha",
      ctaTitle: "Lihat di server Anda.",
      ctaBody: "Minta demo Project Alpha.",
    },
    about: {
      kicker: "Tentang",
      title: "Jembatan antara faktur dan aturan.",
      lede: "Perangkat lunak kepatuhan yang dihosting sendiri untuk bisnis Indonesia.",
      points: [
        { title: "On-premises", body: "Perangkat lunak berjalan di server klien." },
        { title: "Offline", body: "Data faktur tidak dikirim ke AI cloud." },
        { title: "Project Alpha", body: "Produk yang Bridgenine buat saat ini." },
      ],
      placeholderLabel: "Placeholder",
      placeholderTitle: "Profil perusahaan",
      placeholderBody: "Tambahkan legalitas, kantor, dan tim di sini.",
    },
    product: {
      kicker: "Project Alpha",
      title: "Tinjauan kepatuhan AI. Sepenuhnya offline.",
      lede: "Untuk faktur Indonesia. Data tetap di server klien.",
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
      messagePlaceholder: "Apa yang ingin ditinjau?",
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
        title: "Bridgenine — Kepatuhan AI on-prem untuk Indonesia",
        description:
          "Bridgenine membuat Project Alpha, sistem offline yang dihosting sendiri untuk meninjau faktur Indonesia terhadap aturan pajak dan kode KBLI. Data tetap di server Anda.",
      },
      about: {
        title: "Tentang",
        description:
          "Bridgenine membuat perangkat lunak kepatuhan yang dihosting sendiri untuk bisnis Indonesia. Produknya adalah Project Alpha.",
      },
      product: {
        title: "Project Alpha",
        description:
          "Project Alpha adalah sistem tinjauan kepatuhan AI yang dihosting sendiri dan sepenuhnya offline untuk faktur, aturan pajak, dan kode KBLI 2020.",
      },
      contact: {
        title: "Kontak",
        description: "Minta demo Project Alpha, sistem kepatuhan faktur on-prem dari Bridgenine.",
      },
    },
  },
};

export function copyFor(lang: Lang) {
  return dictionary[lang];
}
