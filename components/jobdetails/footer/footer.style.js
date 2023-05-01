import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../../../constants";

const styles = StyleSheet.create({
	container: {
		position: "absolute",
		bottom: 0,
		left: 0,
		right: 0,
		paddingVertical: SIZES.large,
		paddingHorizontal: SIZES.xLarge,
		backgroundColor: "#FFF",
		justifyContent: "space-between",
		alignItems: "center",
		flexDirection: "row",
		borderTopColor: "#b6b6b6",
		borderTopWidth: "1",
	},
	likeBtn: {
		width: 45,
		height: 45,
		borderWidth: 1,
		borderColor: "#ab0000",
		borderRadius: SIZES.medium,
		justifyContent: "center",
		alignItems: "center",
	},
	likeBtnImage: {
		width: "40%",
		height: "40%",
		tintColor: "#ab0000",
	},
	applyBtn: {
		flex: 1,
		backgroundColor: COLORS.primary,
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		marginLeft: SIZES.medium,
		borderRadius: SIZES.medium,
	},
	applyBtnText: {
		fontSize: SIZES.medium,
		color: COLORS.white,
		fontFamily: FONT.bold,
	},
});

export default styles;
