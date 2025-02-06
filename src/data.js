import { supabase } from "../supabase";
import { z } from "zod";

const userSchema = z.object({
  username: z.string(),
  password: z.string().min(6),
  email: z.string().email(),
});

export async function signInUser(formData) {
  const parsedData = userSchema.safeParse(formData)
  if (!parsedData.success) {
      
  }
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
  if (data.length != 0) {
    return data[0];
  } else {
    return false;
  }
}

export async function loginUser(formData) {
  const data = await isEmailExists(formData.email);
  if (
    data &&
    data.password == formData.password &&
    data.email === formData.email
  ) {
    return data.id;
  } else {
    alert("Account doesn't exist");
    return false;
  }
}

export async function fetchCampsData() {
  const {data,error} = await supabase.from('Camps').select()
  if (error) {
    return 0
  } else {
    console.log(data)
    return data
  }
}