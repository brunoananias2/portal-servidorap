<template>
  <b-table
    responsive
    :items="items"
    :fields="fields"
    class="mb-0"
    id="total"
  >
  </b-table>
</template>

<script>
import { BTable } from 'bootstrap-vue'

export default {
  components: {
    BTable,
  },
  data() {
    return {
      fields: [
        {
          key: 'total_proventos', label: 'Total de proventos',
        },
        {
          key: 'total_descontos', label: 'Total de descontos',
        },
        {
          key: 'total_liquido', label: 'Total líquido',
        },
      ],
      items: [
        {
          total_proventos: 'R$ 4.335,73',
          total_descontos: 'R$ 1.540,46',
          total_liquido: 'R$ 2.795,27',
        },
      ],
    }
  },
}
</script>

<style>
#total tr{
  text-align: center;
}
</style>
