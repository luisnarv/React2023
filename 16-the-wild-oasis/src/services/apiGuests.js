import supabase from "./supabase";

export async function getAllGuests() {
  let { data, error } = await supabase.from("guests").select("*");

  if (error) {
    console.log(error);
    throw new Error("Guests could not be load");
  }
  return data;
}
