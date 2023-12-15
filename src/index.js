import _ from "lodash";

// console.log("hello World !!");
// console.log("_",_);

const arr = ["a", "b", "c", "d", "e", "f", "g"];
console.log("hello world !!!!");

_.pull(arr, "a", "c");
console.log("pull", arr);
// const temp = arr.filter(x => x !== "a" && x !== "c")
// console.log(temp)
// const temp = [];
// for(let x of arr) {
//     if(x !== "a"&& x !== "c"){
//         temp.push(x)
//     }
// }
// console.log(temp);

// [[a,b,c], [d,e,f],[g]]

// const result = _.chunk(arr, 4);
// console.log("result",result);

// function chunkArray(arr, size){
//     const result = [];

//     for(let i=0; i <arr.length; i += size) {
//         const chunk = arr.slice(i, i+size);
//         result.push(chunk)
//     }
//     return result
// }

// console.log("***",chunkArray(arr, 4))
// function flatten(arr) {
//     return arr.reduce(function (flat, toFlatten) {
//       return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
//     }, []);
//   }

//   console.log(flatten([[1, 2, 3], [4, 5]]))
//   console.log(flatten([[[1, [1.1]], 2, 3], [4, 5]]))
// console.log(_.flattenDeep([1, [2, [3, [4]], 5]]));
console.log(
  _.flattenDeep([
    [[1, [1.1]], 2, 3],
    [4, 5],
  ])
);

const obj = {
  a: 1,
  b: 2,
  c: {
    d: 4,
  },
};

// console.log(obj.e);

console.log(_.get(obj, "c.d"));
console.log("sdfghjkjhgfdsdfghjk");
