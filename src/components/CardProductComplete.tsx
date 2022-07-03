interface ICardProductComplete {
  id: number;
  sku: number;
  title: string;
  description: string;
  availableSizes: {};
  style: string;
  price: number;
  installments: number;
  currencyFormat: string;
  isFreeShipping: boolean;
}

export function CardProductComplete(props: ICardProductComplete) {
  return <section>Card Complete</section>;
}
