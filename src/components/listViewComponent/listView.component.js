import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { currentValue, investmentValue } from '../../utils/constants';

const ListView = ({ data }) => {
    const renderItem = ({ item, index }) => {
        const pl =
            currentValue(item?.ltp, item?.quantity) -
            investmentValue(item?.avgPrice, item?.quantity);
        return (
            <>
                <View style={styles.viewStyle}>
                    <Text style={[styles.boldText, styles.textStyle]}>
                        {item?.symbol}
                    </Text>
                    <Text style={styles.textStyle}>
                        LTP: <Text style={styles.boldText}> ₹ {item?.ltp?.toFixed(2)}</Text>
                    </Text>
                </View>
                <View style={styles.viewStyle}>
                    <Text style={styles.textStyle}>{item?.quantity}</Text>
                    <Text style={styles.textStyle}>
                        P/L:
                        <Text style={styles.boldText}> ₹ {pl?.toFixed(2)}</Text>
                    </Text>
                </View>
                {data?.length - 1 !== index && <View style={styles.seperatorStyle} />}
            </>
        );
    };

    return (
        <View style={styles.containerStyle}>
            <FlatList
                showsVerticalScrollIndicator={false}
                renderItem={renderItem}
                data={data}
                keyExtractor={item => item?.symbol}
                extraData={data}
            />
        </View>
    );
};

export default ListView;

const styles = StyleSheet.create({
    containerStyle: {
        marginVertical: 8,
    },
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 4,
    },
    textStyle: {
        fontSize: 16,
    },
    boldText: {
        fontWeight: 'bold',
    },
    seperatorStyle: {
        marginVertical: 8,
        borderWidth: 1,
        borderColor: '#C7C7CC',
    },
});
