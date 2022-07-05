import { CardProductBasic } from "../components/CardProductBasic";
import { render } from "@testing-library/react";

describe("CardProductBasic component", () => {
  const {} = render(
    <CardProductBasic
      id={0}
      title={"titulo"}
      type={"default"}
      sku={0}
      price={0}
      favorite={false}
    />
  );
  it("deve ter atributo id como number", () => {});
});
