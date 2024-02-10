import { useForm } from "react-hook-form";

import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import Checkbox from "../../ui/Checkbox";
import Textarea from "../../ui/Textarea";
import { useAllguest } from "./useAllguest";
import { useCabins } from "../cabins/useCabins";
import { useAddBooking } from "./useAddBoking";
import { useSettings } from "../settings/useSettings";
import { formatCurrency } from "../../utils/helpers";

export default function CreateBookingForm() {
  const { createBooking, isLoading: isCreatingBooking } = useAddBooking();
  const { guests, isLoading } = useAllguest();
  const { isLoading: LoadingCabins, cabins } = useCabins();
  const { settings = {} } = useSettings();
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { breakfastPrice } = settings;

  const status = ["unconfirmed", "checked-out", "checked-in"];

  function onSubmit({
    cabinData,
    guestId,
    observations,
    addBreakfast: hasBreakfast,
    numGuests,
    numNights,
    endDate,
    startDate,
    isPaid,
    status,
  }) {
    let time = " 00:00:00";

    let cabin = JSON.parse(cabinData);
    const extrasPrice = hasBreakfast ? breakfastPrice : 0;
    let totalPrice = extrasPrice + cabin.price;
    createBooking(
      {
        startDate: startDate + time,
        endDate: endDate + time,
        numNights,
        numGuests,
        cabinPrice: cabin.price,
        hasBreakfast,
        observations,
        cabinId: cabin.id,
        guestId,
        isPaid,
        extrasPrice,
        totalPrice,
        status,
      },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Start date" error={errors?.startDate?.message}>
        <Input
          type="date"
          id="starDate"
          {...register("startDate", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow label="End data" error={errors?.endDate?.message}>
        <Input
          type="date"
          id="endDate"
          {...register("endDate", { required: "This field is required" })}
        />
      </FormRow>
      <p></p>
      <FormRow label="Num nights" error={errors?.numNights?.message}>
        <Input
          type="number"
          id="numNights"
          defaultValue={0}
          {...register("numNights", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow label="Num guest" error={errors?.numGuests?.message}>
        <Input
          type="number"
          id="numGuest"
          va
          defaultValue={0}
          {...register("numGuests", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow label="Breakfast" error={errors?.addBreakfast?.message}>
        <Checkbox
          id="addBreakfast"
          render={{
            ...register("addBreakfast"),
          }}
        >
          Want to add Breakfast for {formatCurrency(breakfastPrice)}
        </Checkbox>
      </FormRow>
      <FormRow label="observations" error={errors?.observations?.message}>
        <Textarea
          type="textarea"
          id="observations"
          label="observations"
          {...register("observations", { required: "This field is required" })}
        />
      </FormRow>
      <FormRow label="Guest ID" error={errors?.guestId?.message}>
        <select
          {...register("guestId", { required: "This field is required" })}
          disabled={isLoading}
        >
          {guests?.map((guest) => (
            <option value={guest.id} key={guest.id}>
              {guest.fullName} - {guest.email}
            </option>
          ))}
        </select>
      </FormRow>
      <FormRow label="Select Cabin" error={errors?.cabinData?.message}>
        <select
          size={5}
          {...register("cabinData", { required: "This field is required" })}
          disabled={LoadingCabins}
        >
          {cabins?.map((cabin) => (
            <option
              value={JSON.stringify({
                id: cabin.id,
                price: cabin.regularPrice,
              })}
              key={cabin.id}
            >
              {cabin.name} - Price ${cabin.regularPrice}
            </option>
          ))}
        </select>
      </FormRow>
      {/* ---------------- futuras implemetnaciónes -------------- 
      
      <FormRow label="Select cabin">
        <ul
          style={{ display: "flex", gap: 4, width: "100%" }}
          {...register("guestid", { required: "This field is required" })}
        >
          {cabins?.map((cabin) => (
            <li value={cabin.id} key={cabin.id}>
              <p>${cabin.regularPrice}</p>
              <img
                src={cabin.image}
                alt={`cabin${cabin.name}.png`}
                width={200}
              />
            </li>
          ))}
        </ul>
      </FormRow> */}

      <FormRow label="confirm that is paid the total amount of $6,050.00.">
        <Checkbox
          id="isPaid"
          render={{
            ...register("isPaid"),
          }}
        >
          Is paid
        </Checkbox>
      </FormRow>

      <FormRow label="Select State" error={errors?.status?.message}>
        <select {...register("status", { required: "This field is required" })}>
          {status.map((state, index) => (
            <option value={state} key={index}>
              {state}
            </option>
          ))}
        </select>
      </FormRow>

      <FormRow>
        <Button disabled={isCreatingBooking}> Create booking</Button>
      </FormRow>
      {/**  total Price   Status isPaid  */}
    </Form>
  );
}
