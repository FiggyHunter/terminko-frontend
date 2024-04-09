<template>
  <div class="flex flex-row flex-wrap gap-x-2 gap-y-1 text-neutral-700">
    <ul v-for="filter in filters" :key="filter.id">
      <li>
        <button @click="selected = filter.id">
          <h5
            :class="
              `${filter.id === selected ? 'text-black bg-neutral-200' : `text-neutral-700`}` +
              ' rounded-lg px-2 py-1 cursor-pointer'
            "
          >
            {{ filter.name }}
          </h5>
        </button>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const filters = ref([
  { id: 1, name: "Recently viewed" },
  { id: 2, name: "Recently generated" },
  { id: 3, name: "Favorites" },
]);

const selected = ref(1);
</script>
