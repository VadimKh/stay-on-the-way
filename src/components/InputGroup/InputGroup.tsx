import * as React from "react";

export default function(props: IInputGroupProps) {
  return (
    <span className="bmd-form-group">
      <div className="input-group">
        <span className="input-group-addon">
          <i className={props.iconClass} />
        </span>
        <input
          type={props.type || "text"}
          className="form-control"
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
        />
      </div>
    </span>
  );
}

export interface IInputGroupProps {
  type?: string;
  onChange?: VoidFunction;
  placeholder?: string;
  iconClass?: string;
  value?: string;
}
