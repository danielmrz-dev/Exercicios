type MapStringsCallback = (item: string) => string;

function mapStrings(array: string[], cbFn: MapStringsCallback): string[] {
  const newArray: string[] = [];

  for (let i = 0; i < array.length; i++) {
    newArray.push(cbFn(array[i]!));
  }

  return newArray;
}

const abc = ['a', 'b', 'c'];

const abcMapped = mapStrings(abc, item => item.toUpperCase())

console.log(abcMapped);
