import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: '',
    email: '',
    authenticated: false
  }),
  actions: {
    setName(name: string) {
      this.name = name;
    },
    setEmail(email: string) {
      this.email = email;
    },
    setAuthenticationStatus(status: boolean) {
      this.authenticated = status;
    },
    login(name: string, email: string) {
      this.setName(name);
      this.setEmail(email);
      this.setAuthenticationStatus(true);
    },
    logout() {
      this.setName('');
      this.setEmail('');
      this.setAuthenticationStatus(false);
    },
  },
});
