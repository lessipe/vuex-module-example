<template>
  <div id="app">
    <h1>
      module1
    </h1>
    <h2>{{ module1ValueWithHello }}</h2>
    <h3>{{ module1 }}</h3>
    <br />

    module1 값 변경
    <input type="text" v-model="module1Value">
    <button type="button" @click="changeModule1Value">변경</button>
    <br />
    <h1>
      module2
    </h1>
    <h2>{{ module2ValueWithHello }}</h2>
    <h3>{{ module2 }}</h3>
    module2 값 변경
    <input type="text" v-model="module2Value">
    <button type="button" @click="changeModule2Value">변경</button>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'app',
  data() {
    return {
      module1Value: '',
      module2Value: ''
    };
  },
  methods: {
    changeModule1Value() {
      this.$store.dispatch('setModule1Value', this.module1Value);
    },
    changeModule2Value() {
      this.$store.dispatch('setModule2Value', this.module2Value);
    }
  },
  computed: {
    ...mapState({
      module1: state => state.module1.module1Value,
      module2: state => state.module2.module2Value
    }),
    ...mapGetters({
      module1ValueWithHello: 'module1ValueWithHello',
      module2ValueWithHello: 'module2ValueWithHello'
    })
  },
  components: {
  }
}
</script>

