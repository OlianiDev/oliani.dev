import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.hero}>
        <section className={styles.content}>
          <span className={styles.badge}>Em breve</span>
          <h1>Estamos preparando algo especial para o seu próximo projeto.</h1>
          <p>
            Oliani está organizando sua nova presença digital para conectar
            marcas, pessoas e oportunidades com uma experiência mais clara,
            moderna e impactante.
          </p>

          <div className={styles.actions}>
            <a className={styles.primary} href="mailto:guilhermenoliani@gmail.com">
              Fale conosco
            </a>
            <a
              className={styles.secondary}
              href="https://www.instagram.com/oliani.dev"
              target="_blank"
              rel="noreferrer"
            >
              Siga a gente
            </a>
          </div>
        </section>

        <aside className={styles.card}>
          <p className={styles.cardLabel}>Em construção</p>
          <ul>
            <li>Site institucional</li>
            <li>Portfólio e serviços</li>
            <li>Canal de contato direto</li>
          </ul>
        </aside>
      </main>
    </div>
  );
}
