import React from "react";

const InputGreeter = (person: Person) => {
  return (
    <>
      <div>
        Henlo {person.firstName} {person.lastName}
      </div>
    </>
  );
};

export default InputGreeter;
