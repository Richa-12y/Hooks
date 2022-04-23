import React, { useState } from "react";

function HookCounterTwo() {
  const [name, setName] = useState({ firstName: "", lastName: "" });

  const handleFname = (e) => {
    setName({ ...name, firstName: e.target.value });
  };
  const handleLname = (e) => {
    setName({ ...name, lastName: e.target.value });
  };
  return (
    <form>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />
      <br />
      {/* Both way we can define the the input */}
      <input type="text" value={name.firstName} onChange={handleFname} />
      <input type="text" value={name.lastName} onChange={handleLname} />

      <h2>your first name is-{name.firstName}</h2>
      <h2>your last name is-{name.lastName}</h2>
      <h2>{JSON.stringify(name)}</h2>
    </form>
  );
}

export default HookCounterTwo;
