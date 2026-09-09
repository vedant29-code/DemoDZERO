import React from 'react';
import { Text, RoundedBox } from '@react-three/drei';

export default function TextPanel3D({ position, title, text, width = 4, height = 2, color = '#1e293b' }) {
  return (
    <group position={position}>
      <RoundedBox args={[width, height, 0.1]} radius={0.1} smoothness={4}>
        <meshStandardMaterial color={color} />
      </RoundedBox>
      {title && (
        <Text
          position={[0, height / 2 - 0.3, 0.06]}
          fontSize={0.25}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={width * 0.9}
          textAlign="center"
        >
          {title}
        </Text>
      )}
      <Text
        position={[0, title ? -0.1 : 0, 0.06]}
        fontSize={0.15}
        color="white"
        anchorX="center"
        anchorY="middle"
        maxWidth={width * 0.9}
        textAlign="center"
        lineHeight={1.5}
      >
        {text}
      </Text>
    </group>
  );
}
