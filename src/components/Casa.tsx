import { Card, Col, Row, Text } from "@nextui-org/react";

export const Casa = () => (
  <Card css={{ w: "100%", h: "400px" }} isHoverable isPressable>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src="Casa.jpg"
        objectFit="cover"
        width="100%"
        height="100%"
        alt="Relaxing app background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#0f111466",
        borderTop: "$borderWeights$light solid $gray800",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <Row>
        <Col>
          <Row>
            <Col>
              <Text color="#d1d1d1" size={20}>
                Casa
              </Text>
              <Text color="#d1d1d1" size={12}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque vel lobortis lectus. Fusce quam nisl, tristique nec fermentum quis, pharetra sodales ligula.
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);
