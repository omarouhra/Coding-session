export default function Heading2({ value, color, isImportant, hidden }) {
  return (
    <p style={{ color: color, fontWeight: isImportant ? "bold" : "", display: hidden ? "none" : "block" }}>
      {value}
    </p>
  );
}
// if (condition) {
// case 1
// } else {
//  case 2
// }

// condition ? case 1 : case 2
