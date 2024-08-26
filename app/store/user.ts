import { create } from "zustand";
import { User } from "../api/models/user";
import { authorization, getUser } from "../api/auth";
import { jwtDecode } from "jwt-decode";

interface UserState {
  user: User | null;
  authUser: (by: { login: string; password: string }) => void;
}

export const useUser = create<UserState>((set) => ({
  user: null,
  authUser: async (user) => {
    const result = await authorization(user);
    const userData = jwtDecode<User>(result.data.accessToken)
    set({user: {email: userData.email, name: userData.name}})
  },
}));
