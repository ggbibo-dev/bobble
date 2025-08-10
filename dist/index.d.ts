import React from 'react';

interface BlobComponentProps {
    text?: string;
    onClick?: () => void;
    className?: string;
}
declare const BlobComponent: React.FC<BlobComponentProps>;

export { BlobComponent, BlobComponent as BlobComponentDefault, type BlobComponentProps };
