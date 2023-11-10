import React from "react"

import "./alert.styles.scss"

export interface AlertProps {
	message: string
	type?: "default" | "success" | "warn" | "error"
	styles?: object
}

const Alert: React.FC<AlertProps> = ({ message, type = "default", styles }) => {
	return (
		<div className={`container`}>
			<div className={`alert ${type}`} style={styles}>
				{message}
			</div>
		</div>
	)
}

export default Alert