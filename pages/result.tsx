import { useRouter } from "next/router";
import useSWR from "swr";

export default function Result() {
  const router = useRouter();

  // const { session_id } = router.query;
  const { data, error } = useSWR(
    router.query.session_id ? `/api/checkout/${router.query.session_id}` : null,
    (url) => fetch(url).then((res) => res.json())
  );

  return <h1> {JSON.stringify(data, null, 2)}Resultados de checkout</h1>;
}
