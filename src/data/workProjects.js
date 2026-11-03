// Implementaciones de Zoho (EBSA Group y Adroit), agrupadas por rubro y con los clientes de cada uno.
export const implHeader = {
  title: { es: "Implementaciones de Zoho", en: "Zoho implementations" },
  intro: {
    es: "En EBSA Group, para clientes de la empresa.",
    en: "At EBSA Group, for the company's clients.",
  },
  companies: { es: "Empresas", en: "Companies" },
};

export const implementations = [
  {
    id: "real-estate",
    tab: { es: "Inmobiliarias", en: "Real estate" },
    icon: "building",
    wide: true,
    title: { es: "Agencias inmobiliarias", en: "Real estate agencies" },
    clients: ["Urban Domus", "Insignia", "Habitalis", "GAO", "Tago", "Consorcio JGL & Casatua", "Century 21"],
    groups: [
      {
        label: { es: "Preventa", en: "Pre-sales" },
        note: { es: "En todas", en: "All clients" },
        tags: ["Zoho CRM", "Meta Business Suite", { es: "Captación de leads", en: "Lead capture" }],
      },
      {
        label: { es: "Posventa", en: "After-sales" },
        note: { es: "Urban Domus", en: "Urban Domus" },
        tags: ["Zoho Booking", "Zoho CRM", "Zoho Desk", "Zoho Forms", "HTML", "CSS", "JavaScript"],
      },
      {
        label: { es: "Marketing", en: "Marketing" },
        note: { es: "Insignia", en: "Insignia" },
        tags: ["Zoho Campaigns"],
      },
    ],
  },
  {
    id: "dental",
    tab: { es: "Clínica", en: "Clinic" },
    icon: "dental",
    title: { es: "Clínica odontológica", en: "Dental clinic" },
    clients: ["IOA"],
    groups: [{ tags: ["Zoho CRM", "Meta Business Suite"] }],
  },
  {
    id: "law",
    tab: { es: "Jurídico", en: "Legal" },
    icon: "law",
    title: { es: "Estudio jurídico", en: "Law firm" },
    clients: ["M360"],
    about: {
      es: "Redacción de documentos y firma de contratos.",
      en: "Document writing and contract signing.",
    },
    groups: [{ tags: ["Zoho CRM", "Zoho Writer", "Zoho Sign"] }],
  },
  {
    id: "service",
    tab: { es: "Servicio técnico", en: "Tech services" },
    icon: "wrench",
    title: { es: "Servicio técnico", en: "Technical services" },
    clients: ["MMCALL"],
    about: {
      es: "Gestión de instalaciones y servicios técnicos.",
      en: "Management of installations and technical services.",
    },
    groups: [{ tags: ["Zoho Desk", "Zoho CRM", "Zoho Forms"] }],
  },
  {
    id: "logistics",
    tab: { es: "Logística", en: "Logistics" },
    icon: "truck",
    title: { es: "Empresa de logística", en: "Logistics company" },
    clients: ["Comex", "AEX"],
    groups: [
      { label: { es: "Comex", en: "Comex" }, tags: ["Zoho CRM", "Zoho Inventory", "Zoho Books"] },
      { label: { es: "AEX", en: "AEX" }, tags: ["Zoho CRM", "Zoho Writer"] },
    ],
  },
  {
    id: "invoicing",
    tab: { es: "Facturación", en: "Invoicing" },
    icon: "receipt",
    wide: true,
    title: { es: "Facturación electrónica", en: "E-invoicing" },
    about: {
      es: "Zoho Books integrado con Factury para emitir facturas electrónicas, y digitalización de notas de crédito, facturas y recibos para facturación pre impresa.",
      en: "Zoho Books connected to Factury to issue e-invoices, and digitization of credit notes, invoices, and receipts for pre-printed invoicing.",
    },
    groups: [{ tags: ["Zoho Books", "Factury", "REST APIs"] }],
  },
];

export const reports = {
  title: { es: "Reportes y dashboards en la mayoría", en: "Reports and dashboards in most" },
  tags: ["Zoho Analytics", "SQL"],
};
