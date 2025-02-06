import { supabase } from "../supabase";
import { z } from "zod";

const userSchema = z.object({
  username: z.string(),
  password: z.string().min(6),
  email: z.string().email(),
});

export async function signInUser(formData) {
  if (await isEmailExists(formData.email)) {
    alert("Account already exists");
    return;
  }
  const { error } = await supabase.from("Users").insert({
    username: formData.username,
    email: formData.email,
    password: formData.password,
  });
  if (error) {
    alert("Account creation failed");
  } else {
    alert("Account created successfully");
  }
}

export async function isEmailExists(email) {
  const { data, error } = await supabase
    .from("Users")
    .select()
    .eq("email", email);
  console.log(data);
  if (data.length != 0) {
    return true;
  } else {
    return false;
  }
}
