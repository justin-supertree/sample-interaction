import Layout from "@/components/Layout";
import { NextPageWithLayout } from "@/types/next-page";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  border: 1px solid;
`;

const MainPage: NextPageWithLayout = () => {
  return <Container>Hello world!</Container>;
};

export default MainPage;

MainPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
