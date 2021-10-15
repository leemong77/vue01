<template>
    <div>
        <Header :categories="categories" @clickCategory="clickCategory"/><div style="float:none"><br/><br/></div>
        <Nav :menus="menus" @clickNav="clickMenu"/>
        <Main/>
        <Footer :msg="'intended to coding arrow'"/>
    </div>
</template>

<script>
import axios from 'axios';

import Header from '@/components/Header'
import Nav from '@/components/Nav'
import Main from '@/components/Main'
import Footer from '@/components/Footer'

export default {
  name: 'index',
  components:{
      Header,
      Nav,
      Main,
      Footer
  },
  data() {
    return {
        categories : [
            {id:'1',title:'National',path:'national'},
            {id:'2',title:'Finantial',path:'finantial'},
            {id:'3',title:'Loan',path:'loan'},
            {id:'4',title:'Banking',path:'banking'}
        ],
        MenusOfCategories:[
            {   id:"1",
                menus: [
                    {id:'1',title:'Politics',path:'politics'},
                    {id:'2',title:'Diplomacy',path:'diplomacy'},
                    {id:'3',title:'Defense',path:'defense'},
                    {id:'4',title:'Law & Crime',path:'lowAndCrime'},
                    {id:'5',title:'Health & Welfare',path:'healthAndWelfare'},
                ]
            },
            {   id:"2",
                menus: [
                    {id:'1',title:'Policies',path:'policies'},
                    {id:'2',title:'EconomyMarkets',path:'economyMarkets'},
                    {id:'3',title:'Banks',path:'banks'},
                    {id:'4',title:'Non-banks',path:'non_banks'},
                    {id:'5',title:'Economic Essay Contest',path:'economic_Essay_Contest'},
                ]
            },
        ],
        category:{},
        menus:[],
        mainTitle:'title',
        mainContent:'content',
        mainBottom:'author ?'
    }
  },
  methods: {
    clickCategory(id){
        this.category = this.categories.find(c => {return c.id == id});
        this.menus = this.MenusOfCategories.find(function(m){return m.id == id}).menus;

        this.$router.push('/'+this.category.path+"/"+this.menus[0].path);
    },
    clickMenu(m){
        let mPath = m.path;

        this.$router.push('/'+this.category.path+'/'+mPath);
    }
  },
  mounted() {
    this.category = this.categories[0]
    this.menus = this.MenusOfCategories[0].menus;

    axios.get('https://jsonplaceholder.typicode.com/users/')
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
    
  }
}
</script>
<style scoped>
    /* header {
        background-color:lightgrey;
        height:100px;
    }
    nav {
        background-color:#339999;
        color:white;
        width:200px;
        height:300px;
        float:left;
    }
    section {
        width:200px;
        text-align:left;
        float:left;
        padding:10px;
    }
    footer {
        background-color:#FFCC00;
        height:100px;
        clear:both;
    }
    header, nav, section, footer { text-align:center; }
    header, footer { line-height:100px; }
    nav, section { line-height:240px; } */
</style>