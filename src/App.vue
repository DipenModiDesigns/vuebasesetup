<script setup>
import { RouterView } from 'vue-router'
import MainHeader from './components/layouts/MainHeader.vue'
</script>

<template>
	<MainHeader />

	<main>
		<RouterView />
	</main>
</template>