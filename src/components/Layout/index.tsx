import styled from "@emotion/styled";
import Head from "next/head";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainSection = styled.div`
  width: 100%;
  max-width: calc(100vw - (320px + 24px + 1.5rem));
  min-height: 100vh;
  height: 100%;
`;

const Layout = ({ children }: Props) => (
  <>
    <Head>
      <title>Justin&apos;s Project</title>
    </Head>
    <Container>
      <MainSection>{children}</MainSection>
    </Container>
  </>
);

export default Layout;
