<template>
  <div>
    <label>Switch</label>
    <div id="on" @click="switched(true)" :class="{active: value}">On</div>
    <div id="off" @click="switched(false)" :class="{active: !value}">Off</div>
  </div>
</template>

<script src="./AppSwitch.js"></script>
<style lang="scss" src="./AppSwitch.scss" scoped></style>