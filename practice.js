// ১. তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল
// লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা
// নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে?
// যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো।

// let type = "oggy";
// const num = 24;
// const bluyan = true;

//
// ২. তুমি কি জানো কখন Let দিয়ে ভেরিয়েবল লিখতে হয়ে
// আর কখন Const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে
// পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল
// লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে
// ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান
// চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার
// করবে Let এবং Const দিয়ে। তারপর যেকোন একটার ভ্যালু
// চেইঞ্জ করবে। এই Let এবং Const মাথা গরম করে দিলে
// টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ
// এইটা নিয়ে আরো ডিসকাস করা হবে।

// let pggy = "age";
// pggy = "old";
// console.log(pggy);

// const oggy = "age";
// oggy = "old";
// console.log(oggy);

// ৩. দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে
//  করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %
//  এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল
//  লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল
//  এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন,
//     ভাগ এবং ভাগশেষ বের করো।

// const oggyAge = 15;
// const oggyOld = 10;

// const sum = oggyAge + oggyOld;

// const sum2 = oggyAge - oggyOld;
// const sum3 = oggyAge * oggyOld;
// const sum4 = oggyAge / oggyOld;
// const sum5 = oggyAge % oggyOld;
// console.log(sum);
// console.log(sum2);
// console.log(sum3);
// console.log(sum4);
// console.log(sum5);
//
//  ৪. তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন
// করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে
// ছোট, বড়, অসমান, সমান, ছোট বা সমান, বড় বা সমান। এইগুলা চেক
// করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো।
// তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে
// তুলনা করে কোড লিখে ফেলো।
// Declare two number variables

// const oggyAge = 15;
// const jackAge = 25;

// const brother = oggyAge < jackAge;
// const brother = oggyAge > jackAge;
// const brother = oggyAge == jackAge;
// const brother = oggyAge != jackAge;
// const brother = oggyAge <= jackAge;
// const brother = oggyAge >= jackAge;
// console.log(brother);
//
// / ৫. তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা
// শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা
// চেক করতে পারবে ? একইভাবে যদি বলে তুমি দুইটা শর্তের
// যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং ||
// এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে
// এই রকমের কোড লিখে ফেলো।

// const condisone1 = true;
// const condisone2 = false;

// if (condisone1 && condisone2) {
//   console.log("oky");
// } else {
//   console.log("not oky");
// }

// let condisone1 = true;
// let condisone2 = false;
// if (condisone1 || condisone2) {
//   console.log("oky");
// } else {
//   console.log("not oky");
// }
//
// ৬. তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না
// করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি
// কি If - Else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো

// const condisone = true;
// if (condisone) {
//   console.log("oky");
// } else {
//   console.log("not oky");
// }
//
// ৭. তোমাকে যদি বলে একটা While লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা
// বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে ? পারলে
// সেই কোড লিখে ফেলো।

// let number = 7;
// while (number <= 19) {
//   if (number % 2 !== 0) {
//     console.log(number);
//   }
//   number++;
// }

//
// let number = 9;
// while (number <= 29) {
//   if (number % 2 !== 0) {
//     console.log(number);
//   }
//   number++;
// }

//
// let number = 21;
// while (number <= 40) {
//   if (number % 2 == !1) {
//     console.log(number);
//   }
//   number++;
// }
//
//  ৮. তোমাকে যদি বলা হয় তুমি একটা Array ডিক্লেয়ার করবে।
// এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে।
// সেই Array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে
// হবে। Array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা
// উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে।
// let Array = [2, 4, 6, 1, 70, 5, 31];
// let arrylength = Array.length;
// console.log(arrylength);

// if (arrylength >= 5) {
//   Array[5] = 90;
//   console.log(Array);
// } else {
//   console.log("not oky");
// }

// Array.push(12, 23);
// console.log(Array);
// Array.pop();
// console.log(Array);

// let Array = [2, 3, 4, 5, 6, 7, 8, 9];
// let Arrayfull = Array.length;
// // console.log(Arrayfull);

// if (Arrayfull >= 7) {
//   Array[5] = 10;
//   console.log(Array);
// }

// Array.push(12, 14);
// console.log(Array);
// Array.pop();
// console.log(Array);

// let Array = [2, 3, 4, 5, 6, 7, 8, 9];
// let Arrayfull = Array.length;
// // console.log(Arrayfull);

// if (Arrayfull >= 8) {
//   Array[6] = 10;
//   console.log(Array);
// }

// Array.push(12, 13);
// console.log(Array);

// Array.pop();
// console.log(Array);

// let Array = [2, 1, 3, 4, 5, 6, 7, 8, 9];
// let Arrayfull = Array.length;
// // console.log(Arrayfull);

// if (Arrayfull >= 7) {
//   Array[6] = 90;
//   console.log(Array);
// }

// Array.push(10, 12);
// console.log(Array);

// Array.pop();
// console.log(Array);

// ৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা Array এর সবগুলা
// উপাদানকে দেখাতে পারবে। সেটা রেগুলার For লুপ হোক বা For Of হোক।
// হলে সেই স্টাইলে একটা কোড লিখে ফেলো।

// let number = [2, 7, 8, 5, 90, 23];
// for (i = 0; number.length >= i; i++) {
//   console.log(number[i]);
// }

// let number = [23, 34, 67, 98, 65, 32];

// for (i = 0; number.length >= i; i++) {
//   console.log(number[i]);
// }

// const names = ["oggy", "bob", "jack"];

// for (nameing of names) {
//   console.log(nameing);
// }

// let names = ["oggy", "jack", "bob"];
// for (nameing of names) {
//   console.log(nameing);
// }
//
// ১০. তোমাকে যদি বলা হয়। একটা Array এর মধ্যে ৮০ এর চাইতে
// বড় সংখ্যা থাকলে সেগুলাকে Console Log করে দেখাতে সেটা কি তুমি
// পারবে ? তাহলে তুমি সেই কোড করে ফেলো
//
// function maxInArray(numbers) {
//   let largest = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     if (element > largest) {
//       largest = element;
//     }
//   }
//   return largest;
// }

// const heights = [167, 190, 120, 165, 137];
// const tallest = maxInArray(heights);
// console.log("tallest person is:", tallest);

// function arrNumberbig80(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 80) {
//       console.log(array[i]);
//     }
//   }
// }

// const number = [45, 47, 89, 98, 39, 67, 94, 62, 81];
// console.log(arrNumberbig80(number));

// function arrayName(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 80) {
//       console.log(array[i]);
//     }
//   }
// }

// const babyarray = [45, 67, 90, 96, 67, 86];
// console.log(arrayName(babyarray));

// function arrayName(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] > 80) {
//       console.log(array[i]);
//     }
//   }
// }

// const Arrayfull = [78, 32, 43, 89, 90, 32];
// console.log(arrayName(Arrayfull));
//
//

// ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট
// আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে
// পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো।

// function gunfol(num1, num2, num3) {
//   let product = num1 * num2 * num3;
//   return product;
// }

// let number1 = 5;
// let number2 = 10;
// let number3 = 15;

// let result = gunfol(number1, number2, number3);
// console.log(result);

// function gunfoll(num1, num2, num3) {
//   let product = num1 * num2 * num3;
//   return product;
// }

// let number1 = 5;
// let number2 = 10;
// let number3 = 15;

// let result = gunfoll(number1, number2, number3);
// console.log(result);

//

// ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে।
// এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা।

// let myObjet = {
//   propatyName: "oggy",
//   propatyName2: "jack",
//   propatyName3: "bob",
// };

// myObjet.propatyName2 = "jaking";
// console.log(myObjet);

// let myObjet = {
//   propatyName1: "oggy",
//   propatyName2: "jack",
//   propatyName3: "bob",
// };

// myObjet.propatyName3 = "bobAngry";
// console.log(myObjet);

// let myObjet = {
//   propatyName: "oggy",
//   propatyName2: "jack",
//   propatyName3: "bob",
// };

// myObjet.propatyName = "ganduOggy";
// console.log(myObjet);
//
// 1. সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে FeetToInch এবং
// এই ফাংশন ইনপুট হিসেবে নিবে Feet আর রিটার্ন করবে Inch । অর্থাৎ
// এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।

// function inchToFeet(Inch) {
//   const Feet = Inch / 12;
//   return Feet;
// }

// const dadaInches = 180;
// const dadaFeet = inchToFeet(dadaInches);
// console.log(dadaFeet);

// function inchToFeet(Inch) {
//   const Feet = Inch / 12;
//   return Feet;
// }

// const dadaInches = 280;
// const dadaFeet = inchToFeet(dadaInches);
// console.log(dadaFeet);
//
//
// function inchToFeet(Inch) {
//   const Feet = Inch / 12;
//   return Feet;
// }

// const dadaInches = 178;
// const dadaFeet = inchToFeet(dadaInches);
// console.log(dadaFeet);
//
//

// ২. একদম ফাংশন এর নাম হুবহু CentimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে।
// এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ
// কনভার্ট করে রেজাল্ট রিটার্ন করবে।

// function CentimeterToMeter(Centimeters) {
//   const Meter = Centimeters * 0.01;
//   return Meter;
// }

// const dadaCentimeters = 600;
// const dadaMeter = CentimeterToMeter(dadaCentimeters);
// console.log(dadaMeter);

// function CentimeterToMetern(Centimeters) {
//   const Meter = Centimeters * 0.01;
//   return Meter;
// }

// const dadaCentimeters = 700;
// const dadaMeter = CentimeterToMetern(dadaCentimeters);
// console.log(dadaMeter);
//
//
// ৩. আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে PaperRequirements
// এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই
// কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর
// থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো
// হবে সেটাই প্যারামিটার হিসেবে নিবে।

// এইবার ভালো করে খেয়াল করো।

// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা

// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা

// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা

// এখন তোমার কাজ হচ্ছে PaperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে
// কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে
// বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে।

// উত্তর হিসেবে সংখ্যা রিটার্ন করবে।

// function PaperRequirements(copiesFirstBook, copiesSecondBook, copiesThirdBook) {
//   // Define the number of pages for each book
//   const pagesFirstBook = 100;
//   const pagesSecondBook = 200;
//   const pagesThirdBook = 300;

//   // Calculate the total pages required
//   let totalPaper =
//     copiesFirstBook * pagesFirstBook +
//     copiesSecondBook * pagesSecondBook +
//     copiesThirdBook * pagesThirdBook;

//   return totalPaper;
// }

// // Example usage:
// let copiesFirstBook = 2;
// let copiesSecondBook = 3;
// let copiesThirdBook = 1;

// let totalPaperRequired = PaperRequirements(
//   copiesFirstBook,
//   copiesSecondBook,
//   copiesThirdBook
// );
// console.log("Total pages of paper required:", totalPaperRequired);
//
//
// ৪. একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে BestFriend তারপর সেই
// ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা Array নিবে। সেই Array এর মধ্যে
// তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম
// সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ
// ফ্রেন্ডের নাম(স্ট্রিং) রিটার্ন করতে হবে।
//
// function BestFriend(friends) {
//   // Initialize the longest name with an empty string
//   let longestName = "";

//   // Loop through each friend name in the array
//   for (let i = 0; i < friends.length; i++) {
//     // Check if the current name is longer than the current longest name
//     if (friends[i].length > longestName.length) {
//       longestName = friends[i]; // Update longestName if the current name is longer
//     }
//   }

//   return longestName; // Return the longest name
// }

// // Example usage:
// let myFriends = ["Alice", "Bob", "Charlie", "David", "Elizabeth"];
// let bestFriendName = BestFriend(myFriends);
// console.log("My best friend is:", bestFriendName);
//

// function bestFriend(friends) {
//   let longestName = "";
//   for (let i = 0; i < friends.length; i++) {
//     if (friends[i].length > longestName.length) {
//       longestName = friends[i];
//     }
//   }
//   return longestName;
// }

// const myFriends = ["orpon", "oggy", "jack", "ronngon", "foisal"];
// const bestFriendName = bestFriend(myFriends);
// console.log(bestFriendName);
//
//
// ৫. এইটা একটু ট্রিকি হতে পারে। একটা Array এর মধ্যে অনেকগুলা সংখ্যা থাকবে।
// তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি
// পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা
// Array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং
// লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে।
//
// function getPositiveNumbers(numbers) {
//   let positiveNumbers = [];

//   for (let i = 0; i < numbers.length; i++) {
//     // Check if the current number is positive
//     if (numbers[i] >= 0) {
//       positiveNumbers.push(numbers[i]); // Add positive number to the array
//     } else {
//       break; // Exit the loop if a negative number is encountered
//     }
//   }

//   return positiveNumbers;
// }

// // Example usage:
// let array = [3, 7, -2, 9, -5, 4];
// let positiveNumbers = getPositiveNumbers(array);
// console.log("Positive numbers:", positiveNumbers);
//
//
//
function getpositiveNumber(numbers) {
  let positiveNumbers = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      positiveNumbers.push(numbers[i]);
    } else {
      break;
    }
  }
  return positiveNumbers;
}

let array = [3, 7, -2, 9, -5, 4];
let positiveNumbers = getpositiveNumber(array);
console.log(positiveNumbers);
