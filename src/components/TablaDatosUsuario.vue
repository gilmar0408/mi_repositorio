<template>
    <div id="app">
  <v-app id="inspire">
    <v-data-table
      :headers="headers"
      :items="usuarios"
      sort-by="nombre"
      class="elevation-1"
      :loading="cargando"
      loading-text="Cargando... Por favor espere"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Usuarios</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="500px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="primary"
                dark
                class="mb-2"
                v-bind="attrs"
                v-on="on"
              >
                Agregar usuario
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">{{ formTitle }}</span>
              </v-card-title>
  
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="editedItem.nombre"
                        label="Nombre"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="editedItem.rol"
                        label="Rol"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="editedItem.password"
                        label="password"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="editedItem.email"
                        label="Email"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                    >
                      <v-text-field
                        v-model="editedItem.estado"
                        label="Estado"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue darken-1"
                  text
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
                <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:item.actions="{ item }">
        <v-icon
          small
          class="mr-2"
          @click="editItem(item)"
        >
          mdi-pencil
        </v-icon>
        <v-icon
          medium
          @click="deleteItem(item)"
        >
         <template v-if="item.estado">
           mdi-toggle-switch
         </template>
         <template v-else>
           mdi-toggle-switch-off-outline
         </template>
        </v-icon>
      </template>
      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Reset
        </v-btn>
      </template>
    </v-data-table>
  </v-app>
</div>
</template>

<script>
import axios from 'axios';
export default {
  data: () => ({
    dialog: false,
    dialogDelete: false,
    cargando: true,
    headers: [
      { text: 'Id', value: 'id' },
      {
        text: 'Nombre',
        align: 'start',
        sortable: true,
        value: 'nombre',
      },
      { text: 'Rol', value: 'rol' },
      { text: 'Email', value: 'email' },
      { text: 'Estado', value: 'estado' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    usuarios: [],
    editedIndex: -1,
    editedItem: {
      nombre: '',
      rol:"",
      password:"",
      email: "",
      estado: 1,
    },
    defaultItem: {
      nombre: '',
      rol:"",
      password:"",
      email: "",
      estado: 1,
    },
  }),

  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
    this.list()
  },

  methods: {
    initialize () {
      
    },

    list(){
      axios.get('http://localhost:3000/api/usuario/list').then(response=>{
        this.usuarios = response.data;
        this.cargando=false;
      }).catch(error =>{
        console.log(error);
      })
    },

    editItem (item) {
      this.editedIndex = item.id
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = item.id
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
       if (this.editedItem.estado === 1) {
        //put
        axios.put('http://localhost:3000/api/usuario/deactivate',{
          "id":this.editedItem.id,
        }).then(response=>{
        this.list();
      }).catch(error =>{
        return error;
      })
       
      } else {
        //post
        axios.put('http://localhost:3000/api/usuario/activate',{
          "id":this.editedItem.id,
        }).then(response=>{
        this.list();
      }).catch(error =>{
        return error;
      })
      }
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        //put
        axios.put('http://localhost:3000/api/usuario/update',{
          "id":this.editedItem.id,
          "nombre":this.editedItem.nombre,
          "email":this.editedItem.email,
          "rol":this.editedItem.rol,
          "password":this.editedItem.password
        }).then(response=>{
        this.list();
      }).catch(error =>{
        return error;
      })
       
      } else {
        //post
        axios.post('http://localhost:3000/api/usuario/add',{
          "estado":this.editedItem.estado,
          "nombre":this.editedItem.nombre,
          "email":this.editedItem.email,
          "rol":this.editedItem.rol,
          "password":this.editedItem.password
        }).then(response=>{
        this.list();
      }).catch(error =>{
        return error;
      })
      }
      this.close()
    },
  }
}
</script>