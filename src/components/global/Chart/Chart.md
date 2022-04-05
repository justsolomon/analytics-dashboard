### Props

To render the chart, you'll need the following props:

**type**: "line" **|** "bar" **|** "radar" **|** "doughnut" **|** "pie" **|** "polarArea" **|** "bubble" **|** "scatter"

To view more chart types and their samples, refer to the [ChartJS docs.](https://www.chartjs.org/docs/latest/samples/bar/vertical.html)

**data**: [ChartJS Data Structures](https://www.chartjs.org/docs/3.0.2/general/data-structures.html)

**customOptions**: [ChartJS Options](https://www.chartjs.org/docs/3.0.2/general/options.html)

**useDefaultBackground**: Adds a blue-ish canvas gradient to the area under the graph. Default is `true`.

**showPoints**: Shows the points where the x-axis and y-axis interset on the graph. Default is `false`.

#### Line Chart showing deliveries in a single day with points shown

```js
const labels = [];
const data = [];
const date = new Date();
for (let i = 0; i < 12; i++) {
    date.setHours(i);

    //add new hour
    labels.push(date.toLocaleString('en-US', { hour: 'numeric', hour12: true }));

    //add random number of deliveries
    data.push(Math.floor(Math.random() * 1000) + 1);
}
<Chart
    type="line"
    showPoints
    data={{
        labels,
        datasets: [
            {
                tension: 0.4,
                label: 'No. of Deliveries',
                data,
            },
        ],
    }}
/>;
```

#### Line Chart showing deliveries in a single day with default area background and points shown on hover

```js
const labels = [];
const data = [];
const date = new Date();
for (let i = 0; i < 12; i++) {
    date.setHours(i);

    //add new hour
    labels.push(date.toLocaleString('en-US', { hour: 'numeric', hour12: true }));

    //add random number of deliveries
    data.push(Math.floor(Math.random() * 1000) + 1);
}
<Chart
    type="line"
    useDefaultBackground
    data={{
        labels,
        datasets: [
            {
                tension: 0.4,
                label: 'No. of Deliveries',
                data,
            },
        ],
    }}
/>;
```

#### Line chart showing deliveries in the current and previous day

```js
const labels = [];
const data = [];
const secondData = [];
const date = new Date();

for (let i = 0; i < 12; i++) {
    date.setHours(i);

    //add new hour
    labels.push(date.toLocaleString('en-US', { hour: 'numeric', hour12: true }));

    //add random number of deliveries
    data.push(Math.floor(Math.random() * 1000) + 1);
    secondData.push(Math.floor(Math.random() * 1000) + 1);
}

<Chart
    type="line"
    data={{
        labels,
        datasets: [
            {
                tension: 0.4,
                label: 'No. of Deliveries on Tuesday',
                data,
            },
            {
                tension: 0.4,
                label: 'No. of Deliveries on Monday',
                borderColor: '#DFE0EB',
                data: secondData,
            },
        ],
    }}
/>;
```

#### Line chart showing deliveries in the current and previous day with area background color

```js
const labels = [];
const data = [];
const secondData = [];
const date = new Date();

for (let i = 0; i < 12; i++) {
    date.setHours(i);

    //add new hour
    labels.push(date.toLocaleString('en-US', { hour: 'numeric', hour12: true }));

    //add random number of deliveries
    data.push(Math.floor(Math.random() * 1000) + 1);
    secondData.push(Math.floor(Math.random() * 1000) + 1);
}

<Chart
    type="line"
    data={{
        labels,
        datasets: [
            {
                tension: 0.4,
                label: 'No. of Deliveries on Tuesday',
                data,
                fill: 'start',
                backgroundColor: 'rgba(55, 81, 255, 0.1)',
            },
            {
                tension: 0.4,
                label: 'No. of Deliveries on Monday',
                borderColor: '#DFE0EB',
                data: secondData,
            },
        ],
    }}
/>;
```

#### Bar chart showing deliveries in a single day

```js
const labels = [];
const data = [];
const date = new Date();
for (let i = 0; i < 12; i++) {
    date.setHours(i);

    //add new hour
    labels.push(date.toLocaleString('en-US', { hour: 'numeric', hour12: true }));

    //add random number of deliveries
    data.push(Math.floor(Math.random() * 1000) + 1);
}
<Chart
    type="bar"
    data={{
        labels,
        datasets: [
            {
                label: 'No. of Deliveries',
                data,
                backgroundColor: '#fff',
            },
        ],
    }}
/>;
```
