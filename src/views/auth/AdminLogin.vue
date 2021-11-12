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
    <div class="admin-login__footer">
      <el-button
        size="medium"
        type="primary"
        @click="doLogin"
      >
        Login
      </el-button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

import AuthTitle from '@components/auth/AuthTitle';
import AuthInput from '@components/auth/AuthInput';
import AuthMessage from '@components/auth/AuthMessage';
import { getErrorText } from '@global/helpers';

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
    ...mapActions('admin/auth', ['a_login']),
    async doLogin() {
      try {
        const payload = {
          email: this.email,
          password: this.password
        };
        await this.a_login(payload);
        this.error = '';
      } catch (e) {
        console.log(e);
        this.error = getErrorText(e);
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
