import React from "react";
import { useEffect, useState } from "react";

function Contact({ listing }) {
  const [landlord, setLandlord] = useState(null);

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        setLandlord(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLandlord();
  }, [listing.userRef]);

  return (
    <div>
      <p>
        Please contact <span className="font-semibold text-cyan-900">{landlord?.username}</span>
      </p>
    </div>
  );
}

export default Contact;
