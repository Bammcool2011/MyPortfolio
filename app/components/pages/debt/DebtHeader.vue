<template>
  <div class="mb-8 text-center">
    <h1 class="text-3xl font-bold text-white dark:text-white">
      หนี้ของ {{ name }}
    </h1>
    <p class="mt-2 text-gray-600 dark:text-gray-400">
      ยอดหนี้ทั้งหมด {{ formatCurrency(totalDebt) }} | ผ่อน
      {{ installmentMonths }} เดือน | เดือนละ
      {{ formatCurrency(monthlyPayment) }}
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  name: string;
  totalDebt: number;
  installmentMonths: number;
  monthlyPayment: number;
}

defineProps<Props>();

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
</script>
