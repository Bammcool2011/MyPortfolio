<template>
  <UContainer class="py-8">
    <DebtHeader
      :name="debtData.debtor.name"
      :total-debt="debtData.debtor.totalDebt"
      :installment-months="debtData.debtor.installmentMonths"
      :monthly-payment="debtData.debtor.monthlyPayment"
    />

    <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
      <DebtPaymentTable :payments="payments" />
      <DebtChart
        :total-paid="totalPaid"
        :remaining="remaining"
        :progress-percent="progressPercent"
      />
    </div>

    <DebtSummary
      :total-debt="debtData.debtor.totalDebt"
      :total-paid="totalPaid"
      :remaining="remaining"
      :progress-percent="progressPercent"
    />
  </UContainer>
</template>

<script setup lang="ts">
import { useHead } from "#app";
import { computed, ref } from "vue";
import DebtChart from "~/components/pages/debt/DebtChart.vue";
import DebtHeader from "~/components/pages/debt/DebtHeader.vue";
import DebtPaymentTable from "~/components/pages/debt/DebtPaymentTable.vue";
import DebtSummary from "~/components/pages/debt/DebtSummary.vue";
import debtData from "~/data/debtData.json";

interface Payment {
  date: string;
  amount: number;
  note?: string;
}

interface DebtData {
  debtor: {
    name: string;
    totalDebt: number;
    installmentMonths: number;
    monthlyPayment: number;
    startDate: string;
  };
  payments: Payment[];
}

const typedDebtData = debtData as DebtData;

useHead({
  title: `หนี้ของ ${typedDebtData.debtor.name}`,
  meta: [
    {
      name: "description",
      content: `ติดตามการชำระหนี้ของ ${typedDebtData.debtor.name}`,
    },
  ],
});

const payments = ref<Payment[]>(typedDebtData.payments);

const totalPaid = computed(() => {
  return payments.value.reduce((sum: number, p: Payment) => sum + p.amount, 0);
});

const remaining = computed(() => {
  return typedDebtData.debtor.totalDebt - totalPaid.value;
});

const progressPercent = computed(() => {
  return (totalPaid.value / typedDebtData.debtor.totalDebt) * 100;
});
</script>
