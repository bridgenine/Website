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
    services: string;
    solutions: string;
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

export const dictionary: Record<Lang, Copy> = {
  en: {
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
      language: "Language",
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
  },
  id: {
    nav: {
      home: "Beranda",
      about: "Tentang",
      services: "Layanan",
      solutions: "Solusi",
      product: "Project Alpha",
      contact: "Kontak",
      demo: "Hubungi kami",
      menu: "Menu",
      close: "Tutup",
      language: "Bahasa",
    },
    skip: "Loncat ke isi",
    footer: {
      line: "Konsultasi dan otomatisasi alur kerja.",
    },
    status: { pass: "Lulus", warning: "Peringatan", fail: "Gagal" },
    home: {
      kicker: "Firma konsultasi",
      title: "Konsultasi, dan banyak otomatisasi alur kerja.",
      lede: "Saran bisnis dan proses, otomatisasi, serta implementasi.",
      primary: "Hubungi kami",
      secondary: "Lihat layanan",
      whatTitle: "Yang Bridgenine kerjakan",
      what: [
        { title: "Konsultasi", body: "Konsultasi bisnis dan proses." },
        { title: "Otomatisasi alur kerja", body: "Termasuk otomatisasi berbantuan AI." },
        { title: "Implementasi", body: "Kami dampingi sampai penerapan." },
      ],
      servicesLink: "Semua layanan",
      solutionsKicker: "Solusi",
      solutionsTitle: "Project Alpha adalah salah satu solusi.",
      solutionsBody: "Tinjauan faktur di tempat. Penawaran lain bisa berdampingan.",
      solutionsLink: "Lihat solusi",
      ctaTitle: "Ceritakan pekerjaannya.",
      ctaBody: "Konsultasi, otomatisasi, implementasi, atau demo Project Alpha.",
    },
    about: {
      kicker: "Tentang",
      title: "Firma konsultasi yang mengotomatisasi pekerjaan.",
      lede: "Saran bisnis dan proses, lalu alur kerja termasuk otomatisasi berbantuan AI, dan implementasi.",
      points: [
        { title: "Konsultasi", body: "Konsultasi bisnis dan proses." },
        { title: "Otomatisasi alur kerja", body: "Pekerjaan berulang, termasuk berbantuan AI." },
        { title: "Implementasi", body: "Perubahan dibawa ke operasi harian." },
      ],
      placeholderLabel: "Placeholder",
      placeholderTitle: "Profil perusahaan",
      placeholderBody: "Tambahkan legalitas, kantor, dan tim di sini.",
    },
    services: {
      kicker: "Layanan",
      title: "Konsultasi dan otomatisasi alur kerja.",
      lede: "Cara Bridgenine bekerja dengan sebuah tim.",
      items: [
        { title: "Konsultasi", body: "Konsultasi bisnis dan proses." },
        { title: "Otomatisasi alur kerja", body: "Otomatisasi pekerjaan berulang, termasuk dengan AI." },
        { title: "Implementasi", body: "Cara kerja baru dijalankan di lapangan." },
      ],
      placeholderLabel: "Placeholder",
      placeholderTitle: "Contoh pekerjaan",
      placeholderBody: "Tambahkan proyek nyata di sini. Belum ada klien contoh.",
    },
    solutions: {
      kicker: "Solusi",
      title: "Produk dan solusi.",
      lede: "Project Alpha adalah salah satu solusi Bridgenine.",
      productTitle: "Project Alpha",
      productBody: "Tinjauan faktur offline yang dihosting sendiri.",
      productLink: "Buka Project Alpha",
      placeholderLabel: "Placeholder",
      placeholderTitle: "Solusi lain",
      placeholderBody: "Tambahkan penawaran berikutnya di sini.",
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
        title: "Bridgenine — Konsultasi dan otomatisasi alur kerja",
        description:
          "Bridgenine adalah firma konsultasi untuk bisnis dan proses, otomatisasi alur kerja, otomatisasi berbantuan AI, dan implementasi. Project Alpha adalah salah satu solusi.",
      },
      about: {
        title: "Tentang",
        description:
          "Bridgenine memberi konsultasi cara kerja, mengotomatisasi alur kerja, dan mendampingi implementasi. Project Alpha adalah salah satu solusi.",
      },
      services: {
        title: "Layanan",
        description:
          "Layanan Bridgenine: konsultasi bisnis dan proses, otomatisasi alur kerja termasuk berbantuan AI, dan implementasi.",
      },
      solutions: {
        title: "Solusi",
        description:
          "Solusi Bridgenine. Project Alpha adalah salah satunya: tinjauan faktur offline yang dihosting sendiri.",
      },
      product: {
        title: "Project Alpha",
        description:
          "Project Alpha adalah sistem tinjauan kepatuhan AI yang dihosting sendiri dan sepenuhnya offline untuk faktur, aturan pajak, dan kode KBLI 2020.",
      },
      contact: {
        title: "Kontak",
        description: "Hubungi Bridgenine untuk konsultasi, otomatisasi alur kerja, atau Project Alpha.",
      },
    },
  },
};

export function copyFor(lang: Lang) {
  return dictionary[lang];
}
