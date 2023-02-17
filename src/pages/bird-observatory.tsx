import { Text, Image } from "@nextui-org/react";

import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });
import styles from "@/styles/Home.module.css";

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
            Bird Observatory
        </Text>
        <Image
        src="/BirdObservatory.jpg"
        alt=""
        />
        </main>
    </>
  );
}
