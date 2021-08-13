/*
|--------------------------------------------------------------------------
| Alert components.
|--------------------------------------------------------------------------
|
| A collection of different alerts that can be used to notify the user about
| important events & state changes.
|
*/

import PropTypes from "prop-types";
import {ReactElement} from "react";
import { motion } from 'framer-motion'

export function Alert({type, children, additionalClasses = ''}): ReactElement {
    // Determine the classes of the alert depending ong the type given as a prop.
    const alertType = (): string => {
        switch (type) {
            case "danger":
                return "site-alert danger";
            case "warning":
                return "site-alert warning";
            case "success":
                return "site-alert success";
            default:
                return "site-alert danger";
        }
    };

    const alertTypeClasses: string = alertType();
    const classes = `${alertTypeClasses} ${additionalClasses}`;

    // Returns statement.
    return <motion.div initial={{ opacity: 0, y: -40 }} exit={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} className={classes}><p className="text">{children}</p></motion.div>;
}

Alert.propTypes = {
    children: PropTypes.any,
    type: PropTypes.string.isRequired,
    additionalClasses: PropTypes.string
};
