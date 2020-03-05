import * as tsx from "vue-tsx-support";

interface Props {
  msg?: string;
  name?: string;
}

export default tsx.componentFactory.create<Props, {}>({
  name: "FunLayout",
  functional: true,
  render(h, ctx) {
    return (
      <div>
        {ctx.props.msg} - {ctx.props.name}
        {ctx.slots().default}
        {ctx.slots().name_slot || "默认的具名slot内容"}
      </div>
    );
  }
});
