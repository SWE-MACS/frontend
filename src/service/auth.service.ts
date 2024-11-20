import { instance } from "./axios-instance";

export interface LoginRequest {
  phone_number: string;
  password: string;
}

export interface LoginResponse {
  id: string;
  name: string;
  birthDate: string;
  phoneNumber: string;
}

export const login = async (
  credentials: LoginRequest
): Promise<LoginResponse> => {
  const response = await instance.post("/v1/auth/login", credentials);
  return response.data;
};
