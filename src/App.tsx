import { Component, Vue } from "vue-property-decorator";

@Component
export default class App extends Vue {
  protected render() {
    return (
      <div id="app">
        <router-view></router-view>
      </div>
    );
  }
}
