import { useQuery } from "@tanstack/react-query";
import { getAllGuests } from "../../services/apiGuests";

export function useAllguest() {
  const { data: guests, isLoading } = useQuery({
    queryFn: getAllGuests,
    queryKey: ["guests"],
  });

  return { guests, isLoading };
}
