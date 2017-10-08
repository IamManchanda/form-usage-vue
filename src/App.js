import AppSwitch from './components/switch/AppSwitch.vue';

export default {
  data() {
    return {
      userData: {
        name: '',
        email: '',
        password: '',
        age: '',
        message: ''
      },
      newsletters: [],
      sex: '',
      priorities: [
        'High', 'Medium', 'Low'
      ],
      selectedPriority: 'Medium',
      dataSwitch: true,
      isSubmitted: false
    };
  },
  methods: {
    submitted() {
      this.isSubmitted = true;
    }
  },
  components: { AppSwitch }
};