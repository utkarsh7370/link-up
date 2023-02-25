import React from "react";

function Demand({ formData, setFormData }) {
  return (
    <>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            required
            aria-describedby="emailHelp"
            placeholder="Field of Interest"
            value={formData.interest}
            onChange={(event) =>
              setFormData({ ...formData, interest: event.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            required
            aria-describedby="emailHelp"
            placeholder="Expected Rate"
            value={formData.demand}
            onChange={(event) =>
              setFormData({ ...formData, demand: event.target.value })
            }
          />
        </div>
      </form>
    </>
  );
}

export default Demand;
