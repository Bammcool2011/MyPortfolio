<template>
  <UCard class="mt-6">
    <div class="grid grid-cols-1 gap-4 text-center md:grid-cols-4">
      <div>
        <p class="text-sm text-gray-500 dark:text-gray-400">ยอดหนี้ทั้งหมด</p>
        <p class="text-2xl font-bold text-gray-900 dark:text-white">
          {{ formatCurrency(totalDebt) }}
        </p>
      </div>
      <div>
        <p class="text-sm text-gray-500 dark:text-gray-400">ชำระแล้ว</p>
        <p class="text-2xl font-bold text-green-600 dark:text-green-400">
          {{ formatCurrency(totalPaid) }}
        </p>
      </div>
      <div>
        <p class="text-sm text-gray-500 dark:text-gray-400">ค้างชำระ</p>
        <p class="text-2xl font-bold text-red-600 dark:text-red-400">
          {{ formatCurrency(remaining) }}
        </p>
      </div>
      <div>
        <p class="text-sm text-gray-500 dark:text-gray-400">ความคืบหน้า</p>
        <div class="mt-1">
          <UProgress :model-value="progressPercent" color="success" size="lg" />
          <p class="mt-1 text-sm font-medium">
            {{ progressPercent.toFixed(1) }}%
          </p>
        </div>
      </div>
    </div>
  </UCard>
</template>

<script setup lang="ts">
interface Props {
  totalDebt: number;
  totalPaid: number;
  remaining: number;
  progressPercent: number;
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
