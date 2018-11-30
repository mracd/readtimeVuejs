<template>
    <v-toolbar>
        <!--<v-toolbar-side-icon></v-toolbar-side-icon>-->
        <v-toolbar-title>
            <router-link to="/">
            ACD
            </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <div class="hidden-sm-and-down">
            <router-link to="/forum">
                <v-btn flat>Forum</v-btn>
            </router-link>
                <v-btn flat>Ask question</v-btn>

                <v-btn flat>Category</v-btn>
                <router-link to="/login">
                    <v-btn flat>Login</v-btn>
                </router-link>
        </div>
    </v-toolbar>
</template>
<script>

</script>

<style scoped>

</style>