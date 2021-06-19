import { Fragment } from "react";

const Result = ({
  intersection,
  differenceA,
  differenceB,
  mergedSet,
  computed,
}) => {
  return (
    <Fragment>
      <h6 className="mb-3">Computation Result will show up here</h6>
      {computed && (
        <Fragment>
          <div className="row">
            <div className="col-sm-6">
              <h6>Items present only in A</h6>
            </div>
            <div className="col-sm-6">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    differenceA.length === 0 ? "No elements" : differenceA,
                }}
              ></div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <h6>Items present only in B</h6>
            </div>
            <div className="col-sm-6">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    differenceB.length === 0 ? "No elements" : differenceB,
                }}
              ></div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <h6>Items present in both A and B</h6>
            </div>
            <div className="col-sm-6">
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    intersection.length === 0 ? "No elements" : intersection,
                }}
              ></div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6">
              <h6>Items combining both A and B (unique)</h6>
            </div>
            <div className="col-sm-6">
              <div
                dangerouslySetInnerHTML={{
                  __html: mergedSet.length === 0 ? "No elements" : mergedSet,
                }}
              ></div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Result;
