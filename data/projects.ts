export type Project = {
    slug: string;
    title: string;
    client: string;
    year: string;
    tag: string;
    tagline: string;
    description: string;
    challenge: string;
    solution: string;
    results: string;
    tech: string[];
    externalUrl: string;
    image: string;
  };

  export const projectsData: Project[] = [
    {
      slug: "pulse",
      title: "Pulse - Sex Shop",
      client: "Pulse",
      year: "2023",
      tag: "E-commerce",
      tagline: "E-commerce completo para uma marca adulta com foco em conversão e experiência premium.",
      description: "Criação de um e-commerce completo para um sex shop, utilizando WordPress e WooCommerce.",
      challenge: "Criar uma experiência de compra segura, discreta e ao mesmo tempo visualmente atraente em um segmento com restrições.",
      solution: "Design elegante com paleta sóbria, checkout otimizado e navegação intuitiva por categorias.",
      results: "Site funcional com catálogo completo, integração de pagamentos e layout responsivo premium.",
      tech: ["WordPress", "WooCommerce", "CSS personalizado", "UI/UX Design"],
      externalUrl: "https://pulsesexshop.com.br/",
      image: "/images/pulse.png",
    },
    {
      slug: "domum",
      title: "Estilo Domum",
      client: "Estilo Domum",
      year: "2023",
      tag: "E-commerce",
      tagline: "E-commerce elegante para uma marca de moda com foco em conversão e identidade visual forte.",
      description: "Criação de um e-commerce para a marca Domum, desenvolvido em WordPress e WooCommerce.",
      challenge: "Transmitir o DNA da marca — elegância e sofisticação — através de um e-commerce funcional que convertesse.",
      solution: "Layout editorial, tipografia refinada, paleta cuidadosamente escolhida e fluxo de checkout reduzido.",
      results: "Loja online com identidade visual consistente, boa performance e navegação fluida.",
      tech: ["WordPress", "WooCommerce", "UI/UX Design", "Identidade Visual"],
      externalUrl: "https://estilodomum.com.br/",
      image: "/images/domum.png",
    },
    {
      slug: "makemais",
      title: "Make Mais",
      client: "Make+",
      year: "2024",
      tag: "E-commerce B2B",
      tagline: "Plataforma B2B de vendas para uma empresa de cosméticos com foco em escala e usabilidade.",
      description: "E-commerce B2B desenvolvido para a Make+ em WordPress e WooCommerce.",
      challenge: "Criar uma plataforma que atendesse tanto revendedores quanto clientes finais, com controle de acesso e catálogo segmentado.",
      solution: "Estrutura multi-perfil, navegação clara por categorias de atacado e varejo, busca otimizada.",
      results: "Plataforma funcional com diferentes níveis de acesso, catálogo organizado e conversão melhorada.",
      tech: ["WordPress", "WooCommerce", "B2B customization", "UI/UX Design"],
      externalUrl: "https://produtosmakemais.com.br/novo/",
      image: "/images/makemais.png",
    },
  ];
  