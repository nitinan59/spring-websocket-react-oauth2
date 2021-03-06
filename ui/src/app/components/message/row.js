import React from "react";
import PropTypes from "prop-types";

const MessageRow = props => (
	<tr>
		<td>{props.data}</td>
	</tr>
);

MessageRow.propTypes = {
	data: PropTypes.string.isRequired
};

export default MessageRow;
