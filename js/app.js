Vue.component('candidato',{
    //props: ['nombre','correoe','imagen'],
    props:{
        nombre: {
            type: [String, Array], //null = *
            required: true,
        },
        correoe: {
            type: String,
            default: '20001010@alumnos.utleon.edu.mx'
        },
        imagen: String,
        location: {
            type: Object,
            default(){
                return{
                    ciudad:'León'
                }
            }
        },
    },
    template: '#candidato-template',
});

new Vue({
    el: 'main',
    mounted() {
        this.obtenerCandidatos();
    },
    data: {
        candidatos: [],
    },
    methods: {
        obtenerCandidatos(){
            axios.get('https://randomuser.me/api/?results=100')
            .then((respuesta) =>{
                this.candidatos = respuesta.data.results;
            });
        }
    },
});