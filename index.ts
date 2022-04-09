class Store {
  #state: Map<string, any>;

  constructor(initialState?: {}) {
    this.#state = new Map();
    if (!initialState) return;
    for (const [key, value] of Object.entries(initialState)) {
      this.#state.set(key, value);
    }
  }

  get(key: string) {
    return this.#state.get(key);
  }

  getAll() {
    return Object.fromEntries(this.#state.entries());
  }

  set(key: string, value: any) {
    this.#state.set(key, value);
  }
}

export default Store;
