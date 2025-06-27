import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const Chart = ({ type, data, height = 300, options = {} }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current || !data) return;

    // Initialize chart
    chartInstance.current = echarts.init(chartRef.current);

    let chartOptions = {};

    switch (type) {
      case 'line':
        chartOptions = {
          tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderColor: '#e5e7eb',
            borderWidth: 1,
            textStyle: {
              color: '#374151'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: data.map(item => new Date(item.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })),
            axisLine: {
              lineStyle: {
                color: '#e5e7eb'
              }
            },
            axisLabel: {
              color: '#6b7280'
            }
          },
          yAxis: {
            type: 'value',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#6b7280'
            },
            splitLine: {
              lineStyle: {
                color: '#f3f4f6'
              }
            }
          },
          series: [{
            data: data.map(item => item.value),
            type: 'line',
            smooth: true,
            lineStyle: {
              width: 3,
              color: '#0ea5e9'
            },
            itemStyle: {
              color: '#0ea5e9'
            },
            areaStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0, color: 'rgba(14, 165, 233, 0.3)'
                }, {
                  offset: 1, color: 'rgba(14, 165, 233, 0.05)'
                }],
                global: false
              }
            },
            symbol: 'circle',
            symbolSize: 6
          }],
          ...options
        };
        break;

      case 'bar':
        chartOptions = {
          tooltip: {
            trigger: 'axis',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderColor: '#e5e7eb',
            borderWidth: 1,
            textStyle: {
              color: '#374151'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: {
            type: 'category',
            data: data.map(item => item.name || item.date),
            axisLine: {
              lineStyle: {
                color: '#e5e7eb'
              }
            },
            axisLabel: {
              color: '#6b7280'
            }
          },
          yAxis: {
            type: 'value',
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: '#6b7280'
            },
            splitLine: {
              lineStyle: {
                color: '#f3f4f6'
              }
            }
          },
          series: [{
            data: data.map(item => item.value || item.users),
            type: 'bar',
            itemStyle: {
              color: '#0ea5e9',
              borderRadius: [4, 4, 0, 0]
            }
          }],
          ...options
        };
        break;

      case 'doughnut':
        chartOptions = {
          tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderColor: '#e5e7eb',
            borderWidth: 1,
            textStyle: {
              color: '#374151'
            }
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
              color: '#6b7280'
            }
          },
          series: [{
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 4,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: data.map((item, index) => ({
              value: item.users || item.value,
              name: item.type || item.name,
              itemStyle: {
                color: [
                  '#0ea5e9',
                  '#8b5cf6',
                  '#f59e0b',
                  '#ef4444',
                  '#10b981'
                ][index % 5]
              }
            }))
          }],
          ...options
        };
        break;

      case 'pie':
        chartOptions = {
          tooltip: {
            trigger: 'item',
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            borderColor: '#e5e7eb',
            borderWidth: 1,
            textStyle: {
              color: '#374151'
            }
          },
          legend: {
            orient: 'vertical',
            left: 'left',
            textStyle: {
              color: '#6b7280'
            }
          },
          series: [{
            type: 'pie',
            radius: '70%',
            data: data.map((item, index) => ({
              value: item.users || item.value,
              name: item.name,
              itemStyle: {
                color: [
                  '#0ea5e9',
                  '#8b5cf6',
                  '#f59e0b',
                  '#ef4444',
                  '#10b981'
                ][index % 5]
              }
            })),
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }],
          ...options
        };
        break;

      default:
        console.warn(`Chart type "${type}" is not supported`);
        return;
    }

    chartInstance.current.setOption(chartOptions);

    // Handle resize
    const handleResize = () => {
      if (chartInstance.current) {
        chartInstance.current.resize();
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (chartInstance.current) {
        chartInstance.current.dispose();
      }
    };
  }, [type, data, options]);

  return (
    <div
      ref={chartRef}
      style={{ width: '100%', height: `${height}px` }}
      className="chart-container"
    />
  );
};

export default Chart;