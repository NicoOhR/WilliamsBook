import * as d3 from 'd3';

interface Node {
    id: number;
    links: Link[];
    x: number;
    y: number;
    color: string;
}

interface Link {
    source: number;
    target: number;
}




const width = 800;
const height = 600;

const nodes: Node[] = [
    { id: 1, x: 100, y: 100, color: 'white', links: [{ source: 1, target: 2 }, { source: 1, target: 5 }, { source: 1, target: 3 }] },
    { id: 2, x: 300, y: 100, color: 'white', links: [{ source: 2, target: 1 }, { source: 2, target: 3 }] },
    { id: 3, x: 500, y: 200, color: 'white', links: [{ source: 3, target: 2 }, { source: 3, target: 4 }, { source: 3, target: 1 }] },
    { id: 4, x: 200, y: 300, color: 'white', links: [{ source: 4, target: 3 }, { source: 4, target: 5 }] },
    { id: 5, x: 400, y: 300, color: 'white', links: [{ source: 5, target: 4 }, { source: 5, target: 1 }] },
];

const allLinks : Link[] = [];

for (const node of nodes){
    allLinks.push(...node.links);
}


const svg = d3.select('svg')
    .attr('width', width)
    .attr('height', height);

const linkGroup = svg.append('g').attr('class', 'links');

const nodeGroup = svg.append('g').attr('class', 'nodes');
    
const linkElements = linkGroup.selectAll('line')
    .data(allLinks)
    .enter().append('line')
    .attr('x1', d => nodes[d.source - 1].x)
    .attr('y1', d => nodes[d.source - 1].y)
    .attr('x2', d => nodes[d.target - 1].x)
    .attr('y2', d => nodes[d.target - 1].y)
    .attr('stroke', 'black')
    .attr('id', d => `link-${d.source}-${d.target}`);

// Function to print link IDs connected to a node
function printLinkIDsForNode(node: Node) {
    node.links.forEach(link => {
        const linkID = `link-${link.source}-${link.target}`;
        console.log(linkID);
    });
}


function printLinkedNodeColors(node: Node) {
    node.links.forEach(link => {
        // Get the target node's color
        const targetNode = nodes.find(n => n.id === link.target);
        if (targetNode) {
            console.log(`Target Node ${link.target} color: ${targetNode.color}`);
        }

        // Get the source node's color if it's different from the current node
        if (link.source !== node.id) {
            const sourceNode = nodes.find(n => n.id === link.source);
            if (sourceNode) {
                console.log(`Source Node ${link.source} color: ${sourceNode.color}`);
            }
        }
    });
}

function checkLinkValidity(node : Node){
    node.links.forEach(link => {
        const targetNode = nodes.find(n => n.id === link.target);
        const linkID = `#link-${link.source}-${link.target}`;
        if(targetNode){
            if(targetNode.color === node.color){
                console.log("invalid");
                d3.select(linkID).attr('stroke','red').raise();

            }
            if(targetNode.color !== node.color){
                console.log("valid");
                d3.select(linkID).attr('stroke','black').raise();
            }
        }
    });

}

const nodeElements = nodeGroup.selectAll('circle')
    .data(nodes)
    .enter().append('circle')
    .attr('cx', d => d.x)
    .attr('cy', d => d.y)
    .attr('r', 20)
    .attr('fill', d => d.color)
    .attr('stroke', 'black')
    .on('click', function(event, d) {
        const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
        const currentIndex = colors.indexOf(d.color);
        const newIndex = (currentIndex + 1) % colors.length;
        d.color = colors[newIndex];
        checkLinkValidity(d);
        d3.select(this).attr('fill', d.color).raise();

    });