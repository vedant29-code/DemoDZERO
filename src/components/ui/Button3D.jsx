import React, { useState } from 'react';
import { Text, RoundedBox } from '@react-three/drei';
import { Interactive } from '@react-three/xr';

export default function Button3D({ position, text, onClick, color = '#3b82f6', hoverColor = '#60a5fa', disabled = false, scale = 1, width = 2, height = 0.5 }) {
  const [hovered, setHovered] = useState(false);

  const handlePointerOver = () => !disabled && setHovered(true);
  const handlePointerOut = () => !disabled && setHovered(false);
  const handleClick = () => !disabled && onClick && onClick();

  return (
    <Interactive
      onSelect={handleClick}
      onHover={() => !disabled && setHovered(true)}
      onBlur={() => !disabled && setHovered(false)}
    >
      <group position={position} scale={scale}>
        <RoundedBox
          args={[width, height, 0.1]}
          radius={0.05}
          smoothness={4}
          onClick={handleClick}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
        >
          <meshStandardMaterial color={disabled ? '#4b5563' : (hovered ? hoverColor : color)} />
        </RoundedBox>
        <Text
          position={[0, 0, 0.06]}
          fontSize={height * 0.4}
          color="white"
          anchorX="center"
          anchorY="middle"
          maxWidth={width * 0.9}
          textAlign="center"
        >
          {text}
        </Text>
      </group>
    </Interactive>
  );
}
