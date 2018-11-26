<!--<template>-->
    <!--<div class="panel panel-default">-->
        <!--<div class="panel-heading">-->
            <!--<nav>-->
                <!--<ul class="list-inline">-->
                    <!--<li>-->
                        <!--<router-link :to="{ name: 'home' }" active-class="active">Home</router-link>-->
                    <!--</li>-->
                    <!--<li v-if="!$auth.check()" class="pull-right">-->
                        <!--<router-link :to="{ name: 'login' }" active-class="active">Login</router-link>-->
                    <!--</li>-->
                    <!--<li v-if="!$auth.check()" class="pull-right">-->
                        <!--<router-link :to="{ name: 'register' }" active-class="active">Register</router-link>-->
                    <!--</li>-->

                    <!--<li v-if="$auth.check()" class="pull-right">-->
                        <!--<router-link :to="{ name: 'dashboard' }" active-class="active">Dashboard</router-link>-->
                    <!--</li>-->
                    <!--<li v-if="$auth.check()" class="pull-right">-->
                        <!--<a href="#" @click.prevent="$auth.logout()">-->
                           <!--Logout-->
                        <!--</a>-->
                    <!--</li>-->
                <!--</ul>-->
            <!--</nav>-->
        <!--</div>-->
        <!--<div class="panel-body">-->
            <!--<div class="name" v-if="$auth.check()" >-->
               <!--Xin chào, {{ $auth.user().name }}-->
            <!--</div>-->
            <!--<router-view></router-view>-->
        <!--</div>-->
    <!--</div>-->
<!--</template>-->
<template>
    <div id="app">
        <h1>{{ title }}</h1>
        <router-view></router-view>
        <router-link :to="{ name: 'about' }">About</router-link>
        <router-link :to="{ name: 'contact' }">Contact</router-link>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                title: 'Welcome To My Site'
            }
        }
    }
</script>