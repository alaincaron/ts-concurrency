export interface IBarrier {
  join(): Promise<void>;
}
