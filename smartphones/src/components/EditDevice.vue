<template>
  <div v-if="device" class="edit-device container">
      <h2>Edit {{device.phone}}</h2>
       <form @submit.prevent="EditDevice">
            <div class="field model">
                <label for="phone">Device model:</label>
                <input type="text" name="phone" v-model="device.phone">
            </div>
            <div class="field specs">
                <label for="soc">Soc:</label>
                <input type="text" name="soc" v-model="device.specs[0]">
                <label for="display">Display:</label>
                <input type="text" name="display" v-model="device.specs[1]">
                <label for="camera">Camera:</label>
                <input type="text" name="camera" v-model="device.specs[2]">
            </div>
            <div class="field center-align">
                <button class="btn green accent-3">Update Device</button>
            </div>
        </form>
  </div>  
</template>

<script>
import db from '@/firebase/init'
import slugify from 'slugify'

export default {
    name: 'EditDevice',
    data(){
        return {
            device: null
        }
    },
    methods: {
        EditDevice(){
                if(this.device.phone && this.device.specs[0] && this.device.specs[1] && this.device.specs[2]){
                   this.device.slug = slugify(this.device.phone,{
                        replacement: '-',
                        remove: /[$*_+~.()'"!\-:@]/g,
                        lower: true
                    })
                    db.collection('devices').doc(this.device.id).update({
                    phone: this.device.phone,
                    specs: this.device.specs,
                    slug:  this.device.slug
                    }).then(() => {
                    this.$router.push({name: 'Index'})
                    }).catch(err=> {
                        console.log(err)
                    })
                } else{
                    alert('missing datas')
                }
             
        }
    },
    created(){
        let ref = db.collection('devices').where('slug', '==', this.$route.params.device_slug)
        ref.get().then(snapshot => {
            snapshot.forEach(doc => {
                this.device = doc.data()
                this.device.id = doc.id
            })
        })
    }
}
</script>

<style>
.edit-device{
    margin-top: 60px;
    padding: 20px;
    max-width: 500px;
}
.edit-device h2{
    font-size: 2em;
    margin: 20px auto;
}
.edit-device .field{
    margin: 20px auto;
}
</style>