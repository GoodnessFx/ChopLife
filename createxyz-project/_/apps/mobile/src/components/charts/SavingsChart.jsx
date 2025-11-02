import React from 'react';
import { View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const SavingsChart = ({ data }) => {
  const screenWidth = Dimensions.get('window').width - 60; // Account for padding
  
  // Format data for the chart
  const chartData = {
    labels: data.map(item => {
      const date = new Date(item.date);
      return `${date.getMonth() + 1}/${date.getDate()}`;
    }),
    datasets: [
      {
        data: data.map(item => item.value),
        color: (opacity = 1) => `rgba(249, 115, 22, ${opacity})`, // Orange color
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(249, 115, 22, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(100, 116, 139, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#F97316',
    },
  };

  return (
    <View style={{ borderRadius: 12, overflow: 'hidden' }}>
      <LineChart
        data={chartData}
        width={screenWidth}
        height={200}
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 12,
        }}
      />
    </View>
  );
};

export default SavingsChart;