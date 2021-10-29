<template>
  <div class="admin-login">
    <auth-title>
      Login to Admin Panel
    </auth-title>
    <auth-input
      id="email"
      type="email"
      placeholder="Email"
      v-model="email"
    />
    <auth-input
      id="password"
      type="password"
      placeholder="Password"
      v-model="password"
    />
    <auth-message
      v-if="isError"
      :message="error"
    />
    <ui-button size="lg" @click="doLogin">
      Login
    </ui-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import AuthTitle from '@components/auth/AuthTitle';
import AuthInput from '@components/auth/AuthInput';
import AuthMessage from '@components/auth/AuthMessage';

export default {
  name: 'AdminLogin',
  components: { AuthMessage, AuthInput, AuthTitle },
  data() {
    return {
      email: '',
      password: '',
      error: ''
    };
  },
  computed: {
    isError() {
      return this.error !== '';
    }
  },
  methods: {
    ...mapActions('adminAuth', ['a_login']),
    async doLogin() {
      try {
        const payload = {
          email: this.email,
          password: this.password
        };
        await this.a_login(payload);
        this.error = '';
      } catch (e) {
        this.error = e?.response?.data?.message;
      }
    }
  }
};
</script>

<style scoped lang="scss">
  .admin-login {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
</style>
