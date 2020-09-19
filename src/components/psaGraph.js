import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ResponsiveLine } from '@nivo/line'
import moment from 'moment';
import '../App.css';

function PsaGraph({ psaData }) {
    const [value, setValue] = useState(psaData);
    // This will launch only if propName value has chaged.
    useEffect(() => {
        setValue(psaData)

    }, [psaData]
    );

    return (
        <div id="psaGraph">
            <ResponsiveLine
                data={psaData}
                margin={{ top: 15, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point'}}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                curve="catmullRom"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    format: function(value){ 
                        return moment(value).format('MM-DD');
                    },
                    legend: "Time",
                    legendPosition: "middle",
                    legendOffset: 34,
                    tickValues: 'every 1 week',
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                colors={{ scheme: 'nivo' }}
                lineWidth={6}
                pointSize={10}
                pointColor={{ from: 'color', modifiers: [] }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabel="y"
                pointLabelYOffset={-12}
                areaOpacity={0.25}
                useMesh={true}
                legends={[
                    {
                        anchor: 'top-left',
                        direction: 'row',
                        justify: false,
                        translateX: 23,
                        translateY: 0,
                        itemsSpacing: 0,
                        itemDirection: 'left-to-right',
                        itemWidth: 84,
                        itemHeight: 20,
                        itemOpacity: 0.75,
                        symbolSize: 12,
                        symbolShape: 'circle',
                        symbolBorderColor: 'rgba(0, 0, 0, .5)',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemBackground: 'rgba(0, 0, 0, .03)',
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
            />
        </div>
    );
}

export default PsaGraph;
