<template>
    <div class="mt-10 flex h-fit w-fit rounded bg-white p-6 shadow">
        <div><canvas ref="lineChartCanvas" class="h-96 w-96"></canvas></div>
        <div><canvas ref="barChartCanvas" class="h-96 w-96"></canvas></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'

const lineChartCanvas = ref<HTMLCanvasElement | null>(null)
const barChartCanvas = ref<HTMLCanvasElement | null>(null)
onMounted(() => {
    if (lineChartCanvas.value) {
        const ctx = lineChartCanvas.value.getContext('2d')
        if (ctx) {
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: [
                        'Label 1',
                        'Label 2',
                        'Label 3',
                        'Label 4',
                        'Label 5',
                    ],
                    datasets: [
                        {
                            label: 'My First Line Dataset',
                            data: [10, 20, 15, 25, 30],
                            borderColor: 'rgba(75, 192, 192, 1)',
                            backgroundColor: 'rgba(75, 192, 192, 0.2)',
                            borderWidth: 2,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            })
        }
    }

    if (barChartCanvas.value) {
        const barCtx = barChartCanvas.value.getContext('2d')
        if (barCtx) {
            new Chart(barCtx, {
                type: 'bar',
                data: {
                    labels: [
                        'Label 1',
                        'Label 2',
                        'Label 3',
                        'Label 4',
                        'Label 5',
                    ],
                    datasets: [
                        {
                            label: 'My First Bar Dataset',
                            data: [5, 15, 10, 20, 25],
                            borderColor: 'rgba(54, 162, 235, 1)',
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            borderWidth: 2,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            })
        }
    }
})
</script>
