<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-btn icon class="mr-5" @click="salir()">
        <v-icon>mdi-logout</v-icon>
        <span>Salir</span>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list>
        <v-list-item :to="{ name: 'Home' }">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>

          <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item>

        <v-list-group prepend-icon="mdi-account-circle">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Principal</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon, ruta], i) in admins"
            :key="i"
            :to="{ name: ruta }"
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>

        <v-list-group prepend-icon="mdi-account-circle">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Acceso</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
            v-for="([title, icon, ruta], i) in cruds"
            :key="i"
            :to="{ name: ruta }"
          >
            <v-list-item-title v-text="title"></v-list-item-title>

            <v-list-item-icon>
              <v-icon v-text="icon"></v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-group>
      </v-list>

      <!--  -->
    </v-navigation-drawer>

    <v-main class="grey lighten-2">
      <v-container>
        
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "ComponenteAutenticado",

  components: {},

  data: () => ({
    drawer: null,
    admins: [
      ["Categoría", "mdi-account-multiple-outline", "Categoria"],
      ["Artículo", "mdi-cog-outline", "Articulo"],
    ],
    cruds: [["Usuarios", "mdi-plus-outline", "Usuario"]],
  }),

  methods: {
    salir() {
      this.$store.dispatch("salir");
    },

    
  },
};
</script>
