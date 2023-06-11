import { onMounted, onBeforeUnmount } from 'vue';

export default function useDetectOutsideClick(component: HTMLElement | null, callback: () => void) {
  console.log('yo');
  if (!component) return;
  const listener = (event: MouseEvent) => {
    if (event.target !== component && event.composedPath().includes(component)) {
      return;
    }
    if (typeof callback === 'function') {
      console.log('in callback if');
      callback();
      // return true;
    }
  };
  onMounted(() => {
    window.addEventListener('click', listener);
  });
  onBeforeUnmount(() => {
    window.removeEventListener('click', listener);
  });

  return { listener };
}
