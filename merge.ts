
// set up dependency
// npm install typescript
// npm install tsx
// use tsx merge.ts to run TypeScript file


function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {

    let index1 = 0;
    let index2 = 0;
    let index3 = collection_3.length - 1;

    let merged_collection : number[] = [];

    while (index1 < collection_1.length && index2 < collection_2.length && index3 >= 0) {
     
      let min = Math.min(collection_1[index1], collection_2[index2], collection_3[index3])

      if (min == collection_1[index1]) {
        merged_collection.push(min);
        index1 += 1;
      }

      else if (min == collection_2[index2]) {
        merged_collection.push(min);
        index2 += 1;
    }
      else if (min == collection_3[index3]) {
        merged_collection.push(min);
        index3 -= 1;
        }
      }
    
    while (index1 < collection_1.length && index2 < collection_2.length) {
        if (collection_1[index1] < collection_2[index2]) {
            merged_collection.push(collection_1[index1]);
            index1 += 1;
        }
        else {
            merged_collection.push(collection_2[index2]);
            index2 += 1;
        }
    }

    while (index1 < collection_1.length && index3 > -1) {
        if (collection_1[index1] < collection_3[index3]) {
            merged_collection.push(collection_1[index1]);
            index1 += 1;
        }
        else {
            merged_collection.push(collection_3[index3]);
            index3 -= 1;
        }
    }

    while (index2 < collection_2.length && index3 > -1) {
        if (collection_2[index2] < collection_3[index3]) {
            merged_collection.push(collection_2[index2]);
            index2 += 1;
        }
        else {
            merged_collection.push(collection_3[index3]);
            index3 -= 1;
        }
    }
    
    while (index1 < collection_1.length) {
        merged_collection.push(collection_1[index1]);
        index1 += 1;
    }

    while (index2 < collection_2.length) {
        merged_collection.push(collection_2[index2]);
        index2 += 1;
    }

    while (index3 > -1) {
        merged_collection.push(collection_3[index3]);
        index3 -= 1;
    }

    console.log(index1, index2, index3);
    return merged_collection;
}; 

console.log(merge([1,4,5], [1,2,3,4], [4,3,2]))

