import * as React from 'react';
import './CheckboxGroup.scss';

export default function(props: ICheckboxGroupProps) {
  return (
    <span className="bmd-form-group">
      <div className="input-group">
        <div className="form-check">
          <label className="form-check-label">
            <input
              className="form-check-input"
              type="checkbox"
              value={props.value}
              onChange={props.onChange}
            />
            {props.title}
            <span className="form-check-sign">
              <span className="check" />
            </span>
          </label>
        </div>
      </div>
    </span>
  );
}

export interface ICheckboxGroupProps {
  title?: string;
  onChange?: VoidFunction;
  value?: string;
}
