import { Fragment } from "react";

const Form = ({ handleComputation, listA, setListA, listB, setListB }) => {
  return (
    <Fragment>
      <form onSubmit={handleComputation}>
        <input
          type="text"
          defaultValue={listA}
          placeholder="Enter List A"
          onBlur={(e) => setListA(e.target.value)}
          required
        />

        <input
          type="text"
          defaultValue={listB}
          placeholder="Enter List B"
          onBlur={(e) => setListB(e.target.value)}
          required
        />
        <small>Enter comma separated values. Eg. 1,2,3,4</small>
        <button type="submit">Compute !</button>
      </form>
    </Fragment>
  );
};

export default Form;
