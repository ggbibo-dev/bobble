import React from 'react';
import * as THREE from 'three';

declare module "@react-three/fiber" {
    interface ThreeElements {
        blobShaderMaterial: React.RefAttributes<THREE.ShaderMaterial> & {
            transparent?: boolean;
        };
    }
}
interface BlobComponentProps {
    audioUrl?: string;
    width?: number;
    height?: number;
    className?: string;
}
declare const BlobComponent: React.FC<BlobComponentProps>;

export { BlobComponent, BlobComponent as BlobComponentDefault, type BlobComponentProps };
