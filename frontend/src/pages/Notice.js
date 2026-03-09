import { useEffect, useState } from "react";

function Notice() {

  const [notices, setNotices] = useState([]);

  useEffect(() => {
    //fetch("http://localhost:5000/api/notices")
    fetch(`${process.env.REACT_APP_API_URL}/api/notices`)
      .then(res => res.json())
      .then(data => setNotices(data));
  }, []);

  return (

    <div>

      <h2>Notices</h2>

      {notices.map(notice => (
        <div key={notice.id}>

          <h4>{notice.title}</h4>
          <p>{notice.date}</p>
          <p>{notice.message}</p>

        </div>
      ))}

    </div>

  );
}

export default Notice;