<template>
  <div class="sequence">
    <div class="seq-preloader" >
      <svg
        width="39"
        height="16"
        viewBox="0 0 39 16"
        xmlns="http://www.w3.org/2000/svg"
        class="seq-preload-indicator"
      >
        <title>Sequence Preloader Icon</title>
        <desc>Three orange dots increasing in size from left to right</desc>
        <g fill="#F96D38">
          <path
            class="seq-preload-circle seq-preload-circle-1"
            d="M3.999 12.012c2.209 0 3.999-1.791 3.999-3.999s-1.79-3.999-3.999-3.999-3.999 1.791-3.999 3.999 1.79 3.999 3.999 3.999z"
          />
          <path
            class="seq-preload-circle seq-preload-circle-2"
            d="M15.996 13.468c3.018 0 5.465-2.447 5.465-5.466 0-3.018-2.447-5.465-5.465-5.465-3.019 0-5.466 2.447-5.466 5.465 0 3.019 2.447 5.466 5.466 5.466z"
          />
          <path
            class="seq-preload-circle seq-preload-circle-3"
            d="M31.322 15.334c4.049 0 7.332-3.282 7.332-7.332 0-4.049-3.282-7.332-7.332-7.332s-7.332 3.283-7.332 7.332c0 4.05 3.283 7.332 7.332 7.332z"
          />
        </g>
      </svg>
    </div>
  </div>
</template>
<script>
export default {
    props: ["loading"]
}
</script>
<style>
@keyframes seq-preloader {
  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

.seq-preloader {
  background: transparent;
  visibility: visible;
  opacity: 1;
  position: absolute;
  z-index: 9999;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.seq-preloader.seq-preloaded {
  opacity: 0;
  visibility: hidden;
  transition: visibility 0s 0.5s, opacity 0.5s;
}

.seq-preload-indicator {
  overflow: visible;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.seq-preload-circle {
  display: inline-block;
  height: 12px;
  width: 12px;
  fill: #000;
  opacity: 0;
  animation: seq-preloader 1.25s infinite;
}

.seq-preload-circle-2 {
  animation-delay: 0.15s;
}

.seq-preload-circle-3 {
  animation-delay: 0.3s;
}

.seq-preload-indicator-fallback {
  width: 42px;
  overflow: visible;
}

.seq-preload-indicator-fallback .seq-preload-circle {
  width: 8px;
  height: 8px;
  background-color: #000;
  border-radius: 100%;
  opacity: 1;
  display: inline-block;
  vertical-align: middle;
}

.seq-preload-indicator-fallback .seq-preload-circle-2 {
  margin-left: 3px;
  margin-right: 3px;
  width: 12px;
  height: 12px;
}

.seq-preload-indicator-fallback .seq-preload-circle-3 {
  width: 16px;
  height: 16px;
}
</style>