import { Grid } from "@nextui-org/react";
import { BirdObservatoryCard } from "@/components/BirdObservatoryCard";
import { Text } from "@nextui-org/react";

import { Inter } from "@next/font/google";
import { Geometry } from "@/components/Geometry";
import { AloneTogether } from "@/components/AloneTogether";
import { Casa } from "@/components/Casa";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
    <main className={styles.main}>
        <Text
          h1
          size={60}
          css={{
            color:"Wheat",
          }}
          weight="bold"
        >
          My Portfolio
        </Text>

        <Grid.Container gap={2} justify="center">
          <Grid xs={12} sm={4}>
            <BirdObservatoryCard />
          </Grid>
          <Grid xs={12} sm={3}>
            <Casa />
          </Grid>
          <Grid xs={12} sm={3}>
            <Geometry />
          </Grid>
          <Grid xs={12} sm={3}>
            <AloneTogether />
          </Grid>
        </Grid.Container>
        </main>
    </>
  );
}
