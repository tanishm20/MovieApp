import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    titleText: {
        fontSize: 32,
        fontWeight: '700',
        fontStyle: 'italic',
        color: '#04abc1',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '700',
        fontStyle: 'italic',
        color: '#ffffff',
    },
    inputViewStyle: {
        marginVertical: 8,
        marginHorizontal: 16,
        flexDirection: 'row',
        borderColor: '#04abc1',
        borderWidth: 2,
        borderRadius: 12,
    },
    inputStyle: {
        flex: 0.8,
        height: 44,
        padding: 12,
        backgroundColor: '#333333',
        color: '#ffffff',
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
    },
    inputButtonStyle: {
        flex: 0.2,
        height: 44,
        padding: 12,
        backgroundColor: '#04abc1',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
    },
});