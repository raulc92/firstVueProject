<template>
  <div class="index container">
    <div class="card" v-for="device in devices" :key="device.id">
      <div class="card-content">
        <i class="material-icons delete" @click="deleteDevice(device.id)">delete</i>
        <h2 class="indigo-text">{{device.phone}}</h2>
        <ul class="specs">
          <li v-for="(spec,index) in device.specs" :key="index">
            <span class="chip">{{spec}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'

export default {
  name: 'Index',
  data () {
    return {
      devices: []
    }
  },
  methods: {
    deleteDevice(id){
     db.collection('devices').doc(id).delete()
     .then(() =>{
       this.devices= this.devices.filter(device => {
        return device.id != id
     })
    })
  }},
  created(){
    db.collection('devices').get()
    .then(snapshot =>{
      snapshot.forEach(doc =>{
         let device = doc.data()
         device.id = doc.id
         this.devices.push(device)
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.index{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
  margin-top: 60px;
}
.index h2{
  font-size: 1.8em;
  text-align: center;
  margin-top: 0;
}
.index .specs{
  margin: 30px auto;
}
.index .specs li{
  display: inline-block;
}
.index .delete{
  position: absolute;
  top: 4px;
  right: 4px;
  cursor: pointer;
  color: #aaa;
  font-size: 1.4em;
}
</style>
