type VoidFunction = () => void;
type ConsumerFunction<E> = (e: E) => void;
type RejectFunction = (err: unknown) => void;

export interface VoidPromiseResolver {
  resolve: VoidFunction;
  reject: RejectFunction;
}

export interface ProducerPromiseResolver<E> extends VoidPromiseResolver {
  item: E;
}

export type ConsumerPromiseResolver<E> = {
  resolve: ConsumerFunction<E>;
  reject: RejectFunction;
};
