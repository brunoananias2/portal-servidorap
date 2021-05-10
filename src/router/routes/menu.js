export default [
  {
    path: '/menu/inicio',
    name: 'inicio',
    component: () => import('@/views/menu/inicio/Inicio.vue'),
  },
  {
    path: '/menu/contracheque',
    name: 'contracheque',
    component: () => import('@/views/menu/contracheque/Contracheque.vue'),
  },
]
