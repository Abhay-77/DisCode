
import { supabase } from "../supabase";
import { z } from "zod";

const signInSchema = z.object({
  username: z.string().min(1, { message: "Enter a username" }).trim(),
  password: z
    .string()
    .min(6, { message: "Enter a password with >= 6 characters" }),
  email: z.string().email({ message: "Please enter a mail id" }),
});
const loginSchema = signInSchema.omit({ username: true });

export async function signInUser(prevState, formData) {
  const rawFormData = {
    username: formData.get("username"),
    password: formData.get("password"),
    email: formData.get("email"),
  };
  const parsedData = signInSchema.safeParse(rawFormData);
  if (!parsedData.success) {
    return {
      errors: parsedData.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }
  if (await isEmailExists(rawFormData.email)) {
    alert("Account already exists");
    return;
  }
  const { error } = await supabase.from("Users").insert(rawFormData);
  if (error) {
    alert("Account creation failed");
  } else {
    alert("Account created successfully");
    return {success:true}
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

export async function loginUser(setId, prevState, formData) {
  const rawFormData = {
    username: formData.get("username"),
    password: formData.get("password"),
    email: formData.get("email"),
  };
  const parsedData = loginSchema.safeParse(rawFormData);
  if (!parsedData.success) {
    return {
      errors: parsedData.error.flatten().fieldErrors,
      message: "Invalid fields",
    };
  }
  const data = await isEmailExists(rawFormData.email);
  if (data && data.password == rawFormData.password) {
    setId(data.id);
    return {success:true}
  } else {
    alert("Account doesn't exist");
    return false;
  }
}

export async function fetchCampsData() {
  const { data, error } = await supabase.from("Camps").select();
  if (error) {
    return 0;
  } else {
    return data;
  }
}
