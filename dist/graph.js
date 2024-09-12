import * as d3 from 'd3';
const width = 800;
const height = 600;
const nodes = [
    { id: 1, x: 100, y: 100, color: 'white', links: [{ source: 1, target: 2 }, { source: 1, target: 5 }, { source: 1, target: 3 }] },
    { id: 2, x: 300, y: 100, color: 'white', links: [{ source: 2, target: 1 }, { source: 2, target: 3 }] },
    { id: 3, x: 500, y: 100, color: 'white', links: [{ source: 3, target: 2 }, { source: 3, target: 4 }, { source: 3, target: 1 }] },
    { id: 4, x: 200, y: 300, color: 'white', links: [{ source: 4, target: 3 }, { source: 4, target: 5 }] },
    { id: 5, x: 400, y: 300, color: 'white', links: [{ source: 5, target: 4 }, { source: 5, target: 1 }] },
];
const allLinks = [];
for (const node of nodes) {
    allLinks.push(...node.links);
}
console.log(allLinks);
const svg = d3.select('svg')
    .attr('width', width)
    .attr('height', height);
const linkElements = svg.selectAll('line')
    .data(allLinks)
    .enter().append('line')
    .attr('x1', d => nodes[d.source - 1].x)
    .attr('y1', d => nodes[d.source - 1].y)
    .attr('x2', d => nodes[d.target - 1].x)
    .attr('y2', d => nodes[d.target - 1].y)
    .attr('stroke', 'black')
    .attr('id', d => `link-${d.source}-${d.target}`);
// Function to print link IDs connected to a node
function printLinkIDsForNode(node) {
    node.links.forEach(link => {
        const linkID = `link-${link.source}-${link.target}`;
        console.log(linkID);
    });
}
// Example usage
const exampleNode = nodes[0]; // Node with id 1
printLinkIDsForNode(exampleNode);
const nodeElements = svg.selectAll('circle')
    .data(nodes)
    .enter().append('circle')
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('r', 20)
    .attr('fill', d => d.color)
    .attr('stroke', 'black')
    .on('click', function (event, d) {
    const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
    const currentIndex = colors.indexOf(d.color);
    const newIndex = (currentIndex + 1) % colors.length;
    d.color = colors[newIndex];
    d3.select(this).attr('fill', d.color);
    printLinkIDsForNode(d);
    console.log("click");
    //checkColorValidity(d.id);
});
function checkColorValidity(nodeId) {
}
/*
function checkColorValidity(nodeId: number) {
// Find the selected node by its id
const node = nodes.find(n => n.id === nodeId);

// Iterate through all links to find the ones connected to the selected node
links.forEach(link => {
    // Check if the link involves the selected node (either source or target)
    if (link.source === nodeId || link.target === nodeId) {
        // Find the adjacent node connected by this link
        const adjacentNodeId = (link.source === nodeId) ? link.target : link.source;
        const adjacentNode = nodes.find(n => n.id === adjacentNodeId);

        // If both nodes have the same color, highlight the line connecting them
        if (adjacentNode && adjacentNode.color === node?.color) {
            d3.selectAll('line')
                .filter(d => (d.source === nodeId && d.target === adjacentNodeId) ||
                                (d.source === adjacentNodeId && d.target === nodeId))
                .attr('stroke', 'red')
                .attr('stroke-width', 3); // Thicker red line for visibility
        } else {
            // If the colors are different, reset the line to the default style
            d3.selectAll('line')
                .filter(d => (d.source === nodeId && d.target === adjacentNodeId) ||
                                (d.source === adjacentNodeId && d.target === nodeId))
                .attr('stroke', 'black')
                .attr('stroke-width', 1); // Normal black line
        }
    }
});
}
*/
