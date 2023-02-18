import styles from "../styles/Layout.module.css";
import utilStyles from "../styles/utils.module.css";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const name = "VictorDev";
export const siteTitle = "Mi sitio web con next.js";

export default function Layout({ children, home, title, description }) {
  console.log(home)
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/img/1.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt={name}
            ></Image>
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/" legacyBehavior>
              <a>
                <Image
                  priority
                  src="/img/1.jpg"
                  className={utilStyles.borderCircle}
                  height={108}
                  width={108}
                  alt={name}
                ></Image>
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" legacyBehavior>
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
        <nav>
          <Link href="/" legacyBehavior>
            <a>Inicio | </a>
          </Link>
          <Link href="/blog" legacyBehavior>
            <a>Blog | </a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a>About | </a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a>Contacto</a>
          </Link>
        </nav>
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/" legacyBehavior>
            <a>← Volver al Inicio</a>
          </Link>
        </div>
      )}
    </div>
  );
}

Layout.defaultProps = {
  title: "Mi sitio web con Next",
  description: "Este es un sitio web para aprender con next.js",
};