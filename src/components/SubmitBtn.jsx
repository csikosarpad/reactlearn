import React from 'react';

export function SubmitBtn(props) {
  return (
    <input type="submit" value={props.value} disabled={props.disabled} />
  );
};
