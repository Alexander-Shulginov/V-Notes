import { onBeforeMount, onMounted } from 'vue'
onBeforeMount(() => {
    performance.mark('startRender')
})

onMounted(() => {
    performance.mark('endRender')
    performance.measure('renderTime', 'startRender', 'endRender')

    const measure = performance.getEntriesByName('renderTime')[0]
    console.log(`Component render time: ${measure?.duration}ms`)
})
