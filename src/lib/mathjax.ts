import { onMount } from 'svelte';

declare global {
    interface Window {
        MathJax: any;
    }
}

export function useMathJax() {
    onMount(() => {
        if (window.MathJax) {
            window.MathJax.Hub.Queue(["Typeset", window.MathJax.Hub]);
        }
    });
}
