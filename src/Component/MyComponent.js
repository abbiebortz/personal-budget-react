import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import Chart from 'chart.js/auto';
import * as d3 from 'd3';

function MyComponent() {
  const d3ChartRef = useRef(null);

  useEffect(() => {
    axios.get('new.json')
      .then(res => {
        const data = res.data.myBudget;
        createChart(data);
        if (d3ChartRef.current) {
          createD3Chart(data);
        }
      })
      .catch(error => console.error('Error loading data:', error));
  }, []);

  function createChart(data) {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: data.map(item => item.title),
        datasets: [{
          data: data.map(item => item.budget),
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4BC0C0'],
        }]
      }
    });
  }

  function createD3Chart(data) {
    const margin = { top: 40, right: 20, bottom: 70, left: 60 },
      width = 800 - margin.left - margin.right,
      height = 300 - margin.top - margin.bottom;

    const svg = d3.select(d3ChartRef.current).append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom);

    svg.append('text')
      .attr('x', width / 2 + margin.left)
      .attr('y', margin.top / 2)
      .attr('text-anchor', 'middle')
      .style('font-size', '16px')
      .text('D3 Chart');

    const chartGroup = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const x = d3.scaleBand()
      .range([0, width])
      .padding(0.1)
      .domain(data.map(d => d.title));
    const y = d3.scaleLinear()
      .range([height, 0])
      .domain([0, d3.max(data, d => d.budget)]);

    chartGroup.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.title))
      .attr('width', x.bandwidth())
      .attr('y', d => y(d.budget))
      .attr('height', d => height - y(d.budget))
      .attr('fill', (d, i) => ['#FF6384', '#36A2EB', '#FFCE56', '#E7E9ED', '#4BC0C0'][i % 5]);

    chartGroup.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('dx', '-.8em')
      .attr('dy', '.15em')
      .attr('transform', 'rotate(-65)');

    chartGroup.append('g')
      .call(d3.axisLeft(y));
  }

  return (
    <div>
    <div className="chart-container">
      <canvas id="myChart"></canvas>
    </div>
    <div ref={d3ChartRef}></div>
  </div>
  );
}

export default MyComponent;
