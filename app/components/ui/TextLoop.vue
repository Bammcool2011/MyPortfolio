<template>
  <div class="relative inline-block whitespace-nowrap">
    <Transition name="text-loop" mode="out-in">
      <span :key="currentIndex" class="inline-block">
        {{ items[currentIndex] }}
      </span>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

interface Props {
  items: string[];
  interval?: number;
  class?: string;
}

const props = withDefaults(defineProps<Props>(), {
  interval: 2,
  class: "",
});

const currentIndex = ref(0);
const items = ref(props.items);
let timer: NodeJS.Timeout | null = null;

onMounted(() => {
  startLoop();
});

onUnmounted(() => {
  stopLoop();
});

const startLoop = () => {
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % items.value.length;
  }, props.interval * 1000);
};

const stopLoop = () => {
  if (timer) {
    clearInterval(timer);
    timer = null;
  }
};
</script>

<style scoped>
.text-loop-enter-active,
.text-loop-leave-active {
  transition: all 0.3s ease;
}

.text-loop-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.text-loop-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
