<template>
  <div class="q-pa-md flex flex-center " style="height: 100vh; " >
    <q-card class="q-pa-lg" style="width: 350px">
      <q-card-section>
        <div class="text-h6">ورود به سامانه</div>
      </q-card-section>

      <q-card-section>
        <q-input v-model="username" label="نام کاربری" outlined dense />
        <q-input v-model="password" type="password" label="کلمه عبور" outlined dense class="q-mt-md" />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn color="primary" label="ورود" @click="login" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useAuthStore } from '../stores/auth'
import { ref } from 'vue'

const router = useRouter()
const auth = useAuthStore()

const username = ref('')
const password = ref('')

function login() {
  if (username.value && password.value) {
    auth.login(username.value)
    router.push('/dashboard')
  }
}
</script>
<style>
.q-pa-md{
  background: linear-gradient(135deg, #cbe9ff 0%, #e6f2ff 100%);
}
.q-card{
  border: solid;
  border-color: #1976d2;
  font-family: Vazirmatn,serif;
}
.text-h6{
  font-family: Vazirmatn,serif;
  text-align: center;
}
.q-btn, .q-input{
  font-family: Vazirmatn,serif;
}
.bg-blue-2{
background: linear-gradient(359deg, #1976d2, #f0f8ff);
}
.q-card__actions .q-btn--rectangle{
  padding: 0 127px;
}
.q-field--dense .q-field__control, .q-field--dense .q-field__marginal{
  direction: rtl;
}
</style>
