<script setup>
    import { ref, watch, onMounted, onUnmounted } from 'vue'

    const emit = defineEmits(['kicked'])
    const events = ref(['mousedown', 'scroll', 'keypress'])
    const logoutTimer = ref(null)
    // const elapsed = ref(0)
    // const counter = ref(null)

    const props = defineProps({
        kickAfter: {
            type: Number,
            required: true
        },
    })

    watch(
        () => props.kickAfter,
        () => {
            restartTimer()
        }
    )

    onMounted(() => {
        events.value.forEach(function (event) {
            window.addEventListener(event, restartTimer)
        }, this)

        startTimer()
    })

    onUnmounted(() => {
        events.value.forEach(function (event) {
            window.removeEventListener(event, restartTimer)
        }, this)

        stopTimer()
    })

    function startTimer() {
        logoutTimer.value = setTimeout(kickout, props.kickAfter * 60 * 1000)
        // counter.value = setInterval(() => {
        //     elapsed.value += 1
        //     console.log(elapsed.value + '/' + props.kickAfter * 60)
        // }, 1000)
    }

    // Locks the extension
    async function kickout() {
        clearTimeout(logoutTimer.value)
        emit('kicked')
    }

    // Restarts the timer
    function restartTimer() {
        stopTimer()
        startTimer()
    }

    // Stops the timer
    function stopTimer() {
        clearTimeout(logoutTimer.value)
        // elapsed.value = 0
        // clearInterval(counter.value)
    }
</script>