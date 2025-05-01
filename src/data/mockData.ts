export interface ServiceType {
  id: number;
  title: string;
  description: string;
  icon: string;
  image: string;
}

export interface TestimonialType {
  id: number;
  name: string;
  role: string;
  testimonial: string;
  image: string;
}

export interface StatsType {
  id: number;
  value: string;
  label: string;
  icon: string;
  percentage?: number;
}

export interface PartnerType {
  id: number;
  name: string;
  logo: string;
}

export interface LeadType {
  id: number;
  type: string;
  location: string;
  date: string;
  status: string;
  potentialValue: string;
}

// Services proposés
export const services: ServiceType[] = [
  {
    id: 1,
    title: "Panneaux photovoltaïques",
    description: "Production d'électricité durable grâce à l'énergie solaire",
    icon: "solar",
    image: "https://images.unsplash.com/photo-1613665813446-82a78c468a1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 2,
    title: "Isolation thermique",
    description: "Isolation par l'extérieur pour une efficacité énergétique maximale",
    icon: "isolation",
    image: "https://images.unsplash.com/photo-1585704032915-c3400418cfc9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 3,
    title: "Pompes à chaleur",
    description: "Chauffage écologique et économique pour votre habitation",
    icon: "heatpump",
    image: "https://images.unsplash.com/photo-1631282183627-2c52d3062ea0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

// Témoignages clients
export const testimonials: TestimonialType[] = [
  {
    id: 1,
    name: "Marc Dupont",
    role: "Propriétaire à Nantes",
    testimonial: "Grâce à cette plateforme, j'ai pu installer des panneaux solaires chez moi. L'économie sur ma facture d'électricité est considérable !",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Sophie Martin",
    role: "Gérante d'entreprise à Lyon",
    testimonial: "J'ai trouvé rapidement un installateur qualifié pour l'isolation de nos locaux. Un service efficace et des professionnels compétents.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    name: "Thomas Bernard",
    role: "Propriétaire à Marseille",
    testimonial: "Ma pompe à chaleur fonctionne parfaitement et j'ai réduit ma consommation énergétique de 40%. Je recommande vivement !",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
  }
];

// Statistiques
export const stats: StatsType[] = [
  {
    id: 1,
    value: "12 500",
    label: "Leads générés",
    icon: "leads",
    percentage: 24
  },
  {
    id: 2,
    value: "3 200",
    label: "Installations réalisées",
    icon: "installation",
    percentage: 18
  },
  {
    id: 3,
    value: "850",
    label: "Entreprises partenaires",
    icon: "partners",
    percentage: 32
  },
  {
    id: 4,
    value: "6.2M€",
    label: "Économies réalisées",
    icon: "savings",
    percentage: 42
  }
];

// Partenaires
export const partners: PartnerType[] = [
  {
    id: 1,
    name: "ÉcoSolutions",
    logo: "eco"
  },
  {
    id: 2,
    name: "EnergieVerte",
    logo: "green"
  },
  {
    id: 3,
    name: "SolairePro",
    logo: "solar"
  },
  {
    id: 4,
    name: "IsoTherm",
    logo: "iso"
  },
  {
    id: 5,
    name: "FranceChaleur",
    logo: "heat"
  }
];

// Leads récents (pour le dashboard)
export const recentLeads: LeadType[] = [
  {
    id: 1,
    type: "Panneaux solaires",
    location: "Bordeaux",
    date: "28/04/2025",
    status: "Nouveau",
    potentialValue: "8 500 €"
  },
  {
    id: 2,
    type: "Isolation thermique",
    location: "Paris",
    date: "27/04/2025",
    status: "Contacté",
    potentialValue: "12 300 €"
  },
  {
    id: 3,
    type: "Pompe à chaleur",
    location: "Lille",
    date: "26/04/2025",
    status: "Qualifié",
    potentialValue: "10 200 €"
  },
  {
    id: 4,
    type: "Panneaux solaires",
    location: "Toulouse",
    date: "25/04/2025",
    status: "Converti",
    potentialValue: "9 800 €"
  },
  {
    id: 5,
    type: "Isolation thermique",
    location: "Strasbourg",
    date: "24/04/2025",
    status: "Nouveau",
    potentialValue: "7 600 €"
  }
];

// Mock pour les graphiques
export const leadsByMonth = [
  { month: "Jan", value: 120 },
  { month: "Fév", value: 150 },
  { month: "Mar", value: 180 },
  { month: "Avr", value: 220 },
  { month: "Mai", value: 280 },
  { month: "Jui", value: 310 },
  { month: "Jui", value: 350 },
  { month: "Aoû", value: 320 },
  { month: "Sep", value: 290 },
  { month: "Oct", value: 270 },
  { month: "Nov", value: 230 },
  { month: "Déc", value: 210 }
];

export const productDistribution = [
  { name: "Panneaux solaires", value: 42 },
  { name: "Isolation thermique", value: 28 },
  { name: "Pompes à chaleur", value: 30 }
];

export const conversionRate = [
  { date: "Semaine 1", taux: 15 },
  { date: "Semaine 2", taux: 18 },
  { date: "Semaine 3", taux: 22 },
  { date: "Semaine 4", taux: 24 },
  { date: "Semaine 5", taux: 26 },
  { date: "Semaine 6", taux: 28 },
  { date: "Semaine 7", taux: 30 },
  { date: "Semaine 8", taux: 32 }
];
