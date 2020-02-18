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
export default {
  name: 'Index',
  data () {
    return {
     devices: [
       {phone: 'Xiaomi Mi 9', slug: 'xiaomi-mi-9', specs: ['snapdragon 855', 'amoled', '48Mpx'], id: '1'},
       {phone: 'Samsung Galaxy S10 Plus', slug: 'samsung-galaxy-s10-plus', specs: ['exynos 9820', 'amoled', '12Mpx'], id: '2'}
     ]
    }
  },
  methods: {
    deleteDevice(id){
      this.devices= this.devices.filter(device => {
        return device.id != id
      })
    }
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
