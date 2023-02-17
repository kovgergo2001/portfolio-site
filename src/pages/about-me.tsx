import { Image, Spacer, Text } from "@nextui-org/react";

export default function AboutMe() {
    return (
      <>
        <Spacer/>
        <Image
        src="Andi.jpg"
        alt="Default Image"
        css={{ borderRadius: "50%" }}
        width={300}
        height={300}
        objectFit="cover"
        />
        <Spacer/>
        <Text size="$3xl" color="#ECEDEE" css={{textAlign:"center"}}>
          Andrea Keri
        </Text>
        <Spacer/>
        <Spacer/>
        <Text size="$xl" color="#ECEDEE" css={{textAlign:"center"}}>
          As a dedicated architecture student with a passion for creating sustainable and innovative designs, 
        </Text>
        <Text size="$xl" color="#ECEDEE" css={{textAlign:"center"}}>
          I am driven to turn my passion into a successful career. With hands-on experience gained through work in the field, 
        </Text>
        <Text size="$xl" color="#ECEDEE" css={{textAlign:"center"}}>
          I bring a unique perspective to the design process. Whether it's in the studio or on a job site, 
        </Text>
        <Text size="$xl" color="#ECEDEE" css={{textAlign:"center"}}>
          I am always eager to learn and grow as an architect.
        </Text>
        <Text size="$xl" color="#ECEDEE" css={{textAlign:"center"}}>
          My ultimate goal is to make a positive impact on the built environment and the communities it serves.
        </Text>
      </>
    );
  }
  