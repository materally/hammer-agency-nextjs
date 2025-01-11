export enum LoopType {
  BRIEFING = "briefing",
  RESEARCH = "research",
  STRATEGY = "strategy",
  PRESENTATION = "presentation",
}

export interface LoopProps<T> {
  type: LoopType;
  masterOptions: Array<T>;
  selectedOption: T | undefined;
  onChange: (master: T) => void;
}
