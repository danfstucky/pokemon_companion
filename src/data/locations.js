// Data for creating SVG chart of mapped locations as well as some properties
// x,y represent hexagonal coordinates, which are translated to
// rectangular coordinates when creating the chart.
const locationsChart = [
  { x: 0, y: 0, order: 1, name: 'Salmon Town', type: 'town' },
  { x: 1.2, y: -1.2, order: 2, name: 'Route 1', type: 'route' },
  { x: 2.4, y: -2.4, order: 3, name: 'Neeromp Farm', type: 'town' },
  { x: 2.4, y: -1.2, order: 4, name: 'Route 5', type: 'route' },
  { x: 2.4, y: 0, order: 5, name: 'Zubat Cave', type: 'route' },
  { x: 3.6, y: -1.2, order: 6, name: 'Route 7', type: 'route' },
  { x: 4.8, y: -2.4, order: 7, name: 'Luprar Village', type: 'town' },
  { x: 4.8, y: -1.2, order: 8, name: 'Echol Forest', type: 'route' },
  { x: 4.8, y: 0, order: 9, name: 'Sideleaf City', type: 'town' },
  { x: 6.0, y: -1.2, order: 10, name: 'Route 12', type: 'route' },
  { x: 7.2, y: -2.4, order: 11, name: 'Koala Bay', type: 'town' },
  { x: 7.2, y: -1.2, order: 12, name: 'Route 13', type: 'route' },
  { x: 7.2, y: 0, order: 13, name: 'Eagle Island', type: 'town' },
  { x: 8.4, y: -1.2, order: 14, name: 'Route 14', type: 'route' },
  { x: 9.6, y: -2.4, order: 15, name: 'Mossrithe Town', type: 'town' },
  { x: 9.6, y: -1.2, order: 16, name: 'Route 15', type: 'route' },
  { x: 9.6, y: 0, order: 17, name: 'Harthril City', type: 'town' },
  { x: 10.8, y: -1.2, order: 18, name: 'Harthril Lake', type: 'route' },
  { x: 12.0, y: -2.4, order: 19, name: 'Route 16', type: 'route' },
  { x: 12.0, y: -1.2, order: 20, name: 'Route 17', type: 'route' },
  { x: 12.0, y: 0, order: 21, name: 'Corlain City', type: 'town' },
  { x: 13.2, y: -1.2, order: 22, name: 'Route 18', type: 'route' },
  { x: 14.4, y: -2.4, order: 23, name: 'Iciest Cave', type: 'route' },
  { x: 14.4, y: -1.2, order: 24, name: 'Taelia Town', type: 'town' },
  { x: 14.4, y: 0, order: 25, name: 'Salmon Plateau', type: 'route' },
];

export default locationsChart;
