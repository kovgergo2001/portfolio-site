import { Card, Col, Row, Button, Text } from "@nextui-org/react";

export const AloneTogether = () => (
  <Card css={{ w: "100%", h: "400px" }} isHoverable isPressable>
    <Card.Body css={{ p: 10 }}>
      <Card.Image
        src="AloneTogether.jpg"
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
                Alone Together
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
