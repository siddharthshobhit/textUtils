import React from 'react'

function Alerts(props) { 
    const Capitalize = (type) => {
      if (type) {
        const lower = type.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
      }
    };
  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{Capitalize(props.alert.type)}</strong> {props.alert.message}
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    )
  );
}

export default Alerts
