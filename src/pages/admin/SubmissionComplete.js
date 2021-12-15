import { Link } from "react-router-dom";

export default function SubmissionComplete() {
  return (
    <div>
      <div>Submission Complete!</div>
      <Link to="/adminpanel">
        <button className="btn btn-light btn-lg" style={{ color: "#965353" }}>
          Back to Admin Panel
        </button>
      </Link>
    </div>
  );
}
