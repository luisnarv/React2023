import { useFetcher } from "react-router-dom";
import Button from "../../UI/Button";
import { updateOrder } from "../../Services/apiRestaurant";

export default function UpdateORder() {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className=" text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export async function action({ request, params }) {
  const data = { priority: true };
  await updateOrder(params.orderID, data);
  return null;
}
