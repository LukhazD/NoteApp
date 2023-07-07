import { create } from 'zustand'

type Store = {
  objects: IcardData[],
  addObject: (object: IcardData) => void,
  getObject: (id: number) => IcardData | undefined,
  updateObject: (id: number, newText: string) => void,
  deleteObject: (id: number) => void
}

const myStore = create<Store>((set, get) => ({
  objects: JSON.parse(localStorage.getItem('objects') || '[]'),
  addObject: (object) => set((state) => {
    const newObjects = [...state.objects, object];
    localStorage.setItem('objects', JSON.stringify(newObjects));
    return { objects: newObjects };
  }),
  getObject: (id) => {
    const { objects } = get();
    return objects.find(object => object.id === id);
  },
  updateObject: (id, newText) => set((state) => {
    const objects = state.objects.map(object => object.id === id ? { ...object, text: newText } : object);
    localStorage.setItem('objects', JSON.stringify(objects))
    return { objects };
  }),
  deleteObject: (id) => set((state) => {
    const objects = state.objects.filter(object => object.id !== id);
    localStorage.setItem('objects', JSON.stringify(objects))
    return { objects };
  })
}));

export default myStore
