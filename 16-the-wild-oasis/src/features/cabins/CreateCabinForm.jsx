/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useCreateCabin } from "./useCreateCabin";
import { useEditCabin } from "./useEditCabin";

function CreateCabinForm({ cabinToEdit = {} }) {
  const { id: editId, ...editValues } = cabinToEdit;
  const isEditSession = Boolean(editId);
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  const { errors } = formState;
  const { createCabin, isCreating } = useCreateCabin();
  const { editCabin, isEditing } = useEditCabin();
  const isWordking = isCreating || isEditing;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: () => {
            reset();
          },
        }
      );
    else
      createCabin(
        { ...data, image },
        {
          onSuccess: () => {
            reset();
          },
        }
      );
  }

  //function onError(error) {}

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="cabin name" error={errors?.name?.message}>
        <Input
          disabled={isWordking}
          type="text"
          id="name"
          {...register("name", { required: "this field is requerid" })}
        />
      </FormRow>

      <FormRow label="Maximum capacity" error={errors?.maxCapacity?.message}>
        <Input
          disabled={isWordking}
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "this field is requerid",
            min: { value: 1, message: "Capacity should be at least 1" },
          })}
        />
      </FormRow>

      <FormRow label="Regular price" error={errors?.regularPrice?.message}>
        <Input
          disabled={isWordking}
          type="number"
          id="regularPrice"
          {...register("regularPrice", { required: "this field is requerid" })}
        />
      </FormRow>

      <FormRow label="Discount" error={errors?.discount?.message}>
        <Input
          disabled={isWordking}
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "this field is requerid",
            validate: (value) =>
              Number(value) < Number(getValues().regularPrice) ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow>

      <FormRow
        label="Description for website"
        error={errors?.description?.message}
      >
        <Textarea
          disabled={isWordking}
          type="number"
          id="description"
          defaultValue=""
          {...register("description", { required: "this field is requerid" })}
        />
      </FormRow>

      <FormRow label="Cabin photo" error={errors?.image?.message}>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "THis field is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}

        <Button disabled={isWordking} variation="secondary" type="reset">
          Cancel
        </Button>
        <Button disabled={isWordking}>
          {" "}
          {!editId ? "Create cabin" : "Edit cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;

{
  /* 1) 
       <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input
          type="text"
          id="name"
          {...register("name", { required: "this field is requerid" })}
        />
      </FormRow>

    2)
      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "this field is requerid",
            min: { value: 1, message: "Capacity should be at least 1" },
          })}
        />
      </FormRow>

     3)
      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", { required: "this field is requerid" })}
        />
      </FormRow>

     4)
      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            required: "this field is requerid",
            validate: (value) =>
              value < getValues().regularPrice ||
              "Discount should be less than regular price",
          })}
        />
      </FormRow>

     5)
      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea
          type="number"
          id="description"
          defaultValue=""
          {...register("description", { required: "this field is requerid" })}
        />
      </FormRow>

     6)
      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
        <FileInput id="image" accept="image/*" />
      </FormRow> */
}
