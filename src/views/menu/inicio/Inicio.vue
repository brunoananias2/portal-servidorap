<template>
  <div>
    <b-alert
      variant="primary"
      show
    >
      <div class="alert-body">
        <p>
          <span>Seja bem-vindo Fulano da Silva.</span>
        </p>
      </div>
    </b-alert>
  </div>
</template>

<script>
import { BAlert } from 'bootstrap-vue'

export default {
  components: {
    BAlert,
  },
}
</script>
