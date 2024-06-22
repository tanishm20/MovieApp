import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    item: {
        padding: 8,
        marginVertical: 8,
        marginHorizontal: 16,
        flex: 1,
        margin: 2,
        borderColor: '#04abc190',
        borderWidth: 2,
        borderRadius: 12,
    },
    image: {
        width: 250,
        height: 250,
        alignSelf: 'center',
        resizeMode: 'contain',
    },
    imageTitle: {
        marginVertical: 8,
        textAlign: 'center',
        fontSize: 16,
        fontWeight: '700',
        color: '#ffffff',
    },
    imageReleased: {
        fontSize: 12,
        fontWeight: '300',
        color: '#ffffff',
    },
    imageOverView: {
        marginTop: 10,
        fontSize: 14,
        fontWeight: '300',
        color: '#ffffff',
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },
    errorText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '800',
    },
});