import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.hero} itemScope itemType="https://schema.org/WebApplication">
        <meta itemProp="name" content="Oliani - Agência Digital" />
        <meta itemProp="description" content="Agência digital que conecta marcas, pessoas e oportunidades com uma experiência clara, moderna e impactante." />
        <meta itemProp="url" content="https://oliani.dev" />
        
        <section className={styles.content}>
          <span className={styles.badge}>Em breve</span>
          <h1 itemProp="headline">Estamos preparando algo especial para sua marca digital</h1>
          <p itemProp="description">
            Oliani é uma agência digital especializada em criar experiências claras, modernas e impactantes. 
            Conectamos marcas, pessoas e oportunidades através de <strong>web design</strong>, <strong>desenvolvimento web</strong> e 
            <strong> consultoria digital</strong>.
          </p>

          <div className={styles.actions}>
            <a 
              className={styles.primary} 
              href="mailto:guilhermenoliani@gmail.com"
              rel="noopener noreferrer"
              title="Enviar email para Oliani"
            >
              Fale conosco
            </a>
            <a
              className={styles.secondary}
              href="https://www.instagram.com/oliani.dev"
              target="_blank"
              rel="noreferrer noopener"
              title="Siga Oliani no Instagram"
            >
              Siga a gente
            </a>
          </div>
        </section>

        <aside className={styles.card}>
          <p className={styles.cardLabel}>Projetos em construção</p>
          <ul>
            <li>Site institucional com portfólio</li>
            <li>Showcase de serviços digitais</li>
            <li>Sistema de contato e agendamento</li>
          </ul>
        </aside>
      </main>
    </div>
  );
}
