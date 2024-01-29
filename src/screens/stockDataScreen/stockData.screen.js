import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ListView from '../../components/listViewComponent/listView.component';
import FooterBox from '../../components/footerBoxComponent/footerBox.component';
import { stockDataAction } from '../../redux/action/stockData-action';

const StockScreen = () => {
    const dispatch = useDispatch();
    const [userHolding, setUserHolding] = useState([]);
    const { stockData } = useSelector(state => state.stockDataReducer);

    useEffect(() => {
        dispatch(stockDataAction());
    }, []);

    useEffect(() => {
        if (stockData && stockData?.userHolding) {
            setUserHolding(stockData?.userHolding);
        }
    }, [stockData]);
    return (
        <>
            <View style={styles.container}>
                <View style={styles.box}>
                    <Text style={styles.titleStyle}>Upstox Holding</Text>
                </View>
                <View style={styles.listviewStyle}>
                    <ListView data={userHolding} />
                </View>
            </View>
            <FooterBox data={userHolding} />
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C7C7CC',
    },
    box: {
        width: '100%',
        paddingVertical: 12,
        backgroundColor: '#800080',
    },
    listviewStyle: {
        paddingTop: 12,
        paddingHorizontal: 16,
        backgroundColor: '#fff',
    },
    titleStyle: {
        color: '#fff',
        fontSize: 16,
        paddingLeft: 8,
        fontWeight: 'bold',
    },
});
export default StockScreen;
