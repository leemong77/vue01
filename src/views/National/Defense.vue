<template>
    <div>
       Defense
    </div>
</template>

<script>
   

    export default {
        name:'V01',
        components:{
        },
        data(){return{
            list:[
                {name:'scv',hp:100},
                {name:'bug',hp:80},
                {name:'prove',hp:70}
            ]
        }},
        methods:{
            attack(unit,damage){
                unit.hp -= damage;
            },
            healing(unit,damage){
                unit.hp += damage;
            },
        },

    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>