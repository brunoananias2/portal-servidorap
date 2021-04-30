<template>
  <b-table
    responsive
    :items="items"
    :fields="fields"
    class="mb-0"
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
          key: 'id', label: '',
        },
        'rubrica',
        'indice',
        'parcela',
        'valor',
      ],
      items: [
        {
          id: 'P',
          rubrica: '01-0001-01 VENCIMENTO 1',
          indice: '',
          parcela: '',
          valor: '3.941,58',
        },
        {
          id: 'P',
          rubrica: '01-0074-01 ADIC INSALUBRID',
          indice: '',
          parcela: '',
          valor: '394,15',
        },
        {
          id: 'D',
          rubrica: '05-9702-06 PENSAO ALIMENTICIA',
          indice: '',
          parcela: '',
          valor: '559,05',
        },
        {
          id: 'D',
          rubrica: '05-9702-07 PENSAO ALIMENTICIA',
          indice: '',
          parcela: '',
          valor: '372,70',
        },
        {
          id: 'D',
          rubrica: '05-9815-01 AMPREV',
          indice: '',
          parcela: '',
          valor: '551,82',
        },
        {
          id: 'D',
          rubrica: '05-9991-01 IMPOSTO DE RENDA',
          indice: '',
          parcela: '',
          valor: '56,89',
        },
        {
          id: 'T',
          rubrica: '09-0257-01 REMUNERACAO VARIAVEL',
          indice: '',
          parcela: '',
          valor: '394,15',
        },
        {
          id: 'T',
          rubrica: '09-0907-01 ABAT POR DEP IRRF',
          indice: '',
          parcela: '',
          valor: '189,59',
        },
        {
          id: 'T',
          rubrica: '09-0908-01 BASE CALCULO IRRF',
          indice: '',
          parcela: '',
          valor: '2.852,16',
        },
        {
          id: 'T',
          rubrica: '09-0916-01 BASE CAL-AMPREV',
          indice: '',
          parcela: '',
          valor: '3.941,58',
        },
      ],
    }
  },
}
</script>
