<template>
  <UCard>
    <template #header>
      <h2 class="text-lg font-semibold">สถานะการชำระ</h2>
    </template>

    <div class="flex h-80 items-center justify-center">
      <ClientOnly>
        <VChart :option="chartOption" autoresize class="size-full" />
        <template #fallback>
          <div class="flex h-full items-center justify-center">
            <UIcon
              name="i-lucide-loader-2"
              class="size-8 animate-spin text-gray-400"
            />
          </div>
        </template>
      </ClientOnly>
    </div>
  </UCard>
</template>

<script setup lang="ts">
import { PieChart } from "echarts/charts";
import {
  LegendComponent,
  TitleComponent,
  TooltipComponent,
} from "echarts/components";
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { computed } from "vue";
import VChart from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
]);

interface Props {
  totalPaid: number;
  remaining: number;
  progressPercent: number;
}

const props = defineProps<Props>();

const chartOption = computed(() => ({
  tooltip: {
    trigger: "item",
    formatter: "{b}: {c} บาท ({d}%)",
  },
  legend: {
    orient: "horizontal",
    bottom: "0",
    data: ["ชำระแล้ว", "ค้างชำระ"],
  },
  series: [
    {
      name: "สถานะการชำระ",
      type: "pie",
      radius: ["40%", "70%"],
      avoidLabelOverlap: false,
      itemStyle: {
        borderRadius: 10,
        borderColor: "#fff",
        borderWidth: 2,
      },
      label: {
        show: true,
        position: "center",
        formatter: () => {
          return `${props.progressPercent.toFixed(1)}%\nชำระแล้ว`;
        },
        fontSize: 16,
        fontWeight: "bold",
      },
      emphasis: {
        label: {
          show: true,
          fontSize: 18,
          fontWeight: "bold",
        },
      },
      labelLine: {
        show: false,
      },
      data: [
        {
          value: props.totalPaid,
          name: "ชำระแล้ว",
          itemStyle: { color: "#22c55e" },
        },
        {
          value: props.remaining,
          name: "ค้างชำระ",
          itemStyle: { color: "#ef4444" },
        },
      ],
    },
  ],
}));
</script>
