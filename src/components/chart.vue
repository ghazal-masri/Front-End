<template>
    <styles-component title="Chart">
    <div id="myChart" class="flex justify-center"></div>
</styles-component>
 
</template>

<script setup lang="ts">
import {onMounted } from 'vue'
import Chart from 'chart.js/auto'
import stylesComponent from './stylesComponent.vue'

// const lineChartCanvas = ref<HTMLCanvasElement | null>(null)
// const barChartCanvas = ref<HTMLCanvasElement | null>(null)
// onMounted(() => {
//     if (lineChartCanvas.value) {
//         const ctx = lineChartCanvas.value.getContext('2d')
//         if (ctx) {
//             new Chart(ctx, {
//                 type: 'line',
//                 data: {
//                     labels: [
//                         'Label 1',
//                         'Label 2',
//                         'Label 3',
//                         'Label 4',
//                         'Label 5',
//                     ],
//                     datasets: [
//                         {
//                             label: 'My First Line Dataset',
//                             data: [10, 20, 15, 25, 30],
//                             borderColor: 'rgba(75, 192, 192, 1)',
//                             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//                             borderWidth: 2,
//                         },
//                     ],
//                 },
//                 options: {
//                     responsive: true,
//                     maintainAspectRatio: false,
//                     scales: {
//                         y: {
//                             beginAtZero: true,
//                         },
//                     },
//                 },
//             })
//         }
//     }

//     if (barChartCanvas.value) {
//         const barCtx = barChartCanvas.value.getContext('2d')
//         if (barCtx) {
//             new Chart(barCtx, {
//                 type: 'bar',
//                 data: {
//                     labels: [
//                         'Label 1',
//                         'Label 2',
//                         'Label 3',
//                         'Label 4',
//                         'Label 5',
//                     ],
//                     datasets: [
//                         {
//                             label: 'My First Bar Dataset',
//                             data: [5, 15, 10, 20, 25],
//                             borderColor: 'rgba(54, 162, 235, 1)',
//                             backgroundColor: 'rgba(54, 162, 235, 0.2)',
//                             borderWidth: 2,
//                         },
//                     ],
//                 },
//                 options: {
//                     responsive: true,
//                     maintainAspectRatio: false,
//                     scales: {
//                         y: {
//                             beginAtZero: true,
//                         },
//                     },
//                 },
//             })
//         }
//     }
// })

function init() {
    const ctx = document.getElementById('myChart') as HTMLCanvasElement
    let newCanvas = document.createElement('canvas')
    ctx['id'] = 'myChart'
    ctx.appendChild(newCanvas)
    if (ctx) {
        new Chart(newCanvas, {
            type: 'line',
            data: {
                
                datasets: [
                    {
                        label: '# of Votes',
                        data: [
                            { x: 'Red', y: '12' },
                            { x: 'Blue', y: '19' },
                            { x: 'Yellow', y: '3' },
                            { x: 'Green', y: '5' },
                            { x: 'Purple', y: '2' },
                            { x: 'Orange', y: '3' },
                        ],
                        borderWidth: 1,
                    },
                ],
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        })
    }
}
onMounted(init)
</script>
