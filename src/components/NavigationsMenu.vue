<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title class="text-center">
        <!-- Title or Logo could go here -->
      </v-toolbar-title>
      <v-spacer></v-spacer> <!-- Spacer on the left -->

      <v-list class="d-flex justify-center align-center" style="width: 100%;">
        <v-list-item
          v-for="(item, index) in menuItems"
          :key="index"
          @click="navigateTo(item.route, index)" 
          class="mx-2"
        >
          <v-avatar
            size="48"
            class="rounded-icon"
            :class="[activeIndex === index ? 'active-border' : item.class]"
          >
            <v-img :src="item.icon" /> <!-- Brug v-img til at vise SVG -->
          </v-avatar>
        </v-list-item>
      </v-list>

      <v-spacer></v-spacer> <!-- Spacer on the right -->
    </v-app-bar>

    <router-view />
  </v-app>
</template>

<script>
import elIcon from '@/assets/el.svg';
import transportIcon from '@/assets/transport.svg';
import inkobIcon from '@/assets/inkob.svg';
import foodIcon from '@/assets/food.svg';

export default {
  data() {
    return {
      activeIndex: null,
      menuItems: [
        { icon: elIcon, route: '/el-use', class: 'bg-el' },
        { icon: transportIcon, route: '/transport', class: 'bg-transport' },
        { icon: inkobIcon, route: '/inkob', class: 'bg-inkob' },
        { icon: foodIcon, route: '/food-waste', class: 'bg-food' },
      ],
    };
  },
  methods: {
    navigateTo(route, index) {
      this.activeIndex = index;
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.rounded-icon {
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}

.bg-el {
  background-color: #1E7F85;
}

.bg-transport {
  background-color: #7E76A1;
}

.bg-inkob {
  background-color: #85C7C7;
}

.bg-food {
  background-color: #E59182;
}

.active-border {
  border: 2px solid #66ff66;
  padding: 8px;
}
</style>
