import SinglyLinkedList from './SinglyLinkedList';

describe('SinglyLinkedList', () => {
  let list: SinglyLinkedList<number>;

  beforeEach(() => {
    list = new SinglyLinkedList<number>();
  });

  it('should prepend an item to an empty list', () => {
    list.prepend(1);
    expect(list.length).toBe(1);
    expect(list.get(0)).toBe(1);
  });

  it('should prepend an item to a non-empty list', () => {
    list.prepend(2);
    list.prepend(1);
    expect(list.length).toBe(2);
    expect(list.get(0)).toBe(1);
    expect(list.get(1)).toBe(2);
  });

  it('should insert an item at the beginning of the list', () => {
    list.insertAt(1, 0);
    expect(list.length).toBe(1);
    expect(list.get(0)).toBe(1);
  });

  it('should insert an item at the end of the list', () => {
    list.append(1);
    list.insertAt(2, 1);
    expect(list.length).toBe(2);
    expect(list.get(1)).toBe(2);
  });

  it('should insert an item at a specific index', () => {
    list.append(1);
    list.append(3);
    list.insertAt(2, 1);
    expect(list.length).toBe(3);
    expect(list.get(1)).toBe(2);
  });

  it('should throw an error when inserting at an index above the list length', () => {
    list.append(1);
    expect(() => {
      list.insertAt(1, 5);
    }).toThrowError('Idx above list length. Current length is: 1');
  });

  it('should append an item to an empty list', () => {
    list.append(1);
    expect(list.length).toBe(1);
    expect(list.get(0)).toBe(1);
  });

  it('should append an item to a non-empty list', () => {
    list.append(1);
    list.append(2);
    expect(list.length).toBe(2);
    expect(list.get(1)).toBe(2);
  });

  it('should remove an item from the list', () => {
    list.append(1);
    list.append(2);
    list.remove(1);
    expect(list.length).toBe(1);
    expect(list.get(0)).toBe(2);
  });

  it('should return undefined when removing an item not in the list', () => {
    list.append(1);
    list.append(2);
    expect(list.remove(3)).toBeUndefined();
  });

  it('should get an item at a specific index', () => {
    list.append(1);
    list.append(2);
    expect(list.get(1)).toBe(2);
  });

  it('should return undefined when getting an item at an invalid index', () => {
    list.append(1);
    expect(list.get(1)).toBeUndefined();
  });

  it('should remove an item at a specific index', () => {
    list.append(1);
    list.append(2);
    list.removeAt(0);
    expect(list.length).toBe(1);
    expect(list.get(0)).toBe(2);
  });

  it('should return undefined when removing an item at an invalid index', () => {
    list.append(1);
    expect(list.removeAt(1)).toBeUndefined();
  });
});