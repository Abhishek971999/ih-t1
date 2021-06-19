import { useState } from "react";
//Components
import Form from "./components/Form";
import Result from "./components/Result";

const App = () => {
  //State for list A
  const [listA, setListA] = useState("");
  //State for list B
  const [listB, setListB] = useState("");
  //State for all the resultant computation
  const [results, setResults] = useState({
    intersection: [],
    differenceA: [],
    differenceB: [],
    mergedSet: [],
    computed: false,
  });

  // Function to check which el from arr1 are not present in arr2
  //@param arr1 : string[]
  //@param arr2 : string[]
  //@returns arr : string[]
  const handleDifference = (arr1, arr2) =>
    arr1.filter((el) => !arr2.includes(el));

  // Function to remove holes and empty elements Eg : [1,, ] => [1]
  //@param arr : string[]
  //@returns arr : string[]
  const cleanArray = (arr) =>
    arr.filter((el) => el != null && el !== "" && el !== " ");

  // Function to handle all computation
  //@returns void
  const handleComputation = (e) => {
    e.preventDefault();

    //As computation starts, setting the computed(isResultComputed) value to false
    setResults({ ...results, computed: false });

    //As both list are strings, converting them to array by splitting them to an array of substrings
    let arrA = listA.split(",");
    let arrB = listB.split(",");

    //Remove holes in array
    arrA = cleanArray(arrA);
    arrB = cleanArray(arrB);

    //Getting the items present in both List A and List B by filtering through all elements in first List and checking if that exists in the second list as well.If it exists, the function returns true and that item/element will be returned and the result will be an intersection between the two lists
    let intersection = arrA.filter((el) => arrB.includes(el));

    //Handling the difference between the arrays. Function returns a differnce array
    let differenceA = handleDifference(arrA, arrB);
    let differenceB = handleDifference(arrB, arrA);

    //Getting unique items after comining both arrays.
    let mergedSet = [...new Set([...arrA, ...arrB])];

    //Setting the result state with the computed values
    setResults({
      intersection,
      differenceA,
      differenceB,
      mergedSet,
      computed: true,
    });
  };

  const { intersection, differenceA, differenceB, mergedSet, computed } =
    results;

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-10 col-lg-8">
          <Form
            handleComputation={handleComputation}
            listA={listA}
            setListA={setListA}
            listB={listB}
            setListB={setListB}
          />
        </div>
        <div className="col-sm-12 col-md-10 col-lg-8 result">
          <Result
            intersection={intersection}
            differenceA={differenceA}
            differenceB={differenceB}
            mergedSet={mergedSet}
            computed={computed}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
