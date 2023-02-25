import React from "react";

function Personalinfo({ formData, setFormData }) {
  return (
    <>
      <form>
        <div className="mb-3">
          <input
            type="text"
            className="form-control border-0 shadow-sm p-2"
            required
            aria-describedby="emailHelp"
            placeholder="Country"
            value={formData.contary}
            onChange={(event) =>
              setFormData({ ...formData, contary: event.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control border-0 shadow-sm p-2"
            required
            aria-describedby="emailHelp"
            placeholder="City"
            value={formData.city}
            onChange={(event) =>
              setFormData({ ...formData, city: event.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control border-0 shadow-sm p-2"
            required
            aria-describedby="emailHelp"
            placeholder="Social Links"
            value={formData.socialmedia}
            onChange={(event) =>
              setFormData({ ...formData, socialmedia: event.target.value })
            }
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control border-0 shadow-sm p-2"
            required
            aria-describedby="emailHelp"
            placeholder="Something about you.."
            value={formData.bio}
            onChange={(event) =>
              setFormData({ ...formData, bio: event.target.value })
            }
          />
        </div>
      </form>
    </>
  );
}

export default Personalinfo;
