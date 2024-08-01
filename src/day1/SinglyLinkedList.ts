type N<T> = {
  value: T;
  next: N<T> | null;
};

export default class SinglyLinkedList<T> {
  public length: number;
  private head: N<T> | null;
  private tail: N<T> | null;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  prepend(item: T): void {
    if (this.length === 0) {
      const node = {
        value: item,
        next: null,
      };

      this.head = node;
      this.tail = node;
      this.length++;

      return;
    }

    this.head = {
      value: item,
      next: this.head,
    };
    this.length++;
  }

  insertAt(item: T, idx: number): void {
    if (idx === 0 || this.length === 0) {
      this.prepend(item);
      return;
    }

    if (idx > this.length + 1) {
      throw new Error(
        `Idx above list length. Current length is: ${this.length}`,
      );
    }

    this.length++;
    let prev = this.head!;
    const current = prev.next;

    for (let i = 1; i <= idx && i !== idx; i++) {
      prev = current!;
    }

    const node = {
      value: item,
      next: current,
    };
    prev.next = node;
  }

  append(item: T): void {
    const node = {
      value: item,
      next: null,
    };

    if (this.length === 0) {
      this.length++;
      this.head = node;
      this.tail = node;
      return;
    }

    this.tail!.next = node;
    this.tail = node;
    this.length++;
  }

  remove(item: T): T | undefined {
    if (!this.head) {
      return;
    }

		if (item === this.head.value) {
			const value = this.head.value;
      this.head = this.head.next || null;
      this.length--;
      return value;
		}

		let prev = this.head

		const recurse: (c: N<T> | null) => T | undefined = (current) => {
			if (!current) {
				return;
			}

      if (item === current.value) {
				prev.next = current.next;
				this.length--;
        return current.value;
      }

			prev = current;
			return recurse(current.next);
    }

    return recurse(this.head.next);
  }

  get(idx: number): T | undefined {
    if (idx > this.length + 1 || !this.head) {
      return;
    }

    if (idx === 0) {
      return this.head.value;
    }

    let current = this.head.next;

    for (let i = 1; i <= idx && i !== idx; i++) {
      current = current?.next || null;
    }

    return current?.value;
  }

  removeAt(idx: number): T | undefined {
    if (idx === 0) {
      const value = this.head?.value;
      this.head = this.head?.next || null;
      this.length--;
      return value;
    }

    if (idx > this.length + 1) {
      throw new Error(
        `Idx above list length. Current length is: ${this.length}`,
      );
    }

    this.length--;
    let prev = this.head!;
    const current = prev.next;

    for (let i = 1; i <= idx && i !== idx; i++) {
      prev = current!;
    }

    prev.next = current?.next || null;
    return current?.value;
  }
}
