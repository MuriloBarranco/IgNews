import { GetServerSideProps } from "next"
import Head from "next/head"

import styles from "./home.module.scss"
import { stripe } from "../services/stripe"
import { SubscribeButton } from "../components/SubscribeButton"

interface HomeProps {
  product: {
    priceId: string
    amount: number
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Inicio | IgNews</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>🖐🏻 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world
          </h1>

          <p>
            Get access to all the publications <br />
            <span>for {product.amount} month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.svg" alt="girl coding" />
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const price = await stripe.prices.retrieve("price_1NoB4CIGThJQBt57Yw0q7bjT")

  const product = {
    priceId: price.id,
    // Salvar em centavos para facilitar na hora de formatar
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  }

  return {
    props: {
      product,
    },
  }
}
