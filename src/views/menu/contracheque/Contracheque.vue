<template>
  <b-row class="match-height">
    <!-- customizing headings -->
    <b-col md="12">
      <b-card no-body>
        <b-card-header>
          <b-card-title>Consultar Contracheque</b-card-title>
        </b-card-header>
        <b-table-simple responsive borderless w-100>
          <b-tr>
            <b-td colspan="2">
              <b-card-text><strong>Órgão: </strong> SECRETARIA DO ESTADO DA SAÚDE</b-card-text>
            </b-td>
          </b-tr>
          <b-tr>
            <b-td style="width: 30%">
              <b-card-text><strong>Matrícula: </strong> 002897-4-01</b-card-text>
            </b-td>
            <b-td style="width: 70%">
              <b-card-text><strong>Nome: </strong> FULANO DA SILVA</b-card-text>
            </b-td>
          </b-tr>
          <b-tr>
            <b-td>
              <b-card-text><strong>CPF: </strong> 121.832.967-80</b-card-text>
            </b-td>
            <b-td>
              <b-card-text><strong>Categoria: </strong> Ativo</b-card-text>
            </b-td>
          </b-tr>
          <b-tr>
            <b-td colspan="2">
              <b-card-text><strong>Regime de trabalho: </strong> Estatutário</b-card-text>
            </b-td>
          </b-tr>
          <b-tr>
            <b-td colspan="2">
              <b-card-text><strong>Lotação: </strong> UNIDADE MISTA DE FERREIRA GOMES</b-card-text>
            </b-td>
          </b-tr>
          <b-tr>
            <b-td colspan="2">
              <b-card-text><strong>Cargo: </strong> NIVEL BASICO\AUXILIAR ADMINISTRATIVO - APOIO A GESTAO</b-card-text>
            </b-td>
          </b-tr>
        </b-table-simple>
        <b-row class="p-200 mb-50">
          <b-col
            md="6"
            xl="3"
            class="mb-1"
          >
            <b-form-group
              label="Mês"
              label-for="mes"
            >
            <b-form-select
              v-model="selected"
              :options="options"
            />
            </b-form-group>
          </b-col>
          <b-col
            md="6"
            xl="3"
            class="mb-1"
          >
            <b-form-group
              label="Ano"
              label-for="ano"
            >
            <b-form-input
              id="ano"
              value="2021"
            />
            </b-form-group>
          </b-col>
          <b-col cols="12" class="d-flex justify-content-end">
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              type="submit"
              variant="primary"
              class="mr-1"
              v-on:click="teste()"
            >
              Consultar
            </b-button>
            <b-button
              v-ripple.400="'rgba(255, 255, 255, 0.15)'"
              type="submit"
              variant="warning"
              class="mr-1"
              v-on:click="teste()"
            >
              Imprimir
            </b-button>
          </b-col>
        </b-row>
        <div class="d-flex justify-content-center mb-1">
          <b-spinner label="Loading..." v-if="loading" />
        </div>
        <transition name="fade">
          <b-row>
            <b-col cols="12" v-if="show">
              <hr>
              <div class="top-contracheque d-flex justify-content-center mb-1">
                <b-card-title>Detalhamento</b-card-title>
              </div>
              <table-responsive/>
              <table-total/>
            </b-col>
          </b-row>
        </transition>
      </b-card>
    </b-col>
    <!--/ customizing headings -->
  </b-row>
</template>

<script>
import {
  BRow, BCol, BCard, BCardHeader, BCardTitle, BCardText, BTableSimple, BTr, BTd, BFormSelect, BFormInput, BButton, BFormGroup, BSpinner,
} from 'bootstrap-vue'
import TableResponsive from './TableResponsive.vue'
import TableTotal from './TableTotal.vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BTableSimple,
    BCardHeader,
    BCardTitle,
    BCardText,
    // BThead,
    BTr,
    // BTh,
    BTd,
    BFormSelect,
    BFormInput,
    BButton,
    BFormGroup,
    TableResponsive,
    TableTotal,
    BSpinner,
  },
  data() {
    return {
      show: false,
      loading: false,
      selected: '5',
      options: [
        { value: '1', text: 'Janeiro' },
        { value: '2', text: 'Fevereiro' },
        { value: '3', text: 'Março' },
        { value: '4', text: 'Abril' },
        { value: '5', text: 'Maio' },
        { value: '6', text: 'Junho' },
        { value: '7', text: 'Julho' },
        { value: '8', text: 'Agosto' },
        { value: '9', text: 'Setembro' },
        { value: '10', text: 'Outubro' },
        { value: '11', text: 'Novembro' },
        { value: '12', text: 'Dezembro' },
      ],
    }
  },
  methods: {
    teste() {
      this.loading = !this.loading
      setTimeout(() => {
        this.loading = !this.loading
        this.show = !this.show
      }, 1000)
    },
  },
}
</script>
<style>
.p-200{
  padding: 2rem;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
.top-contracheque{
  background: #00cfe8;
  height: 2rem;
}
.top-contracheque h4{
  padding: 4px;
  color: #fff;
}
</style>
