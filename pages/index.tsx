import React, { useEffect } from "react";
import BasicLayout from "../components/Templates/Layouts/BasicLayout/BasicLayout";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  useEffect(() => {
    router.replace("/store");
  }, []);
  return <BasicLayout />;
};

// Home.getInitialProps = async ({ res }) => {
//   if (res) {
//     // On the server, we'll use an HTTP response to
//     // redirect with the status code of our choice.
//     // 307 is for temporary redirects.
//     res.writeHead(307, { Location: '/store' })
//     res.end()
//   }
// }

export default Home;
