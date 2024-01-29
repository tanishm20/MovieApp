import { StyleSheet, Text, View } from 'react-native';
import React, { useMemo, useState } from 'react';
import { currentValue, investmentValue, todaysPNL } from '../../utils/constants';

const FooterBox = ({ data }) => {
    const [isExpanded, setIsExpanded] = useState(false);
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
    const todaysPNLValue = useMemo(() => {
        return data.reduce(
            (accum, item) =>
                accum + todaysPNL(item?.close, item?.ltp, item?.quantity),
            0,
        );
    }, [data]);

    const onPress = () => {
        setIsExpanded(prev => !prev);
    };

    return (
        <View style={styles.containerStyle}>
            <Text
                suppressHighlighting={true}
                onPress={onPress}
                style={styles.triangleStyle}>
                {isExpanded ? '▼' : '▲'}
            </Text>

            {isExpanded && (
                <View style={styles.topSpacing}>
                    <View style={styles.viewStyle}>
                        <Text style={[styles.boldText, styles.textStyle]}>
                            Curent Value:
                        </Text>
                        <Text style={styles.textStyle}>₹{totalCurrentValue}</Text>
                    </View>
                    <View style={styles.viewStyle}>
                        <Text style={[styles.boldText, styles.textStyle]}>
                            Total Investment:
                        </Text>
                        <Text style={styles.textStyle}>
                            ₹{totalInvestmentValue.toFixed(2)}
                        </Text>
                    </View>
                    <View style={styles.viewStyle}>
                        <Text style={[styles.boldText, styles.textStyle]}>
                            Today's Profit & Loss:
                        </Text>
                        <Text style={styles.textStyle}>₹{todaysPNLValue?.toFixed(2)}</Text>
                    </View>
                </View>
            )}
            <View style={styles.viewStyle}>
                <Text style={[styles.boldText, styles.textStyle]}>Profit & Loss:</Text>
                <Text style={styles.textStyle}>
                    ₹{(totalCurrentValue - totalInvestmentValue)?.toFixed(2)}
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
        marginBottom: 24,
    },
    triangleStyle: {
        alignSelf: 'center',
        fontSize: 24,
        color: '#AF4FDC',
    },
});
