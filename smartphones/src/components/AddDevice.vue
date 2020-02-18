<template>
    <div class="add-device container">
        <h2 class="center-align indigo-text">Add new Device</h2>
        <form @submit.prevent="AddDevice">
            <div class="field model">
                <label for="phone">Device model:</label>
                <input type="text" name="phone" v-model="phone">
            </div>
            <div class="field specs">
                <label for="soc">Soc:</label>
                <input type="text" name="soc" v-model="soc">
                <label for="display">Display:</label>
                <input type="text" name="display" v-model="display">
                <label for="camera">Camera:</label>
                <input type="text" name="camera" v-model="camera">
            </div>
            <div class="field center-align">
                <button class="btn pink">Add Device</button>
            </div>
        </form>
    </div> 
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify' 

export default {
    name: 'AddDevice',
    data(){

        return{
            phone: null,
            soc: null,
            display: null,
            camera: null,
            specs: [],
            slug: null
        }
    },
    methods: {
        AddDevice(){
            if(this.phone && this.soc && this.display && this.camera){
                 this.specs.push(this.soc)
                 this.specs.push(this.display)
                 this.specs.push(this.camera)
                 this.slug = slugify(this.phone,{
                     replacement: '-',
                     remove: /[$*_+~.()'"!\-:@]/g,
                     lower: true
                 })
                 db.collection('devices').add({
                   phone: this.phone,
                   specs: this.specs,
                   slug:  this.slug
                 }).then(() => {
                   this.$router.push({name: 'Index'})
                 }).catch(err=> {
                     console.log(err)
                 })
            } else{
                alert('missing datas')
            }

        }
    }
}
</script>

<style>
.add-device{
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;
}
.add-device h2{
    font-size: 2em;
    margin: 20px auto;
}
.add-device .field{
    margin: 20px auto;
}
</style>