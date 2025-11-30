<template>
  <UCard>
    <template #header>
      <div class="flex items-center justify-between">
        <h2 class="text-lg font-semibold">รายการชำระเงิน</h2>
        <UBadge
          :color="payments.length > 0 ? 'success' : 'neutral'"
          variant="subtle"
        >
          {{ payments.length }} รายการ
        </UBadge>
      </div>
    </template>

    <UTable
      :data="payments"
      :columns="columns"
      :empty="emptyState"
      class="w-full"
    >
      <template #date-cell="{ row }">
        {{ formatThaiDate(row.original.date) }}
      </template>
      <template #amount-cell="{ row }">
        <span class="font-medium text-green-600 dark:text-green-400">
          {{ formatCurrency(row.original.amount) }}
        </span>
      </template>
      <template #note-cell="{ row }">
        <span class="text-gray-500 dark:text-gray-400">
          {{ row.original.note || "-" }}
        </span>
      </template>
    </UTable>
  </UCard>
</template>

<script setup lang="ts">
import type { TableColumn } from "@nuxt/ui";

interface Payment {
  date: string;
  amount: number;
  note?: string;
}

interface Props {
  payments: Payment[];
}

defineProps<Props>();

const columns: TableColumn<Payment>[] = [
  {
    accessorKey: "date",
    header: "วันที่",
  },
  {
    accessorKey: "amount",
    header: "จำนวนเงิน",
  },
  {
    accessorKey: "note",
    header: "หมายเหตุ",
  },
];

const emptyState = "ยังไม่มีรายการชำระเงิน";

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("th-TH", {
    style: "currency",
    currency: "THB",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatThaiDate(dateString: string): string {
  const date = new Date(dateString);
  const thaiMonths = [
    "ม.ค.",
    "ก.พ.",
    "มี.ค.",
    "เม.ย.",
    "พ.ค.",
    "มิ.ย.",
    "ก.ค.",
    "ส.ค.",
    "ก.ย.",
    "ต.ค.",
    "พ.ย.",
    "ธ.ค.",
  ];
  const day = date.getDate();
  const month = thaiMonths[date.getMonth()];
  const buddhistYear = date.getFullYear() + 543;
  return `${day} ${month} ${buddhistYear}`;
}
</script>
