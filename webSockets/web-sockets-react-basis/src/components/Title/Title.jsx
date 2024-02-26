export default function Title({ title, align = 'center' }) {
  return <h1 style={{ textAlign: align }}>{title}</h1>;
}
