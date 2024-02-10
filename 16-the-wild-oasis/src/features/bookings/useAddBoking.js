import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addBoking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useAddBooking() {
  const queryClient = useQueryClient();
  const { mutate: createBooking, isLoading } = useMutation({
    mutationFn: addBoking,
    onSuccess: () => {
      toast.success("New cabin successfully created");
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (err) => toast.error(err.message),
  });

  return { createBooking, isLoading };
}
