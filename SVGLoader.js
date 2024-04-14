import React, { useEffect, useState } from 'react';
import { SvgUri } from 'react-native-svg';

const SVGLoader = ({ uri }) => {
  const [viewBox, setViewBox] = useState('');

  console.log(uri);

  useEffect(() => {
    if (uri) {
      fetch(uri)
        .then((response) => response.text())
        .then((svgContent) => {
          const widthMatch = svgContent.match(/width="([^"]+)"/);
          const heightMatch = svgContent.match(/height="([^"]+)"/);
          if (widthMatch && heightMatch) {
            const width = widthMatch[1];
            const height = heightMatch[1];
            setViewBox(`0 0 ${width} ${height}`);
          }
        })
        .catch((error) => console.error('Error fetching SVG:', error));
    }
  }, [uri]);

  return <SvgUri width='100%' height='100%' viewBox={viewBox} uri={uri} />;
};

export default SVGLoader;
