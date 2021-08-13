/*
|--------------------------------------------------------------------------
| Form Element components.
|--------------------------------------------------------------------------
|
| A collection of form elements ready to plug in to other compents.
| They all have error messages ready to be displayed.
|
*/
import PropTypes from "prop-types";
import {ReactElement} from "react";
import { motion } from 'framer-motion'

/**
 * Text input field.
 *
 * @param {object} props
 *   The props object.
 */
export function TextInput(props: any): ReactElement {

    // Return statement.
    return (
        <div className="text-input w-full mb-2">
            <input
                type={props.type || "text"}
                value={props.value}
                onChange={props.onChange}
                name={props.name}
                placeholder={props.placeholder || ""}
            />
            {/* Shor error message if given. */}
            {props.errorMsg && (
                <motion.div initial={{ opacity: 0, y: -20 }} exit={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="form-alert-min">{props.errorMsg}</motion.div>
            )}
        </div>
    );
}
TextInput.propTypes = {
    type: PropTypes.string,
    value: PropTypes.any.isRequired,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    errorMsg: PropTypes.string,
};

/**
 * Textarea input field.
 *
 * @param {object} props
 *   The props object.
 */
export function TextArea(props: any): ReactElement {
    return (
        <div>
            <textarea
                name={props.name}
                rows={3}
                placeholder={props.placeholder}
                onChange={props.onChange}
                cols={50}
                className={`w-full p-1 rounded bg-white focus:outline-none focus:ring-2 focus:ring-purple-600 border border-transparent focus:border-transparent ${
                    props.errorMsg ? "border-red-500" : "border-transparent"
                } `}
            >
                {props.value}
            </textarea>
            {props.errorMsg && (
                <div className="text-red-500">{props.errorMsg}</div>
            )}
        </div>
    );
}
TextArea.propTypes = {
    value: PropTypes.any.isRequired,
    name: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    errorMsg: PropTypes.string,
};
