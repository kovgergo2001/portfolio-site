import { Navbar } from "@nextui-org/react";

export default function AppNavbar() {

  return (
    <>
    <Navbar variant="static" maxWidth="fluid">
      <Navbar.Content
        variant="default"
      >
        <Navbar.Link href="/">Home</Navbar.Link>
        <Navbar.Link href="/about-me">
          About me
        </Navbar.Link>
      </Navbar.Content>
    </Navbar>
    </>
  );
}
