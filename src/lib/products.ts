export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  price?: number;
  status: "disponível" | "sob encomenda";
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Redmi Note 15",
    category: "Smartphones",
    description: "Smartphone com câmera de alta resolução e bateria de longa duração.",
    price: 1200,
    status: "disponível",
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&h=400&fit=crop",
  },
  {
    id: "2",
    name: "iPhone Seminovo",
    category: "Smartphones",
    description: "iPhone em excelente estado, revisado e com garantia.",
    price: 2500,
    status: "disponível",
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=400&fit=crop",
  },
  {
    id: "3",
    name: "Carregador Turbo",
    category: "Acessórios",
    description: "Carregador rápido para dispositivos móveis.",
    status: "disponível",
    image: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
  },
  {
    id: "4",
    name: "Cabo USB-C",
    category: "Acessórios",
    description: "Cabo resistente para carregamento e transferência de dados.",
    status: "disponível",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
  },
  {
    id: "5",
    name: "Fone Bluetooth",
    category: "Áudio",
    description: "Fone sem fio com cancelamento de ruído.",
    price: 300,
    status: "disponível",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
  },
  {
    id: "6",
    name: "Caixa de Som",
    category: "Áudio",
    description: "Caixa de som portátil com bateria de longa duração.",
    price: 150,
    status: "sob encomenda",
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
  },
  {
    id: "7",
    name: "Garrafa Térmica",
    category: "Garrafas",
    description: "Garrafa térmica para manter bebidas quentes ou frias.",
    price: 80,
    status: "disponível",
    image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop",
  },
  {
    id: "8",
    name: "Capinha Protetora",
    category: "Acessórios",
    description: "Capinha resistente para proteção do dispositivo.",
    status: "disponível",
    image: "https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400&h=400&fit=crop",
  },
  {
    id: "9",
    name: "Película de Vidro",
    category: "Acessórios",
    description: "Película de vidro temperado para tela.",
    status: "disponível",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
  },
  {
    id: "10",
    name: "Notebook Gamer",
    category: "Notebooks",
    description: "Notebook com placa dedicada para jogos e trabalho.",
    price: 3500,
    status: "sob encomenda",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
  },
];

export const CATEGORIES = [
  "Todos",
  "Smartphones",
  "Acessórios",
  "Áudio",
  "Notebooks",
  "Garrafas",
  "Outros",
];