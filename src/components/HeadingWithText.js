import Heading2 from "./atoms/Heading2";
import Paragraph from "./atoms/Paragraph";

export default function HeadingWithText() {
  return (
    <div>
      <Heading2 value="This is the heading" color="red"/>
      <Paragraph text="This is the Text ......."/>
    </div>
  );
}
