// mcs-engine.js - Final version

/*
    MCS – Mustache Construct Syntax
    Copyright (C) 2026 Seyed Parsa Qazi MirSaeed.
    All rights reserved. 
*/

// mcs-engine.js - Final version
// Features:
// 1. Dynamic Lip Line width (scales with Extended Wings)
// 2. Wing Shape: Rectangular vs Triangular ends
// 3. Corrected symmetric wing angles
// 4. No-column mode sits above lip line

function generateMustacheSVG(config) {
    const { height, angle, gap, lip, extended, radius, thickness, wingShape } = config;

    // Canvas constants
    const w = 200, h = 100;
    const centerX = 100;
    const lipLineY = 55;

    // Dimensions
    const colWidth = thickness * 2.0;
    const colHeight = (height === 'all') ? 40 : (height === 'semi') ? 22 : 0;
    const wingLen = (extended === 'true') ? 75 : 55;
    const wingHeight = thickness * 1.4;

    // Lip offset calculations
    let colY = lipLineY - colHeight; // 'On Lip'
    if (lip === 'over') colY = lipLineY - colHeight + 8;
    else if (lip === 'linegap') colY = lipLineY - colHeight - 12;

    // Wing Y position
    let wingY;
    if (height !== 'none') {
        wingY = colY + (colHeight / 2);
    } else {
        wingY = lipLineY - 20;
        if (lip === 'over') wingY = lipLineY - 12;
        else if (lip === 'linegap') wingY = lipLineY - 32;
    }

    // Angle conversion
    let angleRad = 0;
    if (angle === 'diagonal') angleRad = -12 * Math.PI / 180;
    else if (angle === 'upward') angleRad = 12 * Math.PI / 180;

    // Build SVG
    let svg = `<svg width="100%" viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg">`;

    // 1. Dynamic Lip Line (Width scales with 'extended')
    let lipLineWidth = 140;
    if (extended === 'true') lipLineWidth = 180;
    const lipLineX1 = centerX - lipLineWidth / 2;
    const lipLineX2 = centerX + lipLineWidth / 2;
    svg += `<line x1="${lipLineX1}" y1="${lipLineY}" x2="${lipLineX2}" y2="${lipLineY}" stroke="#888" stroke-width="1.5" stroke-dasharray="5,5" />`;
    svg += `<text x="${lipLineX1 + 5}" y="${lipLineY - 5}" fill="#888" font-size="8" font-family="monospace">Lip Line</text>`;

    // 2. Column
    if (height !== 'none') {
        const colX = centerX - (colWidth / 2);
        
        if (gap === 'true') {
            const gapSize = 8;
            const singleWidth = (colWidth - gapSize) / 2;
            const leftX = centerX - colWidth/2;
            svg += `<rect x="${leftX}" y="${colY}" width="${singleWidth}" height="${colHeight}" fill="black" />`;
            const rightX = centerX + gapSize/2;
            svg += `<rect x="${rightX}" y="${colY}" width="${singleWidth}" height="${colHeight}" fill="black" />`;
        } else {
            if (radius === 'round') {
                const r = colWidth / 2;
                const pathD = `M ${colX} ${colY + colHeight} L ${colX} ${colY} A ${r} ${r} 0 0 1 ${colX + colWidth} ${colY} L ${colX + colWidth} ${colY + colHeight} Z`;
                svg += `<path d="${pathD}" fill="black" />`;
            } else {
                svg += `<rect x="${colX}" y="${colY}" width="${colWidth}" height="${colHeight}" fill="black" />`;
            }
        }
    }

    // 3. Wings with Shape Option
    let attachXLeft, attachXRight;
    if (height !== 'none') {
        attachXLeft = centerX - (colWidth / 2);
        attachXRight = centerX + (colWidth / 2);
    } else {
        attachXLeft = centerX - 10;
        attachXRight = centerX + 10;
    }

    const tiltAmount = Math.sin(Math.abs(angleRad)) * wingLen;
    let wingTiltY = 0;
    if (angle === 'diagonal') wingTiltY = tiltAmount;
    else if (angle === 'upward') wingTiltY = -tiltAmount;

    // Left Wing
    const tipXLeft = attachXLeft - wingLen * Math.cos(angleRad);
    const tipYLeft = wingY + wingTiltY;

    // Right Wing
    const tipXRight = attachXRight + wingLen * Math.cos(angleRad);
    const tipYRight = wingY + wingTiltY;

    if (wingShape === 'triangular') {
        // Triangular ends: The two bottom points collapse into one tip
        svg += `<polygon points="${attachXLeft},${wingY} ${tipXLeft},${tipYLeft + (wingHeight / 2)} ${attachXLeft},${wingY + wingHeight}" fill="black" />`;
        svg += `<polygon points="${attachXRight},${wingY} ${tipXRight},${tipYRight + (wingHeight / 2)} ${attachXRight},${wingY + wingHeight}" fill="black" />`;
    } else {
        // Default Rectangular ends
        svg += `<polygon points="${attachXLeft},${wingY} ${tipXLeft},${tipYLeft} ${tipXLeft},${tipYLeft + wingHeight} ${attachXLeft},${wingY + wingHeight}" fill="black" />`;
        svg += `<polygon points="${attachXRight},${wingY} ${tipXRight},${tipYRight} ${tipXRight},${tipYRight + wingHeight} ${attachXRight},${wingY + wingHeight}" fill="black" />`;
    }

    svg += `</svg>`;
    return svg;
}

// Export for Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = generateMustacheSVG;
}