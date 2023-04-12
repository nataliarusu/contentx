import "../styles/globals.css";
import Layout from "../components/Layout";
import { createClient } from "../../prismicio";

function App({ Component, pageProps, menu }) {
  console.log(menu)
  return (
    <Layout menu={menu}>
      <Component {...pageProps} />
    </Layout>
  );
}

App.getInitialProps = async (appContext) => {
  const { ctx } = appContext;

  let pageProps = {};
  if (appContext.Component.getInitialProps) {
    pageProps = await appContext.Component.getInitialProps(ctx);
  }

  const client = createClient();
  const menu = await client.getSingle("menu");
  return { pageProps, menu: menu.data };
};

export default App;

