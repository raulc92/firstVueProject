<template>
    <div class="navbar">
        <nav class="nav-extended blue-grey darken-4">
            <div class="nav-content">
                <router-link :to="{name:'Index'}">
                    <span class="nav-title">Smartphones</span>
                    <i class="material-icons phnicn">smartphone</i>
                </router-link>
                <a href="" class="btn-floating btn-large pulse halfway-fab green accent-3">
                    <router-link :to="{name:'AddDevice'}">
                        <i class="material-icons">add</i>
                    </router-link>
                </a>
             </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Navbar',
    data(){
        return{

        }
    }
}
</script>

<style>
.navbar nav{
    padding: 0 20px;
}
.phnicn{
    position: fixed;
    top: 25px;
    left: 220px;
}
</style>