import axios from "axios";
import type { AxiosInstance } from "axios";
import { ref } from "#imports";

export interface SomeType {
  id: number;
  firstName: string;
}

export function createAxiosInstance(): AxiosInstance {
  return axios.create();
}
export function createRef() {
  return ref(false);
}
