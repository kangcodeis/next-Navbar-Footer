import Layout from "../components/Layout";

const App = ({ Component, pageProps }) => {
  return (
    <>
      {/* a 여기는 무조건 실행됨 페이지 레이아웃 풋터 글로벌적인 css들 여기 넣으면
      됨 */}
      <Layout>
        <br />
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default App;
