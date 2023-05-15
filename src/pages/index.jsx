export default function Page() {
  return <div>Hello World</div>;
}

export const getStaticProps = async () => ({
  props: {
    value: 1
  }
});
