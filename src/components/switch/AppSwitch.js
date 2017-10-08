export default {
  props: [ 'value' ],
  methods: {
    switched(isOn) {
      this.$emit('input', isOn);
    }
  }
};