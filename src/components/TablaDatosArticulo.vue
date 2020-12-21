<template>
    <div id="app">
  <v-app id="inspire">
    <v-data-table
      :headers="headers"
      :items="articulos"
      sort-by="nombre"
      class="elevation-1"
      :loading="cargando"
      loading-text="Cargando... Por favor espere"
    >
      <template v-slot:top>
        <v-toolbar
          flat
        >
          <v-toolbar-title>Artículos</v-toolbar-title>
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
                Agregar artículo
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
                        label="Artículo"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                    >
                    <v-text-field
                        v-model="editedItem.codigo"
                        label="Código"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                    >
                      <v-textarea
                        v-model="editedItem.descripcion"
                        label="Descripción"
                        auto-grow
                        no-resize
                      ></v-textarea>
                    </v-col>
                    <v-col
                      cols="12"
                    >
                      <v-textarea
                        v-model="editedItem.resumen"
                        label="Resumen"
                        auto-grow
                        no-resize
                      ></v-textarea>
                    </v-col>
                    <v-col
                      cols="12"
                    >
                      <v-textarea
                        v-model="editedItem.imagen"
                        label="Imagen"
                        auto-grow
                        no-resize
                      ></v-textarea>
                    </v-col>
                     <v-col
                      cols="12"
                    >
                      <v-select
                        v-model="categoria"
                        label="Categoría"
                        :items="categorias"
                        item-text="nombre"
                        item-value="id"
                        return-object
                      ></v-select>
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
        text: 'Artículo',
        align: 'start',
        sortable: true,
        value: 'nombre',
      },
      { text: 'Código', value: 'codigo' },
      { text: 'Descripción', value: 'descripcion' },
      { text: 'Resumen', value: 'resumen' },
      { text: 'Imagen', value: 'imagen' },
      { text: 'Categoría', value: 'categoria.nombre' },
      { text: 'Estado', value: 'estado' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    articulos: [],
    categoria: '',
    categorias: [],
    editedIndex: -1,
    editedItem: {
      nombre: '',
      codigo: "",
      descripcion:"",
      resumen:"",
      imagen:"",
      estado: 1,
      categoria:{
        id:0,
        nombre:""
      }
    },
    defaultItem: {
      nombre: '',
      codigo: "",
      descripcion:"",
      resumen:"",
      imagen:"",
      estado: 0,
      categoria:{
        id:0,
        nombre:""
      }
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
    this.list();
    this.listCategoria();
  },

  methods: {
    initialize () {
      
    },

    list(){
      axios.get('http://localhost:3000/api/articulo/list').then(response=>{
        this.articulos = response.data;
        this.cargando=false;
      }).catch(error =>{
        console.log(error);
      })
    },

    listCategoria(){
      axios.get('http://localhost:3000/api/categoria/list').then(response=>{
        this.categorias = response.data;
        this.cargando=false;
      }).catch(error =>{
        console.log(error);
      })
    },

    editItem (item) {
      this.editedIndex = item.id
      this.categoria = item? item.categoria : '';
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
        axios.put('http://localhost:3000/api/articulo/deactivate',{
          "id":this.editedItem.id,
        }).then(response=>{
        this.list();
      }).catch(error =>{
        return error;
      })
       
      } else {
        //post
        axios.put('http://localhost:3000/api/articulo/activate',{
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
        this.categoria = ''
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
        axios.put('http://localhost:3000/api/articulo/update',{
          "id":this.editedItem.id,
          "nombre":this.editedItem.nombre,
          "descripcion":this.editedItem.descripcion,
          "resumen":this.editedItem.resumen,
          "imagen":this.editedItem.imagen,          
          "codigo":this.editedItem.codigo,
          "categoria": this.categoria.id
        }).then(response=>{
        this.list();
      }).catch(error =>{
        return error;
      })
       
      } else {
        //post
        axios.post('http://localhost:3000/api/articulo/add',{
          "estado":this.editedItem.estado,
          "nombre":this.editedItem.nombre,
          "descripcion":this.editedItem.descripcion,
          "resumen":this.editedItem.resumen,
          "imagen":this.editedItem.imagen, 
          "codigo":this.editedItem.codigo,
          "categoriaId": this.categoria.id
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