export interface ProducerPromise<E> {
  resolve: () => void;
  item: E;
}

export type ConsumerPromise<E> = (e: E) => void;
