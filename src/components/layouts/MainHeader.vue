<template>
    <!-- Main Header Components -->
    <header>
        <div class="container flex items-center justify-between">
            <div class="siteLogo">
                <a href="#/" class="block max-w-[250px]">
                    <img src="https://w7.pngwing.com/pngs/362/340/png-transparent-youtube-logo-streaming-media-youtube-logo-television-text-trademark.png" alt="">
                </a>
            </div>
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
    </header>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
    name: "MainHeader",
	components: {
        RouterLink
	},
	data() {
		return {

		};
	},
}

</script>