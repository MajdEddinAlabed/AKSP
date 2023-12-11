"use client";
// useSignUp.ts
import { useState } from "react";
// import { BackAPIClient as api } from "@/src/bClient/client";
import { UserCreateDto } from "@/src/lib/types";

export function useSignUp() {
  const [formData, setFormData] = useState<UserCreateDto>({
    password: "",
    userName: "",
    email: "",
    gender: "",
    birthDate: "",
    countryId: 0,
    cityId: 0,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // await (await api()).usersPOST(formData);
      // Registration successful, you might want to redirect or show a success message.
    } catch (error) {
      // Handle registration error (e.g., display an error message).
      console.error("Registration error:", error);
    }
  };

  return { formData, handleChange, handleSubmit };
}
