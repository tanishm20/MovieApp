import { StyleSheet, Text, View } from 'react-native';
import React, { useMemo } from 'react';
import { currentValue, investmentValue } from '../../utils/constants';

const FooterBox = ({ data }) => {
    const totalCurrentValue = useMemo(() => {
        return data.reduce(
            (accum, item) => accum + currentValue(item?.ltp, item?.quantity),
            0,
        );
    }, [data]);

    const totalInvestmentValue = useMemo(() => {
        return data.reduce(
            (accum, item) => accum + investmentValue(item?.avgPrice, item?.quantity),
            0,
        );
    }, [data]);

    return (
        <View style={styles.containerStyle}>
            <View style={styles.viewStyle}>
                <Text style={[styles.boldText, styles.textStyle]}>Curent Value:</Text>
                <Text style={styles.textStyle}>₹{totalCurrentValue}</Text>
            </View>
            <View style={styles.viewStyle}>
                <Text style={[styles.boldText, styles.textStyle]}>
                    Total Investment:
                </Text>
                <Text style={styles.textStyle}>₹{totalInvestmentValue.toFixed(2)}</Text>
            </View>
            <View style={styles.viewStyle}>
                <Text style={[styles.boldText, styles.textStyle]}>
                    Today's Profit & Loss:
                </Text>
                <Text style={styles.textStyle}>
                    ₹{totalCurrentValue - totalInvestmentValue.toFixed(2)}
                </Text>
            </View>
            <View style={[styles.viewStyle, styles.topSpacing]}>
                <Text style={[styles.boldText, styles.textStyle]}>Profit & Loss:</Text>
                <Text style={styles.textStyle}>
                    ₹{totalCurrentValue - totalInvestmentValue.toFixed(2)}
                </Text>
            </View>
        </View>
    );
};

export default FooterBox;

const styles = StyleSheet.create({
    containerStyle: {
        backgroundColor: '#fff',
        paddingHorizontal: 16,
        paddingVertical: 16,
    },
    viewStyle: {
        paddingVertical: 6,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textStyle: {
        fontSize: 18,
    },
    boldText: {
        fontWeight: 'bold',
    },
    topSpacing: {
        paddingTop: 32,
    },
});
